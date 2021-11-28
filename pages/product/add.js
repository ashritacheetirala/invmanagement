import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DisplayAll(props) {
  const [product, setProduct] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProduct((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/mongo", {
      method: "POST",
      body: JSON.stringify({ product }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setProduct({})
  };

  const fetchData = async () => {
    const response = await fetch("/api/inventory");
    const data = await response.json();
    setInventory(data);
    console.log(inventory);
  };

  const difftoast = () =>{
    toast.success("Product Added Successfully!",{
      position:"top-center"
    })
  };
  return (
    <>
    <h1 className="text-center font-bold p-10 text-xl dark:text-white ">
        Add product to the inventory
      </h1>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Product Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Use this form to add a new product to the list of products
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form name="add-form" action="#" method="POST" onSubmit={handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="product-id"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Product Id
                      </label>
                      <input
                        type="text"
                        name="id"
                        id="id"
                        required="true"

                        value={product.id}
                        onChange={handleChange}
                        autoComplete="id"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Product Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required="true"

                        id="name"
                        value={product.name}
                        onChange={handleChange}
                        autoComplete="name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="model"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Product Model
                      </label>
                      <input
                        type="text"
                        name="model"
                        required="true"

                        id="model"
                        value={product.model}
                        onChange={handleChange}
                        autoComplete="model"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="product-price"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Product Price
                      </label>
                      <input
                        type="number"
                        name="price"
                        id="price"
                        required="true"

                        autoComplete="price"
                        value={product.price}
                        onChange={handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="manufacturer"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Manufacturer
                      </label>
                      <input
                        type="text"
                        name="manufacturer"
                        id="manufacturer"
                        required="true"

                        autoComplete="manufacturer"
                        value={product.manufacturer}
                        onChange={handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="type"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Type
                      </label>
                      <select
                        id="type"
                        name="type"
                        autoComplete="type"
                        required="true"

                        value={product.type}
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Mobile-Phone</option>
                        <option>Tablet</option>
                        <option>Laptop</option>
                        <option>Tablet-Accessory</option>
                        <option>Mobile-Accessory</option>
                        <option>PC/Laptop-Accessory</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="quantity"
                        
                        className="block text-sm font-medium text-gray-700"
                      >
                        Quantity
                      </label>
                      <input
                        type="number"
                        required="true"

                        name="quantity"
                        id="quantity"
                        autoComplete="quantity"
                        value={product.quantity}
                        onChange={handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="location"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Location
                      </label>
                      <input
                        type="number"
                        name="location"
                        id="location"
                        required="true"

                        autoComplete="location"
                        value={product.location}
                        onChange={handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    onClick={difftoast}
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayAll;
