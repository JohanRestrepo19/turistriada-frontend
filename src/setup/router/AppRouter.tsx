import { Route, Routes } from 'react-router-dom'
import { AuthLayout } from '@/layouts/auth'
import { UserLayout } from '@/layouts/user'
import { Home } from '@/pages/home'
import { Login } from '@/pages/login'
import { Register, RegisterCustomer, RegisterUser } from '@/pages/register'
import { PublishPlace } from '@/pages/places'
import { UserProfile } from '@/pages/users'
import { CustomerLayout } from '@/layouts/customer'

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
          <Route
            path="/places/:placeId"
            element={<h1>Show place details</h1>}
          />
          <Route path="/categories" element={<h1>categories</h1>} />
          <Route path="/users/:userId" element={<UserProfile />} />
        </Route>

        <Route element={<CustomerLayout />}>
          <Route path="/customers" element={<h1>Customer Home</h1>} />
          <Route
            path="/customers/:customerId"
            element={<h1>Customer Profile</h1>}
          />
          <Route
            path="/customers/promos/new-promo"
            element={<h1>Promos</h1>}
          />
          <Route
            path="/customers/promos/new-service"
            element={<h1>Services - Products</h1>}
          />
        </Route>
      </Routes>
    </>
  )
}
