import type { Metadata } from "next";
import LegalLayout from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — OwenFlow",
  description: "Terms governing your use of OwenFlow.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="April 2025"
      intro="By downloading or using OwenFlow, you agree to these terms. Please read them carefully. They are written to be clear and fair."
      sections={[
        {
          title: "Use of the App",
          body: "OwenFlow is a personal finance tracking tool intended for individual, non-commercial use. You may use the app to record your own financial information. You may not use it for illegal purposes or in any way that violates applicable laws.",
        },
        {
          title: "Your Data",
          body: "You retain full ownership of the data you enter into OwenFlow. Because your data is stored locally on your device, you are responsible for maintaining backups. We are not liable for data loss resulting from device failure, accidental deletion, or other circumstances beyond our control.",
        },
        {
          title: "Account Responsibility",
          body: "If you create an account, you are responsible for maintaining the confidentiality of your credentials and for all activity under your account. Notify us immediately at hello@owenflow.com if you suspect unauthorised access.",
        },
        {
          title: "Intellectual Property",
          body: "The OwenFlow app, name, logo, and all related materials are the intellectual property of OwenFlow. You may not copy, modify, distribute, or reverse engineer any part of the app without explicit written permission.",
        },
        {
          title: "Disclaimer of Warranties",
          body: "OwenFlow is provided 'as is' without warranties of any kind. We do not guarantee that the app will be error-free, uninterrupted, or suitable for any particular purpose. OwenFlow is not a financial advisor. Nothing in the app constitutes financial advice.",
        },
        {
          title: "Limitation of Liability",
          body: "To the maximum extent permitted by law, OwenFlow and its creators shall not be liable for any indirect, incidental, or consequential damages arising from your use of the app, including any financial decisions made based on app data.",
        },
        {
          title: "Changes to These Terms",
          body: "We may update these terms from time to time. We will notify you of material changes through the app or via email. Continued use of the app after changes constitutes acceptance of the updated terms.",
        },
        {
          title: "Governing Law",
          body: "These terms are governed by applicable law. Any disputes will be resolved in the jurisdiction where OwenFlow is registered.",
        },
      ]}
    />
  );
}
