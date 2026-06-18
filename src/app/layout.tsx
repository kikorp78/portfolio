import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import clsx from 'clsx';
import type { Metadata, Viewport } from 'next';
import { Geist, Fraunces, Geist_Mono } from 'next/font/google';
import { type ReactNode } from 'react';

import '@styles/globals.css';

config.autoAddCss = false;

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist'
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono'
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces'
});

export const metadata: Metadata = {
  title: 'Vuk V. — Portfolio',

  description:
    "Hi there! I'm a 21-year-old software engineer based in Germany.",

  icons: {
    icon: '/favicon.ico'
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kikorp.dev',
    siteName: 'kikorp.dev',
    title: 'Vuk V. — Portfolio',
    description:
      "Hi there! I'm a 21-year-old software engineer based in Germany.",
    images: [
      {
        url: '/pfp.webp',
        alt: 'profile picture'
      }
    ]
  },

  twitter: {
    card: 'summary'
  }
};

export const viewport: Viewport = {
  themeColor: '#ffce65'
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html className="h-full w-full antialiased" lang="en">
      <body
        className={clsx(
          'font-geist flex h-full w-full flex-col bg-[#f5f4ee]',
          geist.variable,
          geistMono.variable,
          fraunces.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
