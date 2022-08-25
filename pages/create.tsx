import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { VscTriangleDown } from 'react-icons/vsc';
import React, { ReactNode, useRef, useState, useEffect } from 'react';
const { useFileUpload } = require('use-file-upload');

import MyEditor from 'components/create_editor';

const Create = () => {
  const [supply_val, supply_set] = useState<number>(1);
  const [files, selectFiles] = useFileUpload();
  return (
    <>
      <Head>
        <title>Create - {process.env.NEXT_PUBLIC_BRANDNAME}</title>
      </Head>
      <div className="px-12 py-6 md:p-6 w-full md:w-8/12 flex flex-wrap gap-6 mx-auto">
        <h2 className="font-semibold w-full text-4xl">コンテンツ</h2>
        {files ? (
          <div className="w-full md:w-2/3 h-96 relative text-right">
            <button className="z-40">X</button>
            <Image
              alt="contents"
              src={files?.source}
              layout="fill"
              objectFit="cover"
              className="rounded-3xl z-0"
            />
          </div>
        ) : (
          <button
            onClick={() =>
              selectFiles(
                {},
                ({
                  name,
                  size,
                  source,
                  file,
                }: {
                  name: string;
                  size: string;
                  source: string;
                  file: string;
                }) => {
                  console.log('Files Selected', { name, size, source, file });
                }
              )
            }
            className="flex justify-center items-center px-12 py-24 w-full md:w-72 h-auto relative border-4 text-9xl border-gray-700 text-gray-700 dark:border-gray-300 dark:text-gray-300 border-dashed rounded-3xl hover:bg-gray-200 hover:dark:bg-zinc-700 transition"
          >
            <AiOutlineCloudUpload />
          </button>
        )}
        <h2 className="font-semibold w-full text-4xl">タイトル</h2>
        <input type="text" className="create-form" />
        <h2 className="font-semibold w-full text-4xl">リンク</h2>
        <input type="text" className="create-form" />
        <h2 className="font-semibold w-full text-4xl">説明</h2>
        <MyEditor />
        <h2 className="font-semibold w-full text-4xl">コレクション</h2>
        <Dropdown title="Collection" label="Options">
          <a
            href="#"
            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-zinc-900 focus:outline-none focus:bg-gray-100 focus:text-zinc-900"
            role="menuitem"
          >
            Item0
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-zinc-900 focus:outline-none focus:bg-gray-100 focus:text-zinc-900"
            role="menuitem"
          >
            Item1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-zinc-900 focus:outline-none focus:bg-gray-100 focus:text-zinc-900"
            role="menuitem"
          >
            Item2
          </a>
        </Dropdown>
        <h2 className="font-semibold w-full text-4xl">製造数</h2>
        <input
          value={supply_val}
          onChange={(e: any) => {
            supply_set(() => e.target.value);
          }}
          type="number"
          className="create-form"
        />
        <button className="btn primary-btn">出品</button>
      </div>
    </>
  );
};

const Dropdown = (props: { children: ReactNode; title: any; label: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef: any = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (e: { target: any }) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div ref={dropdownRef} className="relative inline-block text-left w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex justify-center items-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          {props.title}
          <VscTriangleDown />
        </button>

        {isOpen && (
          <>
            <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg z-50">
              <div className="rounded-md bg-white shadow-xs">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {props.children}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Create;
