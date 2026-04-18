import { createContext, useContext, useState } from 'react'

const PortfolioContext = createContext()

export function PortfolioProvider({ children }) {

  // Portfolio stores an array of items
  // Each item = the product object + an 'allocatedAmount' the user chose
  const [items, setItems] = useState([])

  // Add a product to portfolio
  // Default allocation is the product's minimum investment
  function addToPortfolio(product) {
    // Don't add duplicates
    const alreadyExists = items.find(item => item.id === product.id)
    if (alreadyExists) return

    setItems(prev => [
      ...prev,
      { ...product, allocatedAmount: product.minInvestment }
    ])
  }

  // Remove a product from portfolio by its id
  function removeFromPortfolio(productId) {
    setItems(prev => prev.filter(item => item.id !== productId))
  }

  // Update how much money user allocated to a specific product
  function updateAllocation(productId, newAmount) {
    setItems(prev =>
      prev.map(item =>
        item.id === productId
          ? { ...item, allocatedAmount: parseFloat(newAmount) || 0 }
          : item
      )
    )
  }

  // Check if a product is already in the portfolio
  function isInPortfolio(productId) {
    return items.some(item => item.id === productId)
  }

  // ── Portfolio Calculations ─────────────────────────────────────────────────

  // Total money invested across all products
  function getTotalInvested() {
    return items.reduce((sum, item) => sum + item.allocatedAmount, 0)
  }

  // Weighted expected return
  // Formula: sum of (each product's share of total × its return rate)
  // Example: 60% in 8% return + 40% in 12% return = 0.6×8 + 0.4×12 = 9.6%
  function getWeightedReturn() {
    const total = getTotalInvested()
    if (total === 0) return 0

    const weighted = items.reduce((sum, item) => {
      const share = item.allocatedAmount / total  // what fraction of portfolio
      return sum + share * item.expectedReturn
    }, 0)

    return parseFloat(weighted.toFixed(2))
  }

  // Risk distribution — what % of portfolio is in low/medium/high risk
  function getRiskDistribution() {
    const total = getTotalInvested()
    if (total === 0) return { low: 0, medium: 0, high: 0 }

    const dist = { low: 0, medium: 0, high: 0 }

    items.forEach(item => {
      const share = (item.allocatedAmount / total) * 100
      dist[item.riskLevel] += share
    })

    // Round each to 1 decimal place
    return {
      low:    parseFloat(dist.low.toFixed(1)),
      medium: parseFloat(dist.medium.toFixed(1)),
      high:   parseFloat(dist.high.toFixed(1))
    }
  }

  // Category distribution — breakdown by product type
  function getCategoryDistribution() {
    const total = getTotalInvested()
    if (total === 0) return {}

    const dist = {}

    items.forEach(item => {
      const share = (item.allocatedAmount / total) * 100
      dist[item.category] = (dist[item.category] || 0) + share
    })

    // Round each value
    Object.keys(dist).forEach(key => {
      dist[key] = parseFloat(dist[key].toFixed(1))
    })

    return dist
  }

  const value = {
    items,
    addToPortfolio,
    removeFromPortfolio,
    updateAllocation,
    isInPortfolio,
    getTotalInvested,
    getWeightedReturn,
    getRiskDistribution,
    getCategoryDistribution
  }

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  )
}

// Custom hook for easy access
export function usePortfolio() {
  return useContext(PortfolioContext)
}