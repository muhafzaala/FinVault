import { Link } from 'react-router-dom'
import { usePortfolio } from '../context/PortfolioContext'
import RiskBadge from './RiskBadge'
import '../styles/productCard.css'

function ProductCard({ product }) {
  const { addToPortfolio, isInPortfolio } = usePortfolio()
  const inPortfolio = isInPortfolio(product.id)

  const categoryLabels = {
    savings:    'Savings',
    investment: 'Investment',
    insurance:  'Insurance',
    crypto:     'Crypto'
  }

  const liquidityLabels = {
    easy:     'High Liquidity',
    moderate: 'Moderate Liquidity',
    locked:   'Locked'
  }

  return (
    <div className="product-card">
      <div className="card-header">
        <span className="card-category">{categoryLabels[product.category]}</span>
        <RiskBadge riskLevel={product.riskLevel} />
      </div>

      <h3 className="card-name">{product.name}</h3>

      <div className="card-return">
        <span className="return-value">{product.expectedReturn}%</span>
        <span className="return-label">Expected Annual Return</span>
      </div>

      <div className="card-details">
        <div className="detail-row">
          <span className="detail-label">Min. Investment</span>
          <span className="detail-value">PKR {product.minInvestment.toLocaleString()}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Liquidity</span>
          <span className="detail-value">{liquidityLabels[product.liquidity]}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Horizon</span>
          <span className="detail-value">{product.timeHorizon}-term</span>
        </div>
      </div>

      <div className="card-actions">
        <Link to={`/product/${product.id}`} className="btn-details">
          View Details
        </Link>
        <button
          className={`btn-portfolio ${inPortfolio ? 'added' : ''}`}
          onClick={() => addToPortfolio(product)}
          disabled={inPortfolio}
        >
          {inPortfolio ? 'Added ✓' : 'Add to Portfolio'}
        </button>
      </div>
    </div>
  )
}

export default ProductCard