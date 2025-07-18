import IndexContents from "@/contents/index";
import { NextSeo } from "next-seo";

function HomePage() {
  return (
    <>
      <NextSeo />
      <IndexContents />
    </>
  );
}

export default HomePage;
