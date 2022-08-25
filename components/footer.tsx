import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-t-lg shadow md:px-6 md:py-8 dark:bg-zinc-800 absolute inset-x-0 bottom-0 h-44">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/">
          <a className="flex items-center mb-4 sm:mb-0">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {process.env.NEXT_PUBLIC_BRANDNAME}
            </span>
          </a>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <Link href="/">
              <a className="mr-4 hover:underline md:mr-6 ">About</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="mr-4 hover:underline md:mr-6 ">Privacy Policy</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="mr-4 hover:underline md:mr-6 ">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{' '}
        <a href="https://flowbite.com/" className="hover:underline">
          {process.env.NEXT_PUBLIC_BRANDNAME}
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
