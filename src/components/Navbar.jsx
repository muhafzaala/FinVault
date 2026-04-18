import { Link, useLocation } from 'react-router-dom'
import { usePortfolio } from '../context/PortfolioContext'
import '../styles/navbar.css'

function Navbar() {
  const { items } = usePortfolio()
  const location  = useLocation()

  const links = [
    { path: '/',               label: 'Home' },
    { path: '/products',       label: 'Products' },
    { path: '/profile',        label: 'Profile' },
    { path: '/recommendations',label: 'Discover' },
    { path: '/portfolio',      label: 'Portfolio' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">FinVault</Link>
      </div>
      <ul className="navbar-links">
        {links.map(link => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={location.pathname === link.path ? 'active' : ''}
            >
              {link.label}
              {link.path === '/portfolio' && items.length > 0 && (
                <span className="portfolio-count">{items.length}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar