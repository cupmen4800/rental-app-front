import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Card from "components/card"

const Explore = () => {
  return (
    <>
      <div className="p-6 border-b-2 border-gray-200">
        <h1 className="text-6xl my-8">Explore</h1>
        <Link href=""><a className='primary-btn'>出品</a></Link>
      </div>
      <div className="p-6">
        <Card />
      </div>
    </>
  )
}

export default Explore
