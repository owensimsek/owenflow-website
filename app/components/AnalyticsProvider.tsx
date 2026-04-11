"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initAnalytics } from "../lib/firebase";
import { logEvent } from "firebase/analytics";

export default function AnalyticsProvider() {
  const pathname = usePathname();

  useEffect(() => {
    initAnalytics().then((analytics) => {
      if (!analytics) return;
      logEvent(analytics, "page_view", {
        page_path: pathname,
        page_location: window.location.href,
      });
    });
  }, [pathname]);

  return null;
}
