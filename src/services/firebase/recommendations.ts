import places from '@/common/data/places.json'
import { Place } from '@/common/types'

export const getRecommendations = async (): Promise<Place[]> => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return places as Place[]
}
