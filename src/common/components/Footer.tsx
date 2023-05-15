import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral/70 shadow-inner text-base-content">
      <div>
        <p className="text-2xl font-semibold">Turistriada</p>
      </div>
      <div>
        <span className="footer-title">Turistriada</span>
        <Link to="#" className="link link-hover">
          Inicio
        </Link>
        <Link to="#" className="link link-hover">
          Acerca
        </Link>
      </div>
      <div>
        <span className="footer-title">Ciudades</span>
        <Link to="#" className="link link-hover">
          Pereira
        </Link>
        <Link to="#" className="link link-hover">
          Dosquebradas
        </Link>
        <Link to="#" className="link link-hover">
          Santa Rosa
        </Link>
      </div>
      <div>
        <span className="footer-title">Contacto</span>
        <Link to="#" className="link link-hover">
          Instagram
        </Link>
        <Link to="#" className="link link-hover">
          Facebook
        </Link>
        <Link to="#" className="link link-hover">
          FAQ
        </Link>
      </div>
    </footer>
  )
}
