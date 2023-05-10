import { useState } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import undrawaddcustomer from '/src/assets/undrawaddcustomer.svg';

export default function AddCustomerModal({
  handleSubmit,
  handleChange,
  newCustomer,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className='bg-cta hover:opacity-90 text-[#fff] font-semibold py-2 px-5 rounded flex items-center justify-center gap-1 transition duration-300'
        onClick={() => setIsOpen(true)}
      >
        Add customer
        <AddOutlinedIcon />
      </button>

      {isOpen && (
        <>
          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex items-center justify-center min-h-screen'>
              <div className='fixed inset-0 bg-neutral-400 opacity-70'></div>

              <div className='relative bg-neutral60 rounded-lg shadow-lg p-6 w-full max-w-4xl mx-auto'>
                <button
                  className='absolute top-2 right-4 hover:bg-neutral-100 rounded-full p-2 flex items-center justify-normal transition duration-300'
                  onClick={() => setIsOpen(false)}
                >
                  <CloseOutlinedIcon />
                </button>

                <h2 className='text-2xl text-neutral-600 font-bold mb-4'>
                  Enter New Customer
                </h2>

                <form
                  className='z-50 grid grid-cols-2 gap-10 text-neutral-600'
                  onSubmit={handleSubmit}
                >
                  <div className='image'>
                    <img src={undrawaddcustomer} alt='Formula' />
                  </div>
                  <div className='grouping'>
                    <div className='mb-4'>
                      <label
                        className='block opacity-90 font-bold mb-2'
                        htmlFor='name'
                      >
                        Name
                      </label>
                      <input
                        className='border rounded-lg px-4 py-2 w-full'
                        type='text'
                        name='name'
                        value={newCustomer.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='mb-4'>
                      <label
                        className='block opacity-90 font-bold mb-2'
                        htmlFor='country'
                      >
                        Country
                      </label>
                      <input
                        className='border rounded-lg px-4 py-2 w-full'
                        type='text'
                        name='country'
                        value={newCustomer.country}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='mb-4'>
                      <label
                        className='block opacity-90 font-bold mb-2'
                        htmlFor='state'
                      >
                        State
                      </label>
                      <input
                        className='border rounded-lg px-4 py-2 w-full'
                        type='text'
                        name='state'
                        value={newCustomer.state}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='mb-4'>
                      <label
                        className='block opacity-90 font-bold mb-2'
                        htmlFor='city'
                      >
                        City
                      </label>
                      <input
                        className='border rounded-lg px-4 py-2 w-full'
                        type='text'
                        name='city'
                        value={newCustomer.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='mb-4'>
                      <label
                        className='block opacity-90 font-bold mb-2'
                        htmlFor='street'
                      >
                        Street
                      </label>
                      <input
                        className='border rounded-lg px-4 py-2 w-full'
                        type='text'
                        name='street'
                        value={newCustomer.street}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='mb-4'>
                      <label
                        className='block opacity-90 font-bold mb-2'
                        htmlFor='number'
                      >
                        Number
                      </label>
                      <input
                        className='border rounded-lg px-4 py-2 w-full'
                        type='text'
                        name='number'
                        value={newCustomer.number}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='mb-4'>
                      <label
                        className='block opacity-90 font-bold mb-2'
                        htmlFor='postalCode'
                      >
                        Postal code
                      </label>
                      <input
                        className='border rounded-lg px-4 py-2 w-full'
                        type='text'
                        name='postalCode'
                        value={newCustomer.postalCode}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className='mt-8'>
                      <button
                        className='bg-cta hover:opacity-90 text-[#fff] font-bold py-2 px-4 rounded'
                        type='submit'
                      >
                        Add new customer
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
