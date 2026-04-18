import { createContext, useContext, useState } from 'react'

export const PortfolioContext = createContext()

export function PortfolioProvider({ children }) {
  const [items, setItems] = useState([])

  function addToPortfolio(product) {
    if (items.find(item => item.id === product.id)) return
    setItems(prev => [...prev, { ...product, allocatedAmount: product.minInvestment }])
  }

  function removeFromPortfolio(productId) {
    setItems(prev => prev.filter(item => item.id !== productId))
  }

  function updateAllocation(productId, newAmount) {
    setItems(prev =>
      prev.map(item =>
        item.id === productId
          ? { ...item, allocatedAmount: parseFloat(newAmount) || 0 }
          : item
      )
    )
  }

  function isInPortfolio(productId) {
    return items.some(item => item.id === productId)
  }

  function getTotalInvested() {
    return items.reduce((sum, item) => sum + item.allocatedAmount, 0)
  }

  function getWeightedReturn() {
    const total = getTotalInvested()
    if (total === 0) return 0
    const weighted = items.reduce((sum, item) => {
      return sum + (item.allocatedAmount / total) * item.expectedReturn
    }, 0)
    return parseFloat(weighted.toFixed(2))
  }

  function getRiskDistribution() {
    const total = getTotalInvested()
    if (total === 0) return { low: 0, medium: 0, high: 0 }
    const dist = { low: 0, medium: 0, high: 0 }
    items.forEach(item => {
      dist[item.riskLevel] += (item.allocatedAmount / total) * 100
    })
    return {
      low:    parseFloat(dist.low.toFixed(1)),
      medium: parseFloat(dist.medium.toFixed(1)),
      high:   parseFloat(dist.high.toFixed(1))
    }
  }

  function getCategoryDistribution() {
    const total = getTotalInvested()
    if (total === 0) return {}
    const dist = {}
    items.forEach(item => {
      const share = (item.allocatedAmount / total) * 100
      dist[item.category] = parseFloat(((dist[item.category] || 0) + share).toFixed(1))
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

export function usePortfolio() {
  return useContext(PortfolioContext)
}