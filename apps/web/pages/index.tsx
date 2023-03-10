import Head from "next/head";
import utilStyles from "@/styles/utils.module.scss";
import HomeLayout from "@/components/layouts/HomeLayout";

const siteTitle = "next js 온보딩";

export default function Home() {
  return (
    <HomeLayout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>안녕하세요 크리스입니다.</p>
        <p>이건 샘플 웹사이트입니다.</p>
      </section>
    </HomeLayout>
  );
}
