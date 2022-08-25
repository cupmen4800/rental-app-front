import Link from 'next/link';
import {
  IoHome,
  IoSearchSharp,
  IoCreateOutline,
  IoNotificationsOutline,
} from 'react-icons/io5';

const Bottom_navbar = () => {
  return (
    <div className="fixed md:hidden w-full left-0 bottom-0 py-2 bg-zinc-gray-100 bg-white dark:bg-zinc-800">
      <nav>
        <ul className="flex justify-between mx-12 items-center gap-2 text-4xl font-bold">
          <li>
            <Link href="/">
              <a>
                <IoHome />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <IoSearchSharp />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <IoCreateOutline />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/notifications">
              <a>
                <IoNotificationsOutline />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Bottom_navbar;
