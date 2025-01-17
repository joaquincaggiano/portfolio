import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import { Locale } from "@/i18n/request";
import { ProviderUI } from "@/components/providers/ProviderUI";
import Header from "@/components/header/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Todo lo que debes saber sobre mi",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale} className="dark">
      <body
        className={`${poppins.className} bg-gradient-to-br from-black to-zinc-700 antialiased`}
      >
        <ProviderUI>
          <NextIntlClientProvider messages={messages}>

            <Header />
            <main className="flex flex-col flex-grow min-h-screen p-5 sm:p-10">
              {children}
            </main>
          </NextIntlClientProvider>
        </ProviderUI>
      </body>
    </html>
  );
}
