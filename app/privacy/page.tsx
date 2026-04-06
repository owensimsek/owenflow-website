import type { Metadata } from "next";
import LegalLayout from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — OwenFlow",
  description: "How OwenFlow handles your data.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="April 2025"
      intro="OwenFlow is built on the principle that your financial data is yours. This policy explains what we collect, how we use it, and how we protect it."
      sections={[
        {
          title: "Information We Collect",
          body: "OwenFlow does not connect to your bank accounts or any third-party financial services. All data you enter — income, expenses, debt — is stored locally on your device and, if enabled, backed up through your personal iCloud account. We do not have access to your financial entries.",
        },
        {
          title: "Account Information",
          body: "If you create an account, we collect the email address you provide. This is used solely for authentication and product communications. We do not sell or share your email with third parties.",
        },
        {
          title: "Analytics",
          body: "We may collect anonymised, aggregate usage data (such as feature usage frequency and crash reports) to improve the app. This data cannot be used to identify you individually. You can opt out of analytics in the app settings.",
        },
        {
          title: "Data Storage",
          body: "Your financial data is stored on your device. iCloud Backup is optional and governed by Apple's privacy policy. We do not operate servers that store your financial entries.",
        },
        {
          title: "Third-Party Services",
          body: "OwenFlow uses Apple's standard frameworks and may use third-party SDKs for crash reporting and analytics. These services are bound by their own privacy policies. We do not integrate with any financial data providers.",
        },
        {
          title: "Children's Privacy",
          body: "OwenFlow is not directed at children under the age of 13. We do not knowingly collect personal information from children.",
        },
        {
          title: "Changes to This Policy",
          body: "We may update this policy from time to time. If we make material changes, we will notify you through the app or via email. Continued use of the app after changes constitutes acceptance of the updated policy.",
        },
      ]}
    />
  );
}
