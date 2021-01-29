import { useLayoutEffect } from "react"

export default function Header() {
  return (
    <div>
      <ul className="flex flex-wrap justify-between">
        <h1 className="font-header text-2xl">Nerdy Network</h1>
          <ul className="flex">
            <li className="px-4">The Feed</li>
            <li className="px-4">Profile</li>
            <li className="px-4">Login/Signup</li>
          </ul>
      </ul>
    </div>
  )
}
