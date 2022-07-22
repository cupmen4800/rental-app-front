import type { NextPage } from 'next'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <div>
        <h1 className='text-lg'>とりあえずこっち</h1>
        <Link href="/explore"><a className='primary-btn'>explore</a></Link>
      </div>
    </>
  )
}

export default Home
