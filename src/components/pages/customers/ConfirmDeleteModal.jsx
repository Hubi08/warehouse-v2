import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export default function ConfirmDeleteModal({
  setDeleteModalShow,
  handleConfirm,
}) {
  return (
    <div className='fixed inset-0 overflow-y-auto'>
      <div className='flex items-center justify-center min-h-screen'>
        <div className='fixed inset-0 bg-neutral-400 opacity-70'></div>

        <div className='relative bg-neutral60 rounded-lg shadow-lg p-6 w-full max-w-md mx-auto z-50'>
          <button
            className='absolute top-2 right-4 hover:bg-neutral-100 rounded-full p-2 flex items-center justify-normal transition duration-300'
            onClick={() => setDeleteModalShow(false)}
          >
            <CloseOutlinedIcon />
          </button>

          <h2 className='text-xl font-bold mb-2'>
            Delete Customer: Are You Sure?
          </h2>
          <p className='text-sm font-medium mb-6 text-neutral-400'>
            Deleting a customer means you will no longer have access to their
            information or be able to view their details.
          </p>
          <div className='flex gap-4'>
            <button
              className='bg-[#b71c1c] text-[#fff] font-bold py-2 px-5 rounded transition duration-300'
              onClick={() => setDeleteModalShow(false)}
            >
              Cancel
            </button>
            <button
              className='bg-[#388e3c] text-[#fff] font-bold py-2 px-5 rounded transition duration-300'
              onClick={handleConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
