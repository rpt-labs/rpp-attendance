import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])
  return (
    <div className="text-center">
      <h2>The page cannot to found</h2>
      <p>
        Go back to the{' '}
        <Link href="/">
          <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Homepage</a>
        </Link>
      </p>
    </div>
  )
}

export default NotFound
