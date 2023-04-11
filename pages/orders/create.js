import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CreateOrderPage = () => {
  const router = useRouter();
  const [anyProductData, setanyProductData] = useState(false)

  const [orderData, setorderData] = useState({})
  const [tableNumber, setTableNumber] = useState("");
  const [workerName, setWorkerName] = useState("");
  const [orderStatus, setOrderStatus] = useState("Sonlanıb");
  const [date, setDate] = useState("");

  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("Burger");
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [waitingTime, setWaitingTime] = useState("10");
  const [productStatus, setProductStatus] = useState("Verildi");
  const [cancelStatus, setcancelStatus] = useState("False");

  const [addProductFormData, setaddProductFormData] = useState({})

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      id: nanoid(),
      tableNumber,
      workerName,
      status: orderStatus,
      date,
      orderDetail: [addProductFormData]
    };

    const response = await fetch('http://localhost:3001/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.log(JSON.stringify(data))

    if (response.ok) {
      alert('Order created successfully!');
      router.push("/");
    } else {
      alert('Failed to create order.');
    }

  };
  const handleProductAddFunc = (event) => {
    event.preventDefault();
    const data = {
      id: nanoid(),
      productName,
      count,
      status: productStatus,
      price: products.filter((itm) => itm?.title === productName)[0].price * count,
      waitingTime,
      cancelStatus
    };
    setaddProductFormData(data);
    setCount("");
    setProductName("");
    setWaitingTime("");
    setProductStatus("");
    alert("Product added succesfully. You can add some product too")
    setanyProductData(true);

  }

  const AddProduct = () => {
    return (
      <div className="py-4 px-10 m-1 border border-gray-200 rounded-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="product-name">
            Product Name
          </label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="product-name"
            value={setProductName}
            onChange={(event) => setProductName(event.target.value)}
          >
            <option value="Burger">Burger</option>
            <option value="Doner">Doner</option>
            <option value="Pizza">Pizza</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="count">
            Count
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="count"
            type="number"
            placeholder="Count"
            value={count}
            required
            onChange={(event) => setCount(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="waiting-time">
            Waiting Time
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="waiting-time"
            type="number"
            placeholder="Waiting time"
            value={waitingTime}
            required
            onChange={(event) => setWaitingTime(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="product-status">
            Status
          </label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="product-status"
            value={productStatus}
            onChange={(event) => setProductStatus(event.target.value)}
          >
            <option value="Verildi">Verildi</option>
            <option value="Verilmədi">Verilmədi</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="cancel-status">
            Cancel Status
          </label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cancel-status"
            value={cancelStatus}
            onChange={(event) => setcancelStatus(event.target.value)}
          >
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
        </div>
        <button
          onClick={() => handleProductAddFunc(event)}
          className="bg-blue-400 hover:bg-blue-500 text-white text-xs font-semibold py-2 px-4 rounded" type="submit">
          Add Product
        </button>
      </div>
    )
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Create restaurant order</h1>
      <h3 className="text-lg font-bold mb-4">Add Product</h3>
      <AddProduct />
      {anyProductData && (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="table-number">
              Table Number
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="table-number"
              required
              type="text"
              placeholder="Table Number"
              value={tableNumber}
              onChange={(event) => setTableNumber(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="waiter-name">
              Waiter Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="waiter-name"
              type="text"
              required
              placeholder="Waiter Name"
              value={workerName}
              onChange={(event) => setWorkerName(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="status">
              Status
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="status"
              value={orderStatus}
              onChange={(event) => setOrderStatus(event.target.value)}
            >
              <option value="Sonlanıb">Sonlanıb</option>
              <option value="Sonlanmayıb">Sonlanmayıb</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
              Date
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              required
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default CreateOrderPage;
