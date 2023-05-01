import '@/styles/globals.css';
import { NextSeo } from 'next-seo';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title='IPL Tested World Championships'
        description='IPL Tested World Championships in Coventry, UK on 18th to 22nd October, 2023.'
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
