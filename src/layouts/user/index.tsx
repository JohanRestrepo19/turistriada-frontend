import { Navigate, Outlet } from 'react-router-dom'
import { Footer } from '@/common/components/Footer'
import { NotificationsContainer } from '@/common/components'
import { selectAuthUser } from '@/store/slices/authSlice'
import { useAppSelector } from '@/common/hooks'
import { UserNavbar } from './components/UserNavbar'

export const UserLayout = () => {
  // const authUser = useAppSelector(selectAuthUser)

  // if (!authUser) return <Navigate to="/login" />

  // if (authUser.role === 'customer') return <Navigate to="/customers" />

  return (
    <div className="min-h-screen flex flex-col">
      <UserNavbar />
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
