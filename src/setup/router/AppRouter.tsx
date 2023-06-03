import { Route, Routes } from 'react-router-dom'

import { AuthLayout } from '@/layouts/auth'
import { UserLayout } from '@/layouts/user'

import { Home } from '@/pages/home'
import { Login } from '@/pages/login'
import { Register, RegisterCustomer, RegisterUser } from '@/pages/register'
import { UserProfile } from '@/pages/users'
import { CustomerLayout } from '@/layouts/customer'
import { PlaceDetails, PublishPlace } from '@/pages/places'
import { CustomerProfile } from '@/pages/customers'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/user" element={<RegisterUser />} />
          <Route path="/register/customer" element={<RegisterCustomer />} />
        </Route>

        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<h1>places</h1>} />
          <Route path="/places/new-place" element={<PublishPlace />} />
          <Route path="/places/:placeId" element={<PlaceDetails />} />
          <Route path="/categories" element={<h1>categories</h1>} />
          <Route path="/users/:userId" element={<UserProfile />} />
          <Route path="/users/:userId/edit" element={<h1>Editar perfil</h1>} />
        </Route>

        <Route element={<CustomerLayout />}>
          <Route path="/customers" element={<h1>Customers</h1>} />
          <Route path="/customers/:customerId" element={<CustomerProfile />} />
          <Route path="/customers/promos/new-promo" element={<h1>Promos</h1>} />
          <Route
            path="/customers/promos/new-service"
            element={<h1>Services - Products</h1>}
          />
        </Route>
      </Routes>
    </>
  )
}
