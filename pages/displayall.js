import Head from "next/head";

export default function Home({ properties }) {
  // console.log(properties);
  return (
    <>
      <div className="container">
        <Head>
          <title>Inventory</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>

      <div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden sm:rounded-lg shadow-md">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider"
                      >
                        Color
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider"
                      >
                        Price
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Apple MacBook Pro 17"
                      </td>
                      <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                        Sliver
                      </td>
                      <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                        Laptop
                      </td>
                      <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                        $2999
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Apple Imac 27"
                      </td>
                      <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                        White
                      </td>
                      <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                        Desktop Pc
                      </td>
                      <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                        $1999
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Apple Magic Mouse 2
                      </td>
                      <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                        White
                      </td>
                      <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                        Accessories
                      </td>
                      <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                        $99
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
