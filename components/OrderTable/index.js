import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const OrderTable = () => {
  const [orderData, setOrderData] = useState([]);
  const [sortedOrders, setSortedOrders] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/orders')
      .then(response => response.json())
      .then(data => setOrderData(data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    const sortedOrdersTest = orderData.sort((a, b) => {
      
      if (new Date(a?.date) < new Date(b?.date)) return 1;
      if (new Date(a?.date) > new Date(b?.date)) return -1;
  
      if (a.id < b.id) return -1;
      if (a.id > b.id) return 1;
  
      return 0;
    });
    const sortedOrdersTest2 = sortedOrdersTest.sort((a, b) => {

      if (a.status === 'Sonlanmayıb' && b.status === 'Sonlanıb') return -1;
      if (a.status === 'Sonlanıb' && b.status === 'Sonlanmayıb') return 1;

      // if (new Date(a?.date) < new Date(b?.date)) return 1;
      // if (new Date(a?.date) > new Date(b?.date)) return -1;

      if (a.id < b.id) return -1;
      if (a.id > b.id) return 1;
  
      return 0;
    });
    setSortedOrders(sortedOrdersTest2);
  },[orderData])

  return (
    <div className="container mx-auto mt-10">
      <div className="overflow-x-auto">
        <div className="align-middle inline-block min-w-full shadow-md overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Table Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Waiter Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Total Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Detail
                </th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedOrders?.map((orderItem) => (
                <tr key={orderItem?.id}>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${orderItem?.status == "Sonlanmayıb" ? "text-red-800 font-semibold" : "text-gray-900"} `}>
                    {orderItem?.id}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${orderItem?.status == "Sonlanmayıb" ? "text-red-800 font-semibold" : "text-gray-500"} `}>
                    {orderItem?.tableNumber}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${orderItem?.status == "Sonlanmayıb" ? "text-red-800 font-semibold" : " text-gray-500"}`}>
                    {orderItem?.workerName}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm  ${orderItem?.status == "Sonlanmayıb" ? "text-red-800 font-semibold" : " text-gray-500"}`}>
                    {orderItem?.status}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${orderItem?.status == "Sonlanmayıb" ? "text-red-800 font-semibold" : " text-gray-500"}`}>
                    {orderItem?.totalPrice}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${orderItem?.status == "Sonlanmayıb" ? "text-red-800 font-semibold" : " text-gray-500"}`}>
                    {orderItem?.date ? orderItem?.date : "------------"}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${orderItem?.status == "Sonlanmayıb" ? "text-red-800 font-semibold" : " text-blue-500"} `}>
                    <Link href={`/orders/${orderItem?.id}`}>
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}




export default OrderTable