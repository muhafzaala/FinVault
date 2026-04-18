import { usePortfolio } from '../context/PortfolioContext'

function PortfolioSummary() {
  const {
    getTotalInvested,
    getWeightedReturn,
    getRiskDistribution,
    getCategoryDistribution
  } = usePortfolio()

  const total        = getTotalInvested()
  const weightedRet  = getWeightedReturn()
  const riskDist     = getRiskDistribution()
  const catDist      = getCategoryDistribution()

  const boxStyle = {
    background:   'var(--color-surface)',
    border:       '1px solid var(--color-border)',
    borderRadius: 'var(--radius)',
    padding:      '20px',
    flex:         '1',
    minWidth:     '180px'
  }

  const labelStyle = { color: 'var(--color-text-muted)', fontSize: '12px', marginBottom: '6px', letterSpacing: '0.05em', textTransform: 'uppercase' }
  const valueStyle = { color: 'var(--color-cream)', fontSize: '22px' }

  return (
    <div>
      {/* Top stats */}
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '24px' }}>
        <div style={boxStyle}>
          <p style={labelStyle}>Total Invested</p>
          <p style={valueStyle}>PKR {total.toLocaleString()}</p>
        </div>
        <div style={boxStyle}>
          <p style={labelStyle}>Weighted Return</p>
          <p style={{ ...valueStyle, color: 'var(--color-gold)' }}>{weightedRet}%</p>
        </div>
        <div style={boxStyle}>
          <p style={labelStyle}>Projected Value (1yr)</p>
          <p style={valueStyle}>
            PKR {Math.round(total * (1 + weightedRet / 100)).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Risk Distribution */}
      <div style={{ ...boxStyle, marginBottom: '16px' }}>
        <p style={{ ...labelStyle, marginBottom: '12px' }}>Risk Distribution</p>
        {['low', 'medium', 'high'].map(level => (
          <div key={level} style={{ marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '13px', textTransform: 'capitalize' }}>
                {level} risk
              </span>
              <span style={{ color: 'var(--color-cream)', fontSize: '13px' }}>
                {riskDist[level]}%
              </span>
            </div>
            <div style={{ background: 'var(--color-surface-2)', borderRadius: '4px', height: '6px' }}>
              <div style={{
                width:        `${riskDist[level]}%`,
                height:       '100%',
                borderRadius: '4px',
                background:   level === 'low' ? 'var(--color-low)' : level === 'medium' ? 'var(--color-medium)' : 'var(--color-high)',
                transition:   'width 0.4s ease'
              }} />
            </div>
          </div>
        ))}

        {riskDist.high > 70 && (
          <p style={{
            marginTop:    '12px',
            color:        'var(--color-high)',
            fontSize:     '13px',
            padding:      '8px 12px',
            background:   '#2e1515',
            borderRadius: 'var(--radius)',
            border:       '1px solid var(--color-high)'
          }}>
            ⚠ Over 70% of your portfolio is in high-risk products. Consider diversifying.
          </p>
        )}
      </div>

      {/* Category Distribution */}
      {Object.keys(catDist).length > 0 && (
        <div style={boxStyle}>
          <p style={{ ...labelStyle, marginBottom: '12px' }}>Category Breakdown</p>
          {Object.entries(catDist).map(([cat, pct]) => (
            <div key={cat} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '13px', textTransform: 'capitalize' }}>
                {cat}
              </span>
              <span style={{ color: 'var(--color-gold)', fontSize: '13px' }}>{pct}%</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PortfolioSummary