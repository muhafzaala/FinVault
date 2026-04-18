import { usePortfolio } from '../context/PortfolioContext'
import PortfolioItem from '../components/PortfolioItem'
import PortfolioSummary from '../components/PortfolioSummary'
import { Link } from 'react-router-dom'
import '../styles/portfolio.css'

function Portfolio() {
  const { items } = usePortfolio()

  if (items.length === 0) {
    return (
      <div className="page">
        <div className="portfolio-empty">
          <h1>Your Portfolio</h1>
          <div className="empty-state">
            <p style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--color-cream)' }}>
              Your portfolio is empty
            </p>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px' }}>
              Browse products and add them to start building your portfolio.
            </p>
            <Link to="/products" className="btn-primary-link">Browse Products</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page portfolio-page">
      <div className="portfolio-header">
        <h1>Your Portfolio</h1>
        <p>{items.length} product{items.length > 1 ? 's' : ''} in your portfolio</p>
      </div>

      <div className="portfolio-layout">
        <div className="portfolio-items">
          <h2>Holdings</h2>
          {items.map(item => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </div>

        <div className="portfolio-sidebar">
          <h2>Summary</h2>
          <PortfolioSummary />
        </div>
      </div>
    </div>
  )
}

export default Portfolio