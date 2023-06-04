import { User } from '@/common/types'
import { EditProfileForm } from './components/EditProfileForm'
import { useAppSelector } from '@/common/hooks'
import { selectAuthUser } from '@/store/slices/authSlice'

export const EditProfile = () => {
  const authUser = useAppSelector(selectAuthUser) as User

  return <EditProfileForm user={authUser} />
}
