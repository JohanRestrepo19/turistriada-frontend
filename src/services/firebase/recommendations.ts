import { Place } from '@/common/types'
import { convertFirestoreTimeStampToDate } from '@/common/utils'
import { FirestoreDB } from '@/setup/firebase'
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore'

export const getRecommendations = async (): Promise<Place[]> => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return await getLatestPlaces()
}

export const getLatestPlaces = async (): Promise<Place[]> => {
  const latestPlacesQuery = query(
    collection(FirestoreDB, 'places'),
    orderBy('createdAt'),
    limit(10)
  )

  const latestPlacesSnapshot = await getDocs(latestPlacesQuery)
  const latestPlaces: Place[] = latestPlacesSnapshot.docs.map(doc => {
    return {
      _id: doc.id,
      createdAt: convertFirestoreTimeStampToDate(
        doc.get('createdAt')
      ).toString(),
      city: doc.get('city'),
      name: doc.get('name'),
      imgUrl: doc.get('imgUrl'),
      category: doc.get('category'),
      location: doc.get('location'),
      reviews: doc.get('reviews'),
      description: doc.get('description'),
      activities: doc.get('activities'),
      createdByUserId: doc.get('createdByUserId')
    }
  })
  return latestPlaces
}
