import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

export const AuthLayout = () => {
  return (
    <div className="container mx-auto min-h-screen p-4 bg-[#C8E6C9]/20 flex flex-col gap-4">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex-grow flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  )
}
