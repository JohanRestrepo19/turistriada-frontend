import { NavLink } from 'react-router-dom'
import { Avatar, TuristriadaHeading } from './'

export const UserNavbar = () => {
  return (
    <>
      <div className="w-full bg-navbar/80 ">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-white font-semibold py-2">
          <TuristriadaHeading width={76} />
          <nav className="grow flex flex-wrap gap-x-12 justify-end items-center">
            <NavLink to="">Recomendaciones</NavLink>
            <NavLink to="">Promociones</NavLink>
            <NavLink to="">¿Sabías qué?</NavLink>
            <NavLink to="">Categorias</NavLink>
            <button>Logout</button>
            <Avatar imgSrc="https://www.google.com/imgres?imgurl=https%3A%2F%2Fe0.pxfuel.com%2Fwallpapers%2F889%2F641%2Fdesktop-wallpaper-aesthetic-tiktok-aesthetic-profile-pic.jpg&tbnid=o1_M1q3e1QEWVM&vet=12ahUKEwjKrITI_PX-AhXXnoQIHffyBR8QMygOegUIARCCAg..i&imgrefurl=https%3A%2F%2Fwww.pxfuel.com%2Fen%2Fquery%3Fq%3Dprofile%2Baesthetic&docid=5oitQR5VLit6tM&w=850&h=1509&q=profile%20pictures&ved=2ahUKEwjKrITI_PX-AhXXnoQIHffyBR8QMygOegUIARCCAg" />
          </nav>
        </div>
      </div>
    </>
  )
}
