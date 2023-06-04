import { NavLink, useNavigate } from 'react-router-dom'
import { Avatar, TuristriadaHeading } from '@/common/components'
import { useAppDispatch } from '@/common/hooks'
import { logout } from '@/store/slices/authSlice'
import { toast } from 'react-toastify'

export const CustomerNavbar = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleActiveClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-primary' : ''

  const handleProfile = () => {
    // TODO: Se debe usar el id del usuario que este logeado actualmente...
    navigate(`/customers/:userId`)
  }

  const handleClickLogout = () => {
    dispatch(logout())
      .unwrap()
      .catch(rejectedValue => {
        toast.error(rejectedValue)
      })
  }

  return (
    <>
      <div className="w-full bg-navbar/80 px-2">
        <div className="flex flex-col lg:flex-row justify-between items-center text-white font-semibold py-2">
          <TuristriadaHeading width={76} />
          <nav className="grow flex flex-row flex-wrap justify-evenly md:justify-end items-center gap-x-4">
            {/* <NavLink
              to="/customers/promos/new-service"
              className={handleActiveClass}
            >
              Mis productos/servicios
            </NavLink> */}
            <NavLink
              to="/customers/promos/new-promo"
              className={handleActiveClass}
            >
              Publica tus promociones
            </NavLink>
            <button onClick={handleClickLogout}>Salir</button>
            <button onClick={handleProfile}>
              <Avatar className="hidden lg:block" />
            </button>
          </nav>
        </div>
      </div>
    </>
  )
}
