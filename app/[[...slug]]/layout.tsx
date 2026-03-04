import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: 'fireball docs',
        url: '/',
      }}
      links={[
        {
          text: 'App',
          url: 'https://fireball.gg',
          external: true,
        },
        {
          text: 'Discord',
          url: 'https://discord.gg/fireball',
          external: true,
        },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
