import './globals.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

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
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
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
      </body>
    </html>
  );
}
