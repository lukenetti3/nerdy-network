import { useLayoutEffect } from "react"
import Link from "next/Link"

export default function Header() {
  return (
    <div>
      <ul className="flex flex-wrap justify-between">
        <h1 className="font-header text-2xl">Nerdy Network</h1>
          <ul className="flex">
            <Link href="/Feed"><a className="px-4">The Feed</a></Link>
            <Link href="/Profile"><a className="px-4">Profile</a></Link>
            <Link href="/Login"><a className="px-4">Login/Signup</a></Link>
          </ul>
      </ul>
    </div>
  )
}
