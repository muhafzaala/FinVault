import { usePortfolio } from '../context/PortfolioContext'
import RiskBadge from './RiskBadge'

function PortfolioItem({ item }) {
  const { removeFromPortfolio, updateAllocation } = usePortfolio()

  return (
    <div style={{
      background:    'var(--color-surface)',
      border:        '1px solid var(--color-border)',
      borderRadius:  'var(--radius)',
      padding:       '20px',
      marginBottom:  '12px',
      display:       'flex',
      alignItems:    'center',
      gap:           '16px',
      flexWrap:      'wrap'
    }}>
      <div style={{ flex: 1, minWidth: '200px' }}>
        <p style={{ color: 'var(--color-cream)', marginBottom: '4px', fontSize: '15px' }}>
          {item.name}
        </p>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <RiskBadge riskLevel={item.riskLevel} />
          <span style={{ color: 'var(--color-text-muted)', fontSize: '12px' }}>
            {item.expectedReturn}% return
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>PKR</span>
        <input
          type="number"
          value={item.allocatedAmount}
          onChange={e => updateAllocation(item.id, e.target.value)}
          style={{ width: '140px', textAlign: 'right' }}
        />
      </div>

      <div style={{ textAlign: 'right', minWidth: '120px' }}>
        <p style={{ color: 'var(--color-gold)', fontSize: '13px' }}>
          Projected (1yr)
        </p>
        <p style={{ color: 'var(--color-cream)', fontSize: '15px' }}>
          PKR {Math.round(item.allocatedAmount * (1 + item.expectedReturn / 100)).toLocaleString()}
        </p>
      </div>

      <button
        onClick={() => removeFromPortfolio(item.id)}
        style={{
          background:   'transparent',
          border:       '1px solid var(--color-high)',
          color:        'var(--color-high)',
          padding:      '6px 14px',
          borderRadius: 'var(--radius)',
          fontSize:     '12px',
          cursor:       'pointer'
        }}
      >
        Remove
      </button>
    </div>
  )
}

export default PortfolioItem