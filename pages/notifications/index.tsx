import Link from 'next/link';
import Head from 'next/head';

const Notifications = () => {
  return (
    <>
      <Head>
        <title>ニュース{process.env.NEXT_PUBLIC_BRANDNAME}</title>
      </Head>
      <div className="flex justify-center flex-wrap mx-4 md:mx-64">
        <h1 className="text-2xl font-bold my-4">お知らせ</h1>
        <div className="w-full mt-2 flex justify-center border-b border-gray-300 dark:border-gray-600 overflow-x-auto overflow-y-hidden">
          <Link href="">
            <a className="h-10 px-4 py-2 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-500 dark:text-blue-400 whitespace-nowrap focus:outline-none">
              お知らせ
            </a>
          </Link>

          <Link href="/notifications/news">
            <a className="h-10 px-4 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 transition">
              ニュース
            </a>
          </Link>
        </div>
        <Link href="">
          <a className="w-full border-b border-gray-300 dark:border-gray-600 py-2 px-2 hover:bg-gray-100 dark:hover:bg-zinc-800 transition">
            <span className="inline-block w-full text-xl">重要なお知らせ</span>
            <span className="text-gray-400 dark:text-gray-500">2022/08/20</span>
          </a>
        </Link>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Notifications;
