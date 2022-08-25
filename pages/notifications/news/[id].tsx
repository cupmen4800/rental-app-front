import Image from 'next/image';
import Head from 'next/head';
import { client } from 'libs/microcms';
import Date from 'libs/date';

export const getServerSideProps = async ({ params }: any) => {
  const id = params.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({ endpoint: 'news', contentId: idExceptArray });
  return {
    props: {
      newsData: data,
    },
  };
};

const News_Page = ({ newsData }: any) => {
  return (
    <>
      <Head>
        <title>
          {newsData.title} - {process.env.NEXT_PUBLIC_BRANDNAME}
        </title>
        <meta name="description" content={`${newsData.detail}`} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_SITEDOMAIN}/items/${newsData.id}`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={`${newsData.title} - ${process.env.NEXT_PUBLIC_BRANDNAME}`}
        />
        <meta property="og:description" content={`${newsData.detail}`} />
      </Head>
      <div className=" mx-48 w-full">
        <h1 className="text-4xl font-bold">{newsData.title}</h1>
        <span className="inline-block my-2 text-gray-400 dark:text-gray-500">
          {Date(newsData.publishedAt)}
        </span>
        <div
          className="news_page"
          dangerouslySetInnerHTML={{
            __html: `${newsData.content}`,
          }}
        />
      </div>
    </>
  );
};

export default News_Page;
