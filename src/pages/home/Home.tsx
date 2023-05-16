import { CitiesCarousel } from './components/CitiesCarousel'

export const Home = () => {
  return (
    <div className="flex flex-col gap-y-9">
      <CitiesCarousel />
      <div className="navbar bg-primary flex justify-evenly items-center text-white">
        <button className="btn btn-ghost">Recomendaciones</button>
        <button className="btn btn-ghost">Comida</button>
        <button className="btn btn-ghost">Hospedaje</button>
        <button className="btn btn-ghost">Centros culturales</button>
      </div>
    </div>
  )
}
