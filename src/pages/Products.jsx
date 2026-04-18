import { useEffect, useState } from 'react'
import { fetchProducts } from '../api/fetchProducts'
import ProductCard from '../components/ProductCard'
import FilterPanel from '../components/FilterPanel'
import '../styles/products.css'

const defaultFilters = {
  riskLevel:   [],
  category:    [],
  minReturn:   '',
  maxReturn:   '',
  liquidity:   'all',
  timeHorizon: 'all',
  budget:      ''
}

function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState(null)
  const [filters, setFilters]   = useState(defaultFilters)

  useEffect(() => {
    fetchProducts()
      .then(data => { setProducts(data); setLoading(false) })
      .catch(err  => { setError(err.message); setLoading(false) })
  }, [])

  function handleFilterChange(field, value) {
    if (field === 'reset') {
      setFilters(defaultFilters)
      return
    }
    setFilters(prev => ({ ...prev, [field]: value }))
  }

  function applyFilters(products) {
    return products.filter(p => {
      const minRet = parseFloat(filters.minReturn) || 0
      const maxRet = parseFloat(filters.maxReturn) || 100
      const budget = parseFloat(filters.budget)    || Infinity

      const passRisk      = filters.riskLevel.length === 0 || filters.riskLevel.includes(p.riskLevel)
      const passCategory  = filters.category.length  === 0 || filters.category.includes(p.category)
      const passReturn    = p.expectedReturn >= minRet && p.expectedReturn <= maxRet
      const passLiquidity = filters.liquidity   === 'all' || p.liquidity   === filters.liquidity
      const passHorizon   = filters.timeHorizon === 'all' || p.timeHorizon === filters.timeHorizon
      const passBudget    = p.minInvestment <= budget

      return passRisk && passCategory && passReturn && passLiquidity && passHorizon && passBudget
    })
  }

  if (loading) return (
    <div className="page loading-screen">
      <div className="loader"></div>
      <p>Loading products...</p>
    </div>
  )

  if (error) return (
    <div className="page">
      <div className="error-box">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    </div>
  )

  const filtered = applyFilters(products)

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Financial Products</h1>
        <p>Discover instruments across all asset classes</p>
      </div>
      <div className="products-layout">
        <FilterPanel
          filters={filters}
          onFilterChange={handleFilterChange}
          productCount={filtered.length}
        />
        <div className="products-main">
          {filtered.length === 0 ? (
            <div className="empty-state">
              <p>No products match your current filters.</p>
              <button onClick={() => setFilters(defaultFilters)}>Reset Filters</button>
            </div>
          ) : (
            <div className="products-grid">
              {filtered.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Products