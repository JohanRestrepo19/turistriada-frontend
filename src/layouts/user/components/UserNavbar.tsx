import { NavLink, useNavigate } from 'react-router-dom'
import { Avatar, TuristriadaHeading } from '@/common/components'
import { useAppDispatch } from '@/common/hooks'
import { logout } from '@/store/slices/authSlice'
import { toast } from 'react-toastify'

export const UserNavbar = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleClickLogo = () => {
    navigate('/')
  }

  const handleClickLogout = () => {
    dispatch(logout())
      .unwrap()
      .catch(rejectedValue => {
        toast.error(rejectedValue)
      })
  }

  const handleActiveClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-primary' : ''

  return (
    <>
      <div className="w-full bg-navbar/80 px-2">
        <div className="flex flex-col lg:flex-row justify-between items-center text-white font-semibold py-2">
          <TuristriadaHeading width={76} onClick={handleClickLogo} />
          <nav className="grow flex flex-row flex-wrap justify-evenly md:justify-end items-center gap-x-4">
            <NavLink to="/" className={handleActiveClass}>
              Inicio
            </NavLink>
            <NavLink to="/places/new-place" className={handleActiveClass}>
              Publica
            </NavLink>
            <NavLink to="/curiosities" className={handleActiveClass}>
              ¿Sabías qué?
            </NavLink>
            <NavLink to="/categories" className={handleActiveClass}>
              Categorias
            </NavLink>
            <button onClick={handleClickLogout}>Logout</button>
            <Avatar className="hidden lg:block" />
          </nav>
        </div>
      </div>
    </>
  )
}
