function RiskBadge({ riskLevel }) {
  const colors = {
    low:    { background: '#1a2e22', color: '#4a7c59', border: '1px solid #2d4a35' },
    medium: { background: '#2e2510', color: '#9e7a2e', border: '1px solid #4a3a18' },
    high:   { background: '#2e1515', color: '#8b3a3a', border: '1px solid #4a2020' }
  }

  const style = {
    ...colors[riskLevel],
    padding:      '3px 10px',
    borderRadius: '20px',
    fontSize:     '11px',
    fontFamily:   'Georgia, serif',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    display:      'inline-block'
  }

  return <span style={style}>{riskLevel} risk</span>
}

export default RiskBadge