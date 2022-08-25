import Link from 'next/link';
import Image from 'next/image';
import { IoNotifications } from 'react-icons/io5';

const Header = () => {
  return (
    <header className="hidden md:block bg-white shadow-md dark:bg-zinc-900/80 backdrop-blur-lg fixed w-full z-50">
      <nav>
        <div className="container px-6 py-4 mx-auto">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold text-gray-700">
                <Link href="/">
                  <a className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
                    {process.env.NEXT_PUBLIC_BRANDNAME}
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex-1 md:flex md:items-center md:justify-end">
              <div className="flex items-center mt-4 md:mt-0">
                <Link href="/notifications">
                  <a
                    className="text-3xl hidden mx-4 text-gray-600 transition-colors duration-200 transform md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                    aria-label="show notifications"
                  >
                    <IoNotifications />
                  </a>
                </Link>

                <button
                  type="button"
                  className="flex items-center focus:outline-none"
                  aria-label="toggle profile dropdown"
                >
                  <div className="w-8 h-8 relative overflow-hidden rounded-full">
                    <Image
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      layout="fill"
                      objectFit="cover"
                      alt="account icon"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
