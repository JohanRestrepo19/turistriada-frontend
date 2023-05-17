// TODO: Mejorar todas las interfaces con respecto al modelo de datos

type ModelId = string
export type UserRole = 'user' | 'customer' | 'admin' | null
export type Category = 'comida' | 'hospedaje' | 'instituciones culturales'

export interface User {
  _id: ModelId
  name: string
  lastName: string
  username: string
  role: UserRole
  profileImgUrl: string
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
  category: Category //TODO: Actualizar el schema de category en mockaroo
  description: string
  imgUrl?: string
  location: string
  activities?: Activity[]
  reviews?: Review[]
  createdByUserId: MoldeId
  createdBy?: User
}
