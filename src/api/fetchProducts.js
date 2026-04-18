const categoryMapping = {
  'electronics':      'investment',
  'jewelery':         'savings',
  "men's clothing":   'insurance',
  "women's clothing": 'crypto'
}

const riskMapping = {
  'investment': 'medium',
  'savings':    'low',
  'insurance':  'low',
  'crypto':     'high'
}

function assignExpectedReturn(riskLevel, id) {
  const seed = id % 10
  if (riskLevel === 'low')    return parseFloat((3 + seed * 0.4).toFixed(2))
  if (riskLevel === 'medium') return parseFloat((7 + seed * 0.5).toFixed(2))
  if (riskLevel === 'high')   return parseFloat((12 + seed * 1.5).toFixed(2))
}

export function assignLiquidity(category) {
  const map = {
    'savings':    'easy',
    'investment': 'moderate',
    'insurance':  'locked',
    'crypto':     'easy'
  }
  return map[category] || 'moderate'
}

export function assignTimeHorizon(category) {
  const map = {
    'savings':    'short',
    'investment': 'long',
    'insurance':  'long',
    'crypto':     'long'
  }
  return map[category] || 'medium'
}

function transformToFinancialProduct(apiProduct) {
  const category       = categoryMapping[apiProduct.category] || 'investment'
  const riskLevel      = riskMapping[category]
  const liquidity      = assignLiquidity(category)
  const timeHorizon    = assignTimeHorizon(category)
  const expectedReturn = assignExpectedReturn(riskLevel, apiProduct.id)
  const minInvestment  = Math.round(apiProduct.price * 1000)

  return {
    id:             apiProduct.id,
    name:           apiProduct.title,
    category,
    description:    apiProduct.description,
    expectedReturn,
    riskLevel,
    liquidity,
    timeHorizon,
    minInvestment,
    image:          apiProduct.image
  }
}

export async function fetchProducts() {
  const response = await fetch('https://fakestoreapi.com/products')
  if (!response.ok) throw new Error('Failed to fetch products')
  const rawData = await response.json()
  return rawData.map(transformToFinancialProduct)
}