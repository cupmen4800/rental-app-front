import { test_items } from 'pages';
import Image from 'next/image';
import Head from 'next/head';
import { RiHeartLine, RiHeartFill, RiEyeFill } from 'react-icons/ri';
import { SiEthereum } from 'react-icons/si';
import { AiFillTag } from 'react-icons/ai';
import { useState } from 'react';

export const getServerSideProps = async ({ params }: any) => {
  const postData = await test_items[params.id - 1];
  return {
    props: {
      postData,
    },
  };
};

const Post = ({ postData }: any) => {
  const [item_Heart, set_Item_HeartSet] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>
          {postData.title} - {process.env.NEXT_PUBLIC_BRANDNAME}
        </title>
        <meta name="description" content={`${postData.detail}`} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_SITEDOMAIN}/items/${postData.id}`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={`${postData.title} - ${process.env.NEXT_PUBLIC_BRANDNAME}`}
        />
        <meta property="og:description" content={`${postData.detail}`} />
      </Head>
      <div className="flex flex-wrap">
        <div className="w-full md:w-5/12 px-0 lg:px-2">
          <div className="w-full h-96 relative">
            <Image
              alt={postData.title}
              src="https://images.unsplash.com/photo-1658954382306-5c03f08a5de0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1791&q=80"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="w-full md:w-5/12 px-2">
          <h1 className="text-4xl font-bold">{postData.title}</h1>
          <div className="flex items-center gap-1 my-2 text-gray-400 dark:text-gray-300">
            <span className="text-xl font-medium">UserName</span>
          </div>
          <div className="w-full flex items-center gap-1 text-2xl text-gray-400 mt-2">
            <span className="flex items-center">
              <RiEyeFill />
              10K views
            </span>
            <button
              className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full p-1 transition"
              onClick={() => {
                set_Item_HeartSet(item_Heart ? false : true);
              }}
            >
              {item_Heart == false && <RiHeartLine />}
              {item_Heart == true && <RiHeartFill className="text-pink-600" />}
            </button>
          </div>
          <span className="text-6xl my-8 flex items-end font-bold">
            <SiEthereum />
            {postData.val}
            <span className="text-2xl font-medium">ETH</span>
          </span>
          <div className="md:hidden my-2 flex justify-start gap-4">
            <button className="btn primary-btn">今すぐ購入</button>
            <button className="btn outline-btn primary-outline-btn gap-2">
              <AiFillTag />
              オファーする
            </button>
          </div>
          <div className="my-6 text-xl">
            <p>
              ああああああああああああああああああああああああああ
              ああああああああああああああああああああああああああ
              ああああああああああああああああああああああああああ
              ああああああああああああああああああああああああああ
              ああああああああああああああああああああああああああ
              ああああああああああああああああああああああああああ
              ああああああああああああああああああああああああああ
              ああああああああああああああああああああああああああ
              ああああああああああああああああああああああああああ
              ああああああああああああああああああああああああああ
              ああああああああああああああああああああああああああ
              ああああああああああああああああああああああああああ
              ああああああああああああああああああああああああああ
              ああああああああああああああああああああああああああ
              ああああああああああああああああああああああああああ
              ああああああああああああああああああああああああああ
              あああああああああああああ
            </p>
          </div>
        </div>
        <div className="hidden md:block w-0 md:w-2/12">
          <div className="block">
            <button className="btn primary-btn my-4 mx-auto">今すぐ購入</button>
            <button className="btn outline-btn primary-outline-btn my-4 gap-2 mx-auto">
              <AiFillTag />
              オファーする
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
