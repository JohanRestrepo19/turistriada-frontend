import { UserNavbar } from './components/UserNavbar'
import { Outlet } from 'react-router-dom'

export const UserLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <UserNavbar />
      <div className="grow container mx-auto bg-base-100 flex flex-col gap-4">
        <div className="flex-grow flex justify-center items-center">
          <Outlet />
        </div>
      </div>
      <div className="w-full bg-blue-300"> 4. Footer </div>
    </div>
  )
}
