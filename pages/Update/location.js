import { useState } from "react";


function DisplayAll(props) {
  const [product, setProduct] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProduct((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/mongo/update/location", {
      method: "PUT",
      body: JSON.stringify({ product }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
  };

  

  return (
    <>
    <h1 className="text-center font-bold p-10 text-xl dark:text-white ">
       Update the location of the product
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
            <form action="#" method="POST" onSubmit={handleSubmit}>
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
                        value={product.id}
                        onChange={handleChange}
                        autoComplete="id"
                        required="true"

                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="product-price"
                        className="block text-sm font-medium text-gray-700"
                      >
                       Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        id="location"
                        autoComplete="location"
                        value={product.location}
                        onChange={handleChange}
                        required="true"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>


                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    
                    
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Update 
                  </button>
                  
                </div>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayAll;
