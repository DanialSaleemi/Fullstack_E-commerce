import React from 'react'
import Head from 'next/head';
 const successpage = () => {
  return (
    <>
      <Head>
        <title>Order Success | Dine Market - Fashion</title>
      </Head>
      <div className="min-h-fit flex items-center justify-center">
        <div className="max-w-xl w-full p-7 rounded-lg bg-gradient-to-tr to-purple-900 via-teal-600 from-gray-900 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 mx-auto text-green-500 mb-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h1 className="text-3xl font-semibold text-white mb-4">
            Your bundle of happiness is on its way!
          </h1>
          <p className="text-gray-200 text-lg mb-6">
            Thank you for shopping with us today.
          </p>
          <a
            href="/"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg inline-block hover:bg-blue-600"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    </>  )
}

export default successpage;