import React from "react"
import Layout from "../components/Layout"
import Link from "next/link"

function Login() {
  return (
    <Layout>
      <div className='mt-20 mx-auto w-1/3 border p-5 flex justify-center'>
        <div>
          <Link href='/signup'>
            <a>
              <button className=' text-sm border py-3 px-3 bg-gray-100 hover:bg-gray-200 rounded-md'>
                Create account
              </button>
            </a>
          </Link>
          <form action=''>
            <h1 className='text-center pb-5 text-xl font-bold'>Login</h1>
            <input
              type='text'
              placeholder='username'
              className='border pl-2 mr-2'
            />
            <input
              type='text'
              placeholder='password'
              className='border pl-2 ml-2'
            />
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default Login
