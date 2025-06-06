import {NavLink as Link}  from 'react-router-dom'



const Navbar = () => {

  
  return (
    <nav className="navbar">
      <Link
        to="/Home"
        className=""
      >
        Inicio
      </Link>
      <Link
        to="/Movies"
        className=""
      >
        Movies
      </Link>
      <Link
        to="/Contact"
        className=""
      >
        Contacto
      </Link>
    </nav>
  )
}

export default Navbar