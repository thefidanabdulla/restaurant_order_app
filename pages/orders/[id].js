import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Index = () => {
  const { query } = useRouter();
  const [orderDetail, setorderDetail] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3001/orders/${query?.id}`)
      .then(response => response.json())
      .then(data => setorderDetail(data))
      .catch(error => console.log(error));
  }, []);
  console.log(orderDetail)
  const calculateTotalPrice = () =>{
    let totalPrice = 0;
    orderDetail?.orderDetail?.map((itm) => {
      totalPrice += parseInt(itm?.price);
    })
    return totalPrice;
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-8 mb-4">Order Detail</h1>
      <div className="container mx-auto mt-10">
        <div className="overflow-x-auto">
          <div className="align-middle inline-block min-w-full shadow-md overflow-hidden">
            <table className="min-w-full">
              <tbody>
                <tr className='border-b border-blue-100 '>
                  <td className="px-6 py-3 text-left text-lg font-bold text-gray-500 uppercase tracking-wider">Table number:</td>
                  <td className='font-semibold text-[#121149] text-lg'>{orderDetail?.tableNumber}</td>
                </tr>
                <tr className='border-b border-blue-100 '>
                  <td className="px-6 py-3 text-left text-lg font-bold text-gray-500 uppercase tracking-wider">Waiter Name:</td>
                  <td className='font-semibold text-[#121149] text-lg'>{orderDetail?.workerName}</td>
                </tr>
                <tr className='border-b border-blue-100 '>
                  <td className="px-6 py-3 text-left text-lg font-bold text-gray-500 uppercase tracking-wider">Total Price:</td>
                  <td className='font-semibold text-[#121149] text-lg'>{calculateTotalPrice()}</td>
                </tr>
                <tr className='border-b border-blue-100 '>
                  <td className="px-6 py-3 text-left text-lg font-bold text-gray-500 uppercase tracking-wider">Status:</td>
                  <td className='font-semibold text-[#121149] text-lg'>{orderDetail?.status}</td>
                </tr>
                <tr className='border-b border-blue-100 '>
                  <td className="px-6 py-3 text-left text-lg font-bold text-gray-500 uppercase tracking-wider">Date:</td>
                  <td className='font-semibold text-[#121149] text-lg'>{orderDetail?.date}</td>
                </tr>
                <tr className='border-b border-blue-100 '>
                  <td className="px-6 py-3 text-left text-lg font-bold text-gray-500 uppercase tracking-wider">Order Detail:</td>
                  <td className='font-semibold text-[#121149] text-lg'></td>
                </tr>
              </tbody>
            </table>
            <table className="min-w-full">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Product Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Count
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Waiting Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Cancel Statusu
                  </th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody className="bg-white divide-y divide-gray-200">
                {orderDetail?.orderDetail?.map((orderDetailItem) => (
                  <tr key={orderDetailItem?.id}>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${orderDetailItem?.cancelStatus == "true" ? "text-gray-400 font-semibold" : "text-gray-900"} `}>
                      {orderDetailItem?.productName}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${orderDetailItem?.cancelStatus == "true" ? "text-gray-400 font-semibold" : "text-gray-900"} `}>
                      {orderDetailItem?.count}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${orderDetailItem?.cancelStatus == "true" ? "text-gray-400 font-semibold" : "text-gray-900"} `}>
                      {orderDetailItem?.price}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${orderDetailItem?.cancelStatus == "true" ? "text-gray-400 font-semibold" : "text-gray-900"} `}>
                      {orderDetailItem?.waitingTime}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${orderDetailItem?.cancelStatus == "true" ? "text-gray-400 font-semibold" : "text-gray-900"} `}>
                      {orderDetailItem?.status}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${orderDetailItem?.cancelStatus == "true" ? "text-gray-400 font-semibold" : "text-gray-900"} `}>
                      {orderDetailItem?.cancelStatus}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index