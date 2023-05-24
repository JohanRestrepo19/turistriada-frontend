import { User } from "@/common/types"
import { PersonalInformationCard } from "./components/PersonalInformationCard"
import { LastestPostsCard } from "./components/LastestPostsCard"

export const UserProfile = () => {
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

  return (
    <>
      <div className="flex">
        <div className="mx-4">
          <PersonalInformationCard user={user} />
        </div>
        <div className="mx-4">
          <LastestPostsCard />
        </div>
      </div>
    </>
  )
}