import Head from "next/head";
import Script from 'next/script'
import { useRouter } from "next/router";
import { useEffect } from "react";
import NProgress from "nprogress";

import { CategoriesProvider } from "../contexts/CategoriesContext";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/nprogress.css";
import "../styles/globals.css";
import "../styles/components/Image.css";
import "../styles/components/SkeletonLoading.css";
import { Cookies } from "../components/Cookies";
import { BannerFloating } from "../components/Announcement/BannerFloating/BannerFloating";
import * as gtag from '../Helper/gtag';
import { BannerProvider } from "../contexts/BannerContext";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleStart = (url) => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <div className="application">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.css"
        />
      </Head>
      <BannerFloating />
      <Cookies />
      <BannerProvider>
        <CategoriesProvider>
          <Header />
          <main style={{ minHeight: "calc(100vh - 689px)" }}>
            <Component {...pageProps} />
          </main>
          <Footer />
        </CategoriesProvider>
      </BannerProvider>

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </div>
  );
}

export default MyApp;
