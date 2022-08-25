import type { NextPage } from 'next';
import Link from 'next/link';

const Test = () => {
  return (
    <>
      <div className="my-24 w-full h-64 lg:w-1/2 lg:h-auto">
        {process.env.NEXT_PUBLIC_SERVICE_DOMAIN}
      </div>
    </>
  );
};

export const getStaticProps = () => {
  return {
    props: {},
  };
};

export default Test;
