import { Outlet } from 'react-router-dom'
import { Footer } from '@/common/components/Footer'
import { UserNavbar } from './components/UserNavbar'

export const UserLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <UserNavbar />
      <div className="grow container mx-auto bg-base-100 flex flex-col gap-4">
        <div className="flex-grow flex justify-center gap-y-4">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}
