import './globals.css';
import { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import Template from './template/Template';

const font = Noto_Sans({
  subsets: ['latin'], style: 'normal',
  weight: ['300', '400','500', '700']
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Create Next App',
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body className={font.className}>
        <Template>{children}</Template>
      </body>
    </html>
  );
}
