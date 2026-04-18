import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="page" style={{ textAlign: 'center', paddingTop: '100px' }}>
      <p style={{ fontSize: '80px', color: 'var(--color-gold)', marginBottom: '16px' }}>404</p>
      <h1 style={{ marginBottom: '12px' }}>Page Not Found</h1>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '32px' }}>
        The page you are looking for does not exist.
      </p>
      <Link to="/" style={{
        background:   'var(--color-gold)',
        color:        '#0f0f0f',
        padding:      '12px 28px',
        borderRadius: 'var(--radius)',
        fontFamily:   'Georgia, serif'
      }}>
        Return Home
      </Link>
    </div>
  )
}

export default NotFound