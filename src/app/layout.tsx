import type { Metadata } from 'next';
import './globals.css';
import AuthProvider from '@/providers/AuthProvider';
import AuthContextProvider from '@/providers/AuthContextProvider';
import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';

export const metadata: Metadata = {
  title: {
    default: 'STARBUCKS APP',
    template: '%s | STARBUCKS APP',
  },
  description: '스타벅스 프로젝트',
  icons: { icon: '/assets/images/icons/icon.png' },
  metadataBase: new URL('https://starbucks-korea.com'),
  openGraph: {
    url: 'https://starbucks-korea.com',
    title: 'STARBUCKS APP',
    description: '스타벅스 프로젝트',
    images: [{ url: '/assets/images/og/og_image.png' }],
  },
  viewport:
    'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(options);
  const isAuth = session?.user ? true : false;
  return (
    <html lang="ko">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, 
    user-scalable=0"
        />
      </head>
      <body className="font-NanumSquare max-w-md mx-auto">
        <AuthContextProvider isAuth={isAuth}>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
