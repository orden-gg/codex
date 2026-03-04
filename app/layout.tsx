import './globals.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { QueryProvider } from '@/components/query-provider';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const iosevka = localFont({
  src: [
    {
      path: './fonts/iosevka-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/iosevka-semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    template: '%s | fireball codex',
    default: 'fireball codex',
  },
  description:
    'Documentation for Fireball - The intelligent gaming bot platform for Gigaverse',
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'https://docs.fireball.gg'
  ),
  openGraph: {
    title: 'fireball codex',
    description:
      'Documentation for Fireball - The intelligent gaming bot platform for Gigaverse',
    siteName: 'fireball codex',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'fireball codex',
    description:
      'Documentation for Fireball - The intelligent gaming bot platform for Gigaverse',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={iosevka.variable}>
      <body className="flex min-h-screen flex-col">
        <QueryProvider>
          <RootProvider
            theme={{
              enabled: true,
              defaultTheme: 'dark',
              attribute: 'class',
              enableSystem: true,
              disableTransitionOnChange: true,
            }}
          >
            {children}
          </RootProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
