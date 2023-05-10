import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export default function Table({ customers, handleDelete, handleEdit }) {
  return (
    <div className='flex flex-col mb-8'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-neutral-200 sm:rounded-lg'>
            <table className='min-w-full divide-y divide-neutral-200'>
              <thead className='bg-neutral-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-neutral-600 uppercase tracking-wider'
                  >
                    Name
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-neutral-600 uppercase tracking-wider'
                  >
                    City
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-neutral-600 uppercase tracking-wider'
                  >
                    Country
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-neutral-600 uppercase tracking-wider'
                  >
                    Street
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-neutral-600 uppercase tracking-wider'
                  >
                    Number
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-neutral-600 uppercase tracking-wider'
                  >
                    Postal Code
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {customers.map((customer, idx) => (
                  <tr key={idx} className=''>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                      {customer.name}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-neutral-600'>
                      {customer.city}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-neutral-600'>
                      {customer.country}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-neutral-600'>
                      {customer.street}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-neutral-600'>
                      {customer.number}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-neutral-600'>
                      {customer.postalCode}
                    </td>
                    <td
                      className='p-2 whitespace-nowrap text-sm cursor-pointer transition duration-300  hover:opacity-80'
                      onClick={() => handleEdit(customer.id)}
                    >
                      <EditOutlinedIcon className='text-neutral-600' />
                    </td>
                    <td
                      className='p-2 whitespace-nowrap text-sm cursor-pointer transition duration-300  hover:opacity-80'
                      onClick={() => handleDelete(customer.id)}
                    >
                      <DeleteOutlineOutlinedIcon className='text-[#b71c1c]' />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
