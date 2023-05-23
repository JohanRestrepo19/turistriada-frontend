// TODO: Improve interfaces respect to data model.

type ModelId = string

export type RequestStatus = 'pending' | 'fulfilled' | 'rejected'

export type UserRole = 'user' | 'customer' | 'admin' | null

export type City = 'pereira' | 'dosquebradas' | 'santa rosa'

export type Category =
  | 'comida'
  | 'hospedaje'
  | 'instituciones culturales'
  | 'todo'

export interface User {
  _id: ModelId
  name: string
  lastName: string
  username: string
  role: UserRole
  profileImgUrl?: string
  documentNumber: string | number
  email: string
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

export interface Place {
  _id: ModelId
  name: string
  category: Category //TODO: Update category mockarro schema
  description: string
  imgUrl?: string
  location: string
  activities?: Activity[]
  reviews?: Review[]
  createdByUserId: MoldeId
  createdBy?: User
}
