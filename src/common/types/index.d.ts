// TODO: Improve interfaces respect to data model.
type ModelId = string

export type RequestStatus = 'idle' | 'pending' | 'fulfilled' | 'rejected'
export type UserRole = 'user' | 'customer' | 'admin' | null
export type City = 'pereira' | 'dosquebradas' | 'santa rosa'
export type DocumentType = 'CC' | 'NIT'

export type Category =
  | 'comida'
  | 'hospedaje'
  | 'instituciones culturales'
  | 'todo'

export interface User {
  _id: ModelId
  name: string
  lastName: string
  username?: string
  role: UserRole
  profileImgUrl?: string
  documentType: DocumentType
  documentNumber: string | number
  email: string
}
export interface Customer {
  _id: ModelId
  nit: string | number
  commercialRegistration: string
  companyName: string
  address?: string
  phone: string | number
  username?: string
  email: string
  profileImgUrl?: string
  role: UserRole
}

export interface Review {
  _id: ModelId
  authorId: ModelId
  comment: string
  rating: number
}

export interface Activity {
  _id: ModelId
  name: string
  price: number
}

//TODO: Add city field to this model
export interface Place {
  _id: ModelId
  name: string
  category: Category //TODO: Update category mockarro schema
  description: string
  imgUrl?: string //TODO: Change to string array
  location: string
  activities?: Activity[]
  reviews?: Review[]
  createdByUserId: MoldeId
  createdBy?: User
}
