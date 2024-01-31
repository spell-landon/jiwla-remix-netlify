import type { MetaFunction } from '@remix-run/node';
import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import styles from './styles/app.css';
import Layout from './components/Global/Layout';
import favicon_16_16 from 'public/favicon-16x16.png';
import favicon_32_32 from 'public/favicon-32x32.png';
import site_manifest from 'public/site.webmanifest';
import apple_touch_icon from 'public/apple-touch-icon.png';
import { COMPANY_INFO } from './lib/const';

export const meta: MetaFunction = () => {
  const { companyName } = COMPANY_INFO;
  return [
    {
      charset: 'utf-8',
      title: companyName,
      viewport: 'width=device-width,initial-scale=1',
    },
  ];
};

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export default function App() {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <meta name='msapplication-TileColor' content='#874142' />
        <meta name='theme-color' content='#ffffff'></meta>

        <link rel='apple-touch-icon' sizes='180x180' href={apple_touch_icon} />
        <link rel='icon' type='image/png' sizes='32x32' href={favicon_32_32} />
        <link rel='icon' type='image/png' sizes='16x16' href={favicon_16_16} />
        <link rel='manifest' href={site_manifest} />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Sono:wght@300&family=Special+Elite&family=Stardos+Stencil:wght@400;700&family=Teko:wght@300&display=swap'
          rel='stylesheet'></link>
        <Links />
      </head>
      <body className='font-SpecialElite bg-tertiary/50'>
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>
      </body>
    </html>
  );
}
