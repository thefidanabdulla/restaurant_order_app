import Image from 'next/image'
import { Inter } from 'next/font/google';
import Header from "./../components/Header";
import OrderTable from '@/components/OrderTable';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Header /> 
     <h2 className='text-center mt-10 text-3xl font-semibold text-[#121149]'>Orders</h2>
     <OrderTable />
    </>
  )
}
