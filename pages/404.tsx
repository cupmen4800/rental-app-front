import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="mx-12 md:mx-24 text-center">
      <div className="w-full h-96 relative">
        <Image
          alt="404 image"
          src="/404.svg"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <span className="text-9xl font-bold">404</span>
      <span className="text-xl w-full inline-block">あとで書けよ</span>
      <div className="flex justify-center my-2">
        <Link href="/">
          <a className="btn primary-btn">Return</a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
