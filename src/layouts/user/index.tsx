import { Navigate, Outlet } from 'react-router-dom'
import { Footer } from '@/common/components/Footer'
import { UserNavbar } from './components/UserNavbar'
import { ToastContainer } from 'react-toastify'
import { useAppSelector } from '@/common/hooks'
import { selectAuthUser } from '@/store/slices/authSlice'

export const UserLayout = () => {
  const authUser = useAppSelector(selectAuthUser)
  console.log('Auth user: ', authUser)

  if (!authUser) {
    return <Navigate to="/login" />
  }

  return (
    <div className="min-h-screen flex flex-col">
      <UserNavbar />
      <ToastContainer />
      <div className="grow container mx-auto bg-base-100 flex flex-col gap-4">
        <div className="flex-grow flex justify-center gap-y-4">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}
