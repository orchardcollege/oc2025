import {NavLink as Link}  from 'react-router-dom'



const Navbar = () => {

  const linkStyle ='px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition';
  const activeStyle = 'bg-blue-600 text-white';
  
  return (
    <nav className="navbar">
      <Link
        to="/Home"
        className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ''}`}
      >
        Inicio
      </Link>
      <Link
        to="/Movies"
        className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ''}`}
      >
        Movies
      </Link>
      <Link
        to="/Contact"
        className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ''}`}
      >
        Contacto
      </Link>
    </nav>
  )
}

export default Navbar