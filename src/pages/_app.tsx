import Layout from "@/components/layout/Layout";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import getDefaultSeoConfig from "../../next-seo.config";
import "@/styles/global.css";
import Script from "next/script";

function Root({ Component, pageProps }: AppProps) {
  const seoConfig = getDefaultSeoConfig();

  return (
    <>
      <DefaultSeo {...seoConfig} />

      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>

      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6200304491212280"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </>
  );
}

export default Root;
