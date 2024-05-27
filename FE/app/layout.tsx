import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "./theme-provider";
import { Header } from "@/components/layout/header";
import { cn } from "@/lib/utils";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { HeaderSignIn } from "@/components/layout/header sign-in";
const inter = Inter({ subsets: ["latin"] });

let title = "Plan Buddy";
let description = "Plan your productive day using PlanBuddy";
let url = "https://planmydaybuddy.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title,
    description,
    url: url,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn((inter.className, ""))}>
          <ThemeProvider attribute="class" enableSystem>
            <SignedOut><Header/></SignedOut>
            <SignedIn><HeaderSignIn/></SignedIn>
            <div className="h-full flex flex-col justify-between">
              {children}
              <Footer />
            </div>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
    
  );
}
