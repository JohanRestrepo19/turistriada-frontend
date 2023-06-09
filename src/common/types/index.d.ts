type ModelId = string

export type RequestStatus = 'idle' | 'pending' | 'fulfilled' | 'rejected'
export type UserRole = 'user' | 'customer' | 'admin' | null
export type City = 'pereira' | 'dosquebradas' | 'santa rosa'
export type DocumentType = 'CC' | 'CE' | 'PA' | 'NIT'

export type Category =
  | 'lugares de interes'
  | 'comida'
  | 'hospedaje'
  | 'centros culturales'
  | 'todo'

export interface User {
  _id: ModelId
  documentNumber: string | number
  documentType: DocumentType
  email: string
  firstName: string
  lastName: string
  profileImgUrl?: string
  role: 'user'
  username?: string
}

export interface Promo {
  _id: ModelId
  createdAt: Date | string
  createdByUserId: MoldeId
  description: string
  promoImgUrl?: string
  title: string
}

export interface Customer {
  _id: ModelId
  location?: string
  commercialRegistration: string
  companyName: string
  email: string
  nit: string
  phone: string
  profileImgUrl?: string
  username?: string
  role: 'customer'
}

export interface Review {
  _id: ModelId
  authorId: ModelId
  comment: string
  rating: number
  createdAt: Date | string
}

export interface Activity {
  name: string
  price: number
}

export interface Place {
  _id: ModelId
  activities?: Activity[]
  category: Category
  city: City
  createdAt: Date | string
  createdByUserId: MoldeId
  description: string
  imgUrl?: string
  location: string
  name: string
  reviews?: Review[]
}
