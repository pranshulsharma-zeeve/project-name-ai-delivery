import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GPT Protocol Node Sale',
  description: 'Frontend foundation for buyer node sale experience',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
