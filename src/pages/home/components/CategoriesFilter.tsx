import { useAppDispatch } from '@/common/hooks'
import { filterByCategory } from '@/store/slices/recommendationSlice'
import { Category } from '@/common/types'

export const CategoriesFilter = () => {
  const dispatch = useAppDispatch()

  const handleClickCategory = (category: Category) => {
    dispatch(filterByCategory(category))
  }

  return (
    <div className="navbar bg-primary flex justify-evenly items-center text-white">
      <button
        onClick={() => handleClickCategory('todo')}
        className="btn btn-ghost"
      >
        Lugares de interés
      </button>
      <button
        onClick={() => handleClickCategory('comida')}
        className="btn btn-ghost"
      >
        Comida
      </button>
      <button
        onClick={() => handleClickCategory('hospedaje')}
        className="btn btn-ghost"
      >
        Hospedaje
      </button>
      <button
        onClick={() => handleClickCategory('instituciones culturales')}
        className="btn btn-ghost"
      >
        Centros culturales
      </button>
    </div>
  )
}
