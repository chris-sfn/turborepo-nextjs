import Head from "next/head";
import PostLayout from "@/components/layouts/PostLayout";

const siteTitle = "크리스의 첫번째 글";

const FirstPost = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <PostLayout>
        <h1>First Post</h1>
      </PostLayout>
    </>
  );
};

export default FirstPost;
