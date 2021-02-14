import Head from "next/head"
import Login from "./login"
import { useSession } from "next-auth/client"
import Signup from "./signup"
import Profile from "./profile"

export default function Home() {
  const [session, loading] = useSession()

  if (session) {
    return <Profile />
  } else {
    return <Signup />
  }
}
