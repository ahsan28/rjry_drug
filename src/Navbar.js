import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Awarness
      </Link>
      <ul>
        <CustomLink to="/introduction">Pengenalan</CustomLink>
        <CustomLink to="/research">Penyelidikan</CustomLink>
        <CustomLink to="/publications">Penerbitan</CustomLink>
        <CustomLink to="/mode">Modul</CustomLink>
        <CustomLink to="/activities">Aktiviti</CustomLink>
        <CustomLink to="/certifications">Pensijilan</CustomLink>
        <CustomLink to="/gallery">Galeri</CustomLink>
        <CustomLink to="/contact">Hubungi kami</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}