
"use client";
import Head from 'next/head'
// import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import MainLayout from '@/components/layout/MainLayout'
import Footer from '../components/template/Footer'
import Body from '@/components/template/Body'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function MyApp({ Component, pageProps }) {
  return (
    <>

      <Head>
        <title>AKVO</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin="" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="stylesheet" href="path/to/fontawesome.min.css" />
      </Head>
      {/* <body className={inter.className}> */}
      <body >
        <Body>
          <Component {...pageProps} />
          {/* {children} */}
        </Body>

        <Footer />
      </body>
    </>
  )
}
