import Head from 'next/head';
import Link from 'next/link';
import Card from 'components/card';

export const test_items = [
  {
    id: 1,
    title: 'Test1',
    val: 2,
    category: 'photo',
    contents:
      'https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
  },
  {
    id: 2,
    title: 'Test2',
    val: 2,
    category: 'photo',
    contents:
      'https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
  },
  {
    id: 3,
    title: 'Test3',
    val: 2,
    category: 'photo',
    contents:
      'https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
  },
];

const Explore = ({ category }: { category: any }) => {
  const accessTabItem = (props: any) => {
    if (category == props) {
      return 'h-10 px-4 py-2 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-500 dark:text-blue-400 whitespace-nowrap focus:outline-none';
    } else {
      return 'h-10 px-4 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 transition';
    }
  };
  return (
    <>
      <Head>
        <title>
          {process.env.NEXT_PUBLIC_BRANDNAME}{' '}
          {category != undefined && `- ${category}`}
        </title>
      </Head>
      <div className="px-6 pt-6 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-6xl my-8 font-bold">Explore</h1>
        <div className="flex justify-left">
          <Link href="/create">
            <a className="btn primary-btn">出品</a>
          </Link>
        </div>
        <div className="mt-2 flex border-gray-200 dark:border-gray-700 overflow-x-auto overflow-y-hidden">
          <Link href="/">
            <a className={accessTabItem(undefined)}>トレンド</a>
          </Link>

          <Link href={{ pathname: '/', query: { category: 'art' } }}>
            <a className={accessTabItem('art')}>アート</a>
          </Link>

          <Link href={{ pathname: '/', query: { category: 'photo' } }}>
            <a className={accessTabItem('photo')}>写真</a>
          </Link>

          <Link href={{ pathname: '/', query: { category: 'music' } }}>
            <a className={accessTabItem('music')}>音楽</a>
          </Link>

          <Link href={{ pathname: '/', query: { category: 'domain' } }}>
            <a className={accessTabItem('domain')}>ドメイン</a>
          </Link>
        </div>
      </div>
      <div className="flex justify-center flex-wrap">
        <div className="p-6 flex flex-wrap justify-center lg:justify-left gap-6 mx-auto">
          {filter_items(category).map(
            ({ id, title, val, category, contents }) => (
              <Card
                id={id}
                title={title}
                val={val}
                category={category}
                contents={contents}
                key={id}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

const filter_items = (props: string) => {
  if (props == undefined) {
    return test_items;
  } else {
    return test_items.filter((x) => x.category === props);
  }
};

export const getServerSideProps = async (context: any) => {
  const category = context.query.category;
  if (category == undefined) {
    return {
      props: {},
    };
  } else {
    return {
      props: {
        category: category,
      },
    };
  }
};

export default Explore;
