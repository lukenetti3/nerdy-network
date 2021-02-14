import React from "react"
import Layout from "../components/Layout"
import { signIn } from "next-auth/client"

export default function Signup() {
  return (
    <Layout>
      <h1>You are not logged in!</h1>
      <button onClick={() => signIn()}>Sign in</button>
    </Layout>
  )
}
