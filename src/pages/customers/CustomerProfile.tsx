import { Customer } from "@/common/types"
import { PersonalInformationCard } from "./components/PersonalInformationCard"


export const CustomerProfile = () => {
  // TODO: Props que van a llegar mas adelante a este componente
  const customer: Customer = {
    nit: '100452621',
    commercialRegistration: 'HGS543FRSD2',
    username: 'brskcol',
    companyName: 'Bershka',
    address: 'CRRA 4 #45 - 98 AV',
    email: 'company@test.com',
    phone:'34623176763',
    role: 'customer',
    _id: 'ajfdsjk3278ksad',
    profileImgUrl: 'https://i1.sndcdn.com/artworks-3gGx7pRAPu1a-0-t500x500.jpg'
  }

  return (
    <>
      <div className="flex">
        <div className="mx-4">
          <PersonalInformationCard customer={customer} />
        </div>
        <div className="mx-4 w-96">
          {/* <LastestPostsCard /> */}
        </div>
      </div>
    </>
  )
}