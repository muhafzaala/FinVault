import { useEffect, useState } from 'react'
import { useUserProfile } from '../context/UserProfileContext'
import { fetchProducts } from '../api/fetchProducts'
import RecommendationList from '../components/RecommendationList'
import { Link } from 'react-router-dom'
import '../styles/recommendations.css'

function Recommendations() {
  const { profile, isProfileComplete, getRecommendations } = useUserProfile()
  const [products, setProducts] = useState([])
  const [loading, setLoading]   = useState(true)

  useEffect(() => {
    fetchProducts()
      .then(data => { setProducts(data); setLoading(false) })
      .catch(()   => setLoading(false))
  }, [])

  if (loading) return (
    <div className="page loading-screen">
      <div className="loader"></div>
      <p>Analysing your profile...</p>
    </div>
  )

  const recommendations = isProfileComplete() ? getRecommendations(products) : []

  return (
    <div className="page recommendations-page">
      <div className="rec-header">
        <h1>Your Recommendations</h1>
        {isProfileComplete() ? (
          <p>Based on your profile — {profile.riskTolerance} risk · {profile.investmentHorizon}-term · PKR {parseFloat(profile.monthlyCapacity).toLocaleString()} capacity</p>
        ) : (
          <p>Complete your profile to unlock personalised recommendations.</p>
        )}
      </div>

      {!isProfileComplete() && (
        <div className="no-profile-banner">
          <p>You haven't completed your financial profile yet.</p>
          <Link to="/profile" className="btn-primary-link">Complete Profile</Link>
        </div>
      )}

      <RecommendationList
        recommendations={recommendations}
        profile={profile}
      />
    </div>
  )
}

export default Recommendations