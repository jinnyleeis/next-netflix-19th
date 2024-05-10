import type { Metadata } from 'next';
import './globals.css';


export const metadata: Metadata = {
  title: 'next-netflix-19',
  description: 'ceos19',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
