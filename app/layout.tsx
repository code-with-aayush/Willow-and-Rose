import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { clinic } from "@/lib/data";
import "../styles/globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://willowandrose-demo.com"),
  title: {
    default: `${clinic.fullName} | Austin Med Spa`,
    template: `%s | ${clinic.name}`
  },
  description:
    "A warm, no-pressure medical aesthetics clinic in Austin offering Botox, fillers, laser treatments, facials, and body contouring.",
  openGraph: {
    title: clinic.fullName,
    description:
      "Austin's most trusted medical aesthetics clinic. Real results, no pressure — just a team that listens.",
    images: [{ url: "/images/hero-bg.png", width: 1200, height: 630 }],
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const voiceflowProjectId = process.env.NEXT_PUBLIC_VOICEFLOW_PROJECT_ID;

  return (
    <html className={`${display.variable} ${body.variable}`} lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
        {voiceflowProjectId ? (
          <Script id="voiceflow-config" strategy="afterInteractive">
            {`
              window.__WILLOW_ROSE_VOICEFLOW_PROJECT_ID__ = "${voiceflowProjectId}";
            `}
          </Script>
        ) : null}
      </body>
    </html>
  );
}
