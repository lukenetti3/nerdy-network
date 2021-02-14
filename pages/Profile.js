import React from "react"
import Layout from "../components/Layout"
import { PrismaClient } from "@prisma/client"

export async function getStaticProps() {
    const prisma = new PrismaClient()
    const user = await prisma.user.findMany()
    return {
      props: { user },
    }
  }

function Profile({ user }) {
    console.log(user)
    return(
        <Layout>
            <div className="mt-10">
            <h1 className="text-xl font-bold">List of Users in database</h1>
            {user.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}
            </div>
            
        </Layout>
    )
}

export default Profile