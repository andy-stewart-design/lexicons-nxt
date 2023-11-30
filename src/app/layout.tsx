import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import StateProviders from '@components/Providers/StateProviders';
import { GeistSans } from 'geist/font/sans';
import '@styles/main.css';

export const metadata: Metadata = {
  title: 'Lexicons | Free, Open Source SVG Icons',
  description:
    'Lexicons is a free, open source, pixel-perfect-ish icon set designed and developed by Andy Stewart',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = cookies().get('theme')?.value ?? 'dark';

  return (
    <html lang="en" className={GeistSans.className} data-theme={theme}>
      <StateProviders theme={theme}>{children}</StateProviders>
    </html>
  );
}
