import Head from "next/head"
import Login from "./login"

export default function Home() {
  return (
    <div>
        <Head>
          <title>Login</title>
        </Head>
        <Login />
    </div>
  )
}
