import { useLayoutEffect } from "react"
import Link from "next/Link"
import { signIn, signOut, useSession } from "next-auth/client"

export default function Header() {
  const [session, loading] = useSession()

  return (
    <div className='bg-blue-400 py-6 px-10 mb-10'>
      <ul className='flex flex-wrap justify-between'>
        <h1 className='font-header text-2xl'>Nerdy Network</h1>
        <ul className='flex justify-center'>
          <Link href='/feed'>
            <a className='px-4'>The Feed</a>
          </Link>
          <Link href='/profile'>
            <a className='px-4'>Profile</a>
          </Link>
          <span className='px-4'>
            {session ? (
              <button onClick={() => signOut()}>Sign out</button>
            ) : (
              <button onClick={() => signIn()}>Sign In</button>
            )}
          </span>
        </ul>
      </ul>
    </div>
  )
}
