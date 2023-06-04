import { User } from '@/common/types'
import { PersonalInformationCard } from './components/PersonalInformationCard'
import { LastestPostsCard } from './components/LastestPostsCard'
import { useAppSelector } from '@/common/hooks'
import { selectAuthUser } from '@/store/slices/authSlice'

export const UserProfile = () => {
  
  const authUser = useAppSelector(selectAuthUser) as User

  return (
    <>
      <div className="flex">
        <div className="mx-4">
          <PersonalInformationCard user={authUser} />
        </div>
        <div className="mx-4 w-full">
          <LastestPostsCard />
        </div>
      </div>
    </>
  )
}
