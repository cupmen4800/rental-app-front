import Link from 'next/link';
import Image from 'next/image';
import { SiEthereum } from 'react-icons/si';

const Card = (data: {
  id: number;
  title: string;
  val: number;
  category: string;
  contents: string;
}) => {
  return (
    <Link href={`/items/${data.id}`}>
      <a className="group w-72 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-zinc-800 hover:shadow-gray-300 hover:shadow-lg dark:hover:shadow-gray-900 dark:hover:shadow-lg dark:hover:bg-zinc-700 transition">
        <div className="w-full h-48 transform">
          <Image
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
            alt="NIKE AIR"
            objectFit="cover"
            layout="fill"
            className="transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="px-4 py-2 ">
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <h1 className="text-lg font-bold flex items-center">
            <SiEthereum />
            {data.val}ETH
          </h1>
        </div>
      </a>
    </Link>
  );
};

export default Card;
