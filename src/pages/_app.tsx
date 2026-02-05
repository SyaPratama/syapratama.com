import Layout from "@/components/layout/Layout";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import getDefaultSeoConfig from "../../next-seo.config";
import "@/styles/global.css";

function Root({ Component, pageProps }: AppProps) {
  const seoConfig = getDefaultSeoConfig();
  return (
    <html suppressHydrationWarning={true}>
      <DefaultSeo {...seoConfig} />
      <body>
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

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6200304491212280"
          crossorigin="anonymous"></script>
      </body>
    </html>
  );
}

export default Root;
