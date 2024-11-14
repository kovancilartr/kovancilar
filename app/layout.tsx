import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";

// const outfit = Outfit({ subsets: ["latin"] });
const barlow = Barlow({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Kovancılar School Management Dashboard",
  description: "Next.js School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={barlow.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* <AuthProvider> */}
            {children}
            {/* </AuthProvider> */}
            {/* <Toaster /> */}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
