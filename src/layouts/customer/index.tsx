import { Navigate, Outlet } from 'react-router-dom'
import { Footer } from '@/common/components/Footer'
import { CustomerNavbar } from './components/CustomerNavbar'
import { useAppSelector } from '@/common/hooks'
import { selectAuthUser } from '@/store/slices/authSlice'
import { NotificationsContainer } from '@/common/components'

export const CustomerLayout = () => {
  const authUser = useAppSelector(selectAuthUser)

  if (!authUser) return <Navigate to="/login" />

  if (authUser.role === 'user') return <Navigate to="/" />

  return (
    <div className="min-h-screen flex flex-col">
      <CustomerNavbar />
      <NotificationsContainer />
      <div className="grow container mx-auto bg-base-100 flex flex-col gap-4">
        <div className="flex-grow flex justify-center gap-y-4">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}
