import { NotificationsContainer } from '@/common/components'
import { useAppSelector } from '@/common/hooks'
import { selectAuthUser } from '@/store/slices/authSlice'
import { Navigate, Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  const authUser = useAppSelector(selectAuthUser)

  if (authUser && authUser.role === 'user') {
    return <Navigate to="/" />
  }

  if (authUser && authUser.role === 'customer') {
    return <Navigate to="/customers" />
  }
  return (
    <div className="container mx-auto min-h-screen p-4 bg-[#C8E6C9]/20 flex flex-col gap-4">
      <NotificationsContainer />
      <div className="flex-grow flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  )
}
