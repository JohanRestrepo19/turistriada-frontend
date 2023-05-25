import { Outlet } from 'react-router-dom'
import { Footer } from '@/common/components/Footer'
import { CustomerNavbar } from './components/CustomerNavbar'

export const CustomerLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomerNavbar />
      <div className="grow container mx-auto bg-base-100 flex flex-col gap-4">
        <div className="flex-grow flex justify-center gap-y-4">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}