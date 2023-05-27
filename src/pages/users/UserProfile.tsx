import { User } from '@/common/types'
import { PersonalInformationCard } from './components/PersonalInformationCard'
import { LastestPostsCard } from './components/LastestPostsCard'

export const UserProfile = () => {
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

  return (
    <>
      <div className="flex">
        <div className="mx-4">
          <PersonalInformationCard user={user} />
        </div>
        <div className="mx-4 w-96">
          <LastestPostsCard />
        </div>
      </div>
    </>
  )
}
