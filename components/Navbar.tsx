import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex justify-between flex-row-reverse bg-gray-200 p-10">
      <div className="flex flex-row">
        <Link href="/">
          <a className="pr-5">Home</a>
        </Link>
        <Link href="/cohorts">
          <a className="pr-5">Cohorts</a>
        </Link>
        <Link href="/students">
          <a className="pr-5">Students</a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
