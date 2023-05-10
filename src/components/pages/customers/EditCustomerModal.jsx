import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useEffect } from 'react';

export default function EditCustomerModal({
  setOpenEditModal,
  handleSubmitEdit,
  editContent,
  setEditContent,
  editedCustomer,
}) {
  useEffect(() => {
    if (editedCustomer) {
      setEditContent(editedCustomer);
    }
  }, [editedCustomer, setEditContent]);

  return (
    <>
      <div className='fixed inset-0 overflow-y-auto'>
        <div className='flex items-center justify-center min-h-screen'>
          <div className='fixed inset-0 bg-neutral-400 opacity-70'></div>

          <div className='relative bg-neutral60 rounded-lg shadow-lg p-6 w-full max-w-md mx-auto z-50'>
            <button
              className='absolute top-2 right-4 hover:bg-neutral-100 rounded-full p-2 flex items-center justify-normal transition duration-300'
              onClick={() => setOpenEditModal(false)}
            >
              <CloseOutlinedIcon />
            </button>

            <h2 className='text-2xl font-bold mb-4'>Edit Customer</h2>

            <form className='z-50' onSubmit={(e) => e.preventDefault()}>
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
                  value={editContent.name || ''}
                  onChange={(e) => {
                    setEditContent({
                      ...editContent,
                      [e.target.name]: e.target.value,
                    });
                  }}
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
                  value={editContent.country || ''}
                  onChange={(e) => {
                    setEditContent({
                      ...editContent,
                      [e.target.name]: e.target.value,
                    });
                  }}
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
                  value={editContent.state || ''}
                  onChange={(e) => {
                    setEditContent({
                      ...editContent,
                      [e.target.name]: e.target.value,
                    });
                  }}
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
                  value={editContent.city || ''}
                  onChange={(e) => {
                    setEditContent({
                      ...editContent,
                      [e.target.name]: e.target.value,
                    });
                  }}
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
                  value={editContent.street || ''}
                  onChange={(e) => {
                    setEditContent({
                      ...editContent,
                      [e.target.name]: e.target.value,
                    });
                  }}
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
                  value={editContent.number || ''}
                  onChange={(e) => {
                    setEditContent({
                      ...editContent,
                      [e.target.name]: e.target.value,
                    });
                  }}
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
                  value={editContent.postalCode || ''}
                  onChange={(e) => {
                    setEditContent({
                      ...editContent,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  required
                />
              </div>

              <div className='mt-8'>
                <button
                  className='bg-cta hover:opacity-90 text-[#fff] font-bold py-2 px-4 rounded'
                  //   onClick={() => handleSubmitEdit(customer.id)}
                  onClick={() => handleSubmitEdit(editedCustomer.id)}
                >
                  Submit edit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
