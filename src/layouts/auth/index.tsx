import { NotificationsContainer } from '@/common/components'
import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    <div className="container mx-auto min-h-screen p-4 bg-[#C8E6C9]/20 flex flex-col gap-4">
      <NotificationsContainer />
      <div className="flex-grow flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  )
}
