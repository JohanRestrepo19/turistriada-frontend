import { User } from '@/common/types'
import EditProfileForm from './components/EditProfileForm'

export const EditProfile = () => {
  // TODO: Props que van a llegar mas adelante a este componente
  const user: User = {
    documentType: 'CC',
    documentNumber: '100452621',
    username: 'Brandddd',
    name: 'Brandon',
    lastName: 'Alvarez',
    email: 'hola.correo@utp.edu.co',
    role: 'user',
    _id: 'ajfdsjk3278ksad',
    profileImgUrl: 'https://avatars.githubusercontent.com/u/54783819?v=4'
  }

  return <EditProfileForm user={user} />
}
