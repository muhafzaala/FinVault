import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../api/fetchProducts'
import ProductCard from '../components/ProductCard'
import '../styles/home.css'

function Home() {
  const [products, setProducts]   = useState([])
  const [loading, setLoading]     = useState(true)
  const [error, setError]         = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    fetchProducts()
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  // Pick best product from each category for featured section
  function getFeaturedProducts() {
    const categories = ['savings', 'investment', 'insurance', 'crypto']
    return categories.map(cat => {
      const catProducts = products.filter(p => p.category === cat)
      return catProducts.sort((a, b) => b.expectedReturn - a.expectedReturn)[0]
    }).filter(Boolean)
  }

  const categories = [
    { key: 'all',        label: 'All Products',  icon: '◆' },
    { key: 'savings',    label: 'Savings',        icon: '◈' },
    { key: 'investment', label: 'Investment',     icon: '◉' },
    { key: 'insurance',  label: 'Insurance',      icon: '◎' },
    { key: 'crypto',     label: 'Crypto',         icon: '◍' },
  ]

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory)

  if (loading) return (
    <div className="page loading-screen">
      <div className="loader"></div>
      <p>Loading financial products...</p>
    </div>
  )

  if (error) return (
    <div className="page">
      <div className="error-box">
        <p>Failed to load products: {error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    </div>
  )

  const featured = getFeaturedProducts()

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Private Financial Discovery</p>
          <h1 className="hero-title">Where Capital<br />Finds Direction</h1>
          <p className="hero-subtitle">
            Explore curated financial instruments tailored to your risk profile,
            investment horizon, and wealth objectives.
          </p>
          <div className="hero-actions">
            <Link to="/profile" className="btn-primary">Build Your Profile</Link>
            <Link to="/products" className="btn-secondary">Browse Products</Link>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-box">
            <p className="stat-value">{products.length}</p>
            <p className="stat-label">Financial Products</p>
          </div>
          <div className="stat-box">
            <p className="stat-value">4</p>
            <p className="stat-label">Asset Classes</p>
          </div>
          <div className="stat-box">
            <p className="stat-value">
              {products.length > 0
                ? `${Math.min(...products.map(p => p.expectedReturn))}–${Math.max(...products.map(p => p.expectedReturn))}%`
                : '—'}
            </p>
            <p className="stat-label">Return Range</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="section-header">
          <h2>Featured Products</h2>
          <p>Top performer from each asset class</p>
        </div>
        <div className="featured-grid">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Category Navigation */}
      <section className="section">
        <div className="section-header">
          <h2>Browse by Category</h2>
        </div>
        <div className="category-tabs">
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`category-tab ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              <span className="cat-icon">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready for personalised recommendations?</h2>
        <p>Complete your financial profile and let the platform match you with suitable products.</p>
        <Link to="/profile" className="btn-primary">Get Started</Link>
      </section>
    </div>
  )
}

export default Home