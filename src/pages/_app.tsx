import '@/styles/globals.css';
import { NextSeo } from 'next-seo';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo title='scottfreeman.net' description='scottfreeman.net | Scott Freeman' />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
