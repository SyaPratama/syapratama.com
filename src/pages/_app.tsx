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
      </body>
    </html>
  );
}

export default Root;
