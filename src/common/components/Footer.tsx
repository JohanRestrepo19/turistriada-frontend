import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral/70 shadow-inner text-base-content">
      <div>
        <p className="text-2xl font-semibold">Turistriada</p>
      </div>
      <div>
        <span className="footer-title">Turistriada</span>
        <Link to="/" className="link link-hover">
          Inicio
        </Link>
        <Link to="#" className="link link-hover">
          Acerca
        </Link>
      </div>
      <div>
        <span className="footer-title">Ciudades</span>
        <Link
          to="https://www.pereira.gov.co/"
          target="_blank"
          className="link link-hover"
        >
          Pereira
        </Link>
        <Link
          to="https://www.dosquebradas.gov.co/web/"
          target="_blank"
          className="link link-hover"
        >
          Dosquebradas
        </Link>
        <Link
          to="https://www.santarosadecabal-risaralda.gov.co/"
          target="_blank"
          className="link link-hover"
        >
          Santa Rosa de Cabal
        </Link>
      </div>
      <div>
        <span className="footer-title">Contacto</span>
        <Link
          to="https://www.instagram.com/turistriada/"
          target="_blank"
          className="link link-hover"
        >
          Instagram
        </Link>
        <Link
          to="https://www.facebook.com/profile.php?id=100092108271960"
          target="_blank"
          className="link link-hover"
        >
          Facebook
        </Link>
      </div>
    </footer>
  )
}
