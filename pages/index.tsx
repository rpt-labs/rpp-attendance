import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>RPP | Home</title>
      </Head>
      <div>
        <h1>Homepage</h1>
        <Link href="/cohorts">
          <a>View cohorts</a>
        </Link>
        <Link href="/students">
          <a>View students</a>
        </Link>
      </div>
    </>
  )
}
