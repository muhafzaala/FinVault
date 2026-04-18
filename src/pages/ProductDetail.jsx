import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchProducts } from '../api/fetchProducts'
import { usePortfolio } from '../context/PortfolioContext'
import RiskBadge from '../components/RiskBadge'
import '../styles/productDetail.css'

function generateDecisionInsight(product) {
  const insights = []

  if (product.riskLevel === 'low')
    insights.push('Suitable for conservative investors prioritising capital preservation.')
  else if (product.riskLevel === 'medium')
    insights.push('Balanced option for moderate investors seeking growth with manageable risk.')
  else
    insights.push('Best for aggressive investors comfortable with significant volatility.')

  if (product.liquidity === 'locked')
    insights.push('Requires long-term commitment — early withdrawal may incur penalties.')
  else if (product.liquidity === 'easy')
    insights.push('Funds remain accessible — ideal if you may need liquidity.')

  if (product.timeHorizon === 'long')
    insights.push('Optimal returns are achieved when held for 5 or more years.')
  else if (product.timeHorizon === 'short')
    insights.push('Designed for short-term goals within 1–2 years.')

  if (product.expectedReturn > 15)
    insights.push('High return potential comes with elevated market exposure.')

  return insights
}

function ProductDetail() {
  const { id }       = useParams()
  const navigate     = useNavigate()
  const { addToPortfolio, isInPortfolio } = usePortfolio()

  const [product, setProduct]     = useState(null)
  const [allProducts, setAll]     = useState([])
  const [loading, setLoading]     = useState(true)
  const [error, setError]         = useState(null)
  const [amount, setAmount]       = useState(10000)
  const [compareId, setCompareId] = useState('')

  useEffect(() => {
    fetchProducts()
      .then(data => {
        setAll(data)
        const found = data.find(p => p.id === parseInt(id))
        if (!found) { setError('Product not found'); setLoading(false); return }
        setProduct(found)
        setAmount(found.minInvestment)
        setLoading(false)
      })
      .catch(err => { setError(err.message); setLoading(false) })
  }, [id])

  if (loading) return <div className="page loading-screen"><div className="loader"></div><p>Loading...</p></div>
  if (error)   return <div className="page"><div className="error-box"><p>{error}</p><button onClick={() => navigate('/products')}>Back to Products</button></div></div>

  const insights     = generateDecisionInsight(product)
  const inPortfolio  = isInPortfolio(product.id)
  const compareWith  = allProducts.find(p => p.id === parseInt(compareId))

  const projected = (amt, ret, years) =>
    Math.round(amt * Math.pow(1 + ret / 100, years)).toLocaleString()

  const riskBarWidth = product.riskLevel === 'low' ? 25 : product.riskLevel === 'medium' ? 60 : 90

  return (
    <div className="page detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <div className="detail-grid">
        {/* Left Column */}
        <div className="detail-left">
          <div className="detail-card">
            <div className="detail-top">
              <span className="detail-category">{product.category}</span>
              <RiskBadge riskLevel={product.riskLevel} />
            </div>
            <h1 className="detail-name">{product.name}</h1>
            <p className="detail-desc">{product.description}</p>

            {/* Attributes */}
            <div className="attr-grid">
              <div className="attr-box">
                <p className="attr-label">Expected Return</p>
                <p className="attr-value gold">{product.expectedReturn}%</p>
              </div>
              <div className="attr-box">
                <p className="attr-label">Min. Investment</p>
                <p className="attr-value">PKR {product.minInvestment.toLocaleString()}</p>
              </div>
              <div className="attr-box">
                <p className="attr-label">Liquidity</p>
                <p className="attr-value">{product.liquidity}</p>
              </div>
              <div className="attr-box">
                <p className="attr-label">Time Horizon</p>
                <p className="attr-value">{product.timeHorizon}-term</p>
              </div>
            </div>

            {/* Risk Bar */}
            <div className="risk-bar-section">
              <p className="attr-label">Risk Level</p>
              <div className="risk-track">
                <div className="risk-fill" style={{ width: `${riskBarWidth}%` }}></div>
              </div>
              <div className="risk-labels">
                <span>Low</span><span>Medium</span><span>High</span>
              </div>
            </div>

            {/* Add to Portfolio */}
            <button
              className={`btn-add-portfolio ${inPortfolio ? 'added' : ''}`}
              onClick={() => addToPortfolio(product)}
              disabled={inPortfolio}
            >
              {inPortfolio ? '✓ Added to Portfolio' : 'Add to Portfolio'}
            </button>
          </div>

          {/* Decision Insights */}
          <div className="insight-card">
            <h3>Who is this for?</h3>
            <ul className="insight-list">
              {insights.map((insight, i) => (
                <li key={i}>{insight}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="detail-right">
          {/* Return Calculator */}
          <div className="calculator-card">
            <h3>Return Calculator</h3>
            <div className="calc-input">
              <label>Investment Amount (PKR)</label>
              <input
                type="number"
                value={amount}
                min={product.minInvestment}
                onChange={e => setAmount(parseFloat(e.target.value) || 0)}
              />
            </div>
            <div className="projections">
              {[1, 3, 5, 10].map(yr => (
                <div key={yr} className="projection-row">
                  <span className="proj-year">{yr} year{yr > 1 ? 's' : ''}</span>
                  <span className="proj-value">
                    PKR {projected(amount, product.expectedReturn, yr)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Compare */}
          <div className="compare-card">
            <h3>Compare with another product</h3>
            <select
              value={compareId}
              onChange={e => setCompareId(e.target.value)}
            >
              <option value="">Select a product</option>
              {allProducts
                .filter(p => p.id !== product.id)
                .map(p => (
                  <option key={p.id} value={p.id}>{p.name.substring(0, 40)}...</option>
                ))}
            </select>

            {compareWith && (
              <div className="compare-table">
                <div className="compare-header">
                  <span>{product.name.substring(0, 25)}...</span>
                  <span>{compareWith.name.substring(0, 25)}...</span>
                </div>
                {[
                  { label: 'Expected Return', a: `${product.expectedReturn}%`,                      b: `${compareWith.expectedReturn}%` },
                  { label: 'Risk Level',       a: product.riskLevel,                                b: compareWith.riskLevel },
                  { label: 'Liquidity',        a: product.liquidity,                               b: compareWith.liquidity },
                  { label: 'Time Horizon',     a: `${product.timeHorizon}-term`,                   b: `${compareWith.timeHorizon}-term` },
                  { label: 'Min Investment',   a: `PKR ${product.minInvestment.toLocaleString()}`, b: `PKR ${compareWith.minInvestment.toLocaleString()}` },
                ].map(row => (
                  <div key={row.label} className="compare-row">
                    <span className="compare-val">{row.a}</span>
                    <span className="compare-lbl">{row.label}</span>
                    <span className="compare-val">{row.b}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail