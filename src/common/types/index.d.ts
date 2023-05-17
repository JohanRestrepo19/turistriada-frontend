// TODO: Mejorar todas las interfaces con respecto al modelo de datos

type ModelId = string

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
  /* TODO: Añadir este campo a la mockdata authorId: ModelId */
  name: string
  imgUrl?: string
  description: string
  location: string
  activities?: Activity[]
  reviews?: Review[]
}
