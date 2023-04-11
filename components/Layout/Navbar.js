import Link from 'next/link'
import React from 'react'

const Index = () => {
  return (
    <nav className="bg-blue-100 py-4">
      <div className="container flex justify-between items-center mx-auto px-2">
        <Link href={"/"} className='text-4xl italic font-bold opacity-80'>
          Orders
        </Link>
        <div>
          <Link href={'/orders/create'}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Create Order
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Index