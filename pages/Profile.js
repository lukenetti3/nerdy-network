import React from "react"
import Layout from "../components/Layout"
import { PrismaClient } from "@prisma/client"
import { useSession } from "next-auth/client"

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const user = await prisma.user.findMany()
  return {
    props: { user },
  }
}

function Profile({ user }) {
  const [session, loading] = useSession()

  console.log(session.user.name)

  return (
    <Layout>
      <h1>Welcome to your profile: {session.user.name}</h1>
    </Layout>
  )
}

export default Profile
