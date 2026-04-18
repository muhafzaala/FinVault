import ProductCard from './ProductCard'

function RecommendationList({ recommendations, profile }) {
  if (!profile || !profile.riskTolerance) {
    return (
      <div style={{
        textAlign:    'center',
        padding:      '60px 20px',
        color:        'var(--color-text-muted)',
        border:       '1px dashed var(--color-border)',
        borderRadius: 'var(--radius)'
      }}>
        <p style={{ fontSize: '18px', marginBottom: '8px' }}>No profile found</p>
        <p>Please complete your financial profile to see recommendations.</p>
      </div>
    )
  }

  if (recommendations.length === 0) {
    return (
      <div style={{
        textAlign:    'center',
        padding:      '60px 20px',
        color:        'var(--color-text-muted)',
        border:       '1px dashed var(--color-border)',
        borderRadius: 'var(--radius)'
      }}>
        <p style={{ fontSize: '18px', marginBottom: '8px' }}>No matches found</p>
        <p>Try updating your profile with a higher budget or different preferences.</p>
      </div>
    )
  }

  return (
    <div>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px', fontSize: '14px' }}>
        {recommendations.length} products matched your profile
      </p>
      <div style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap:                 '20px'
      }}>
        {recommendations.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default RecommendationList