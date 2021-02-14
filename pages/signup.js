import React from "react"
import Layout from "../components/Layout"

export default function Signup() {
  return (
    <Layout>
      <div className='mt-20 mx-auto w-1/3 border p-5 flex justify-center'>
        <div>
          <form action=''>
            <h1 className='text-center pb-5 text-xl font-bold'>Create new account</h1>
            <input
              type='text'
              placeholder='name'
              className='border pl-2 mb-3'
            />
            <br/>
            <input
              type='text'
              placeholder='username'
              className='border pl-2 mb-3'
            />
            <br/>
            <input
              type='text'
              placeholder='password'
              className='border pl-2 mb-3'
            />
          </form>
        </div>
      </div>
    </Layout>
  )
}
