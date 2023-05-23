import { User } from '@/common/types'
import { PersonalInformationCard } from './user/PersonalInformationCard'

export const ViewUserProfile = () => {
  // TODO: Props que van a llegar mas adelante a este componente
  const user: User = {
    documentNumber: '1088351988',
    username: 'Brandddd',
    name: 'Brandon',
    lastName: 'Alvarez',
    email: 'b.palacio1@utp.edu.co',
    role: 'user',
    _id: 'ajfdsjk3278ksad',
    profileImgUrl: 'https://avatars.githubusercontent.com/u/54783819?v=4'
  }
  
  return <PersonalInformationCard user={user} />
}
