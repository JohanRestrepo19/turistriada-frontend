import { Place } from '@/common/types'
import { convertFirestoreTimeStampToDate } from '@/common/utils'
import { FirestoreDB } from '@/setup/firebase'
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore'

export const getRecommendations = async (): Promise<Place[]> => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return await getLatestPlaces()
}

export const getLatestPlaces = async (): Promise<Place[]> => {
  const latestPlaces: Place[] = []
  const latestPlacesQuery = query(
    collection(FirestoreDB, 'places'),
    orderBy('createdAt', 'desc'),
    limit(10)
  )
  const latestPlacesSnapshot = await getDocs(latestPlacesQuery)

  for (const placeDoc of latestPlacesSnapshot.docs) {
    const result: Place = {
      _id: placeDoc.id,
      createdAt: convertFirestoreTimeStampToDate(
        placeDoc.get('createdAt')
      ).toString(),
      city: placeDoc.get('city'),
      name: placeDoc.get('name'),
      imgUrl: placeDoc.get('imgUrl'),
      category: placeDoc.get('category'),
      location: placeDoc.get('location'),
      reviews: placeDoc.get('reviews'),
      description: placeDoc.get('description'),
      activities: placeDoc.get('activities'),
      createdByUserId: placeDoc.get('createdByUserId')
    }
    latestPlaces.push(result)
  }
  return latestPlaces
}
