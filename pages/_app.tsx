import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CookieConsent from "../components/CookieConsent";

export default function App({ Component, pageProps }: AppProps) {
  const handleCookieAccept = () => {
    console.log("Cookies accepted");
    // Enable analytics, tracking, etc.
  };

  const handleCookieDecline = () => {
    console.log("Cookies declined");
    // Disable non-essential cookies
  };

  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <CookieConsent onAccept={handleCookieAccept} onDecline={handleCookieDecline} />
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
}
