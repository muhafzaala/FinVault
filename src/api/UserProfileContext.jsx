import { createContext, useContext, useState } from 'react'

// Step 1: Create the context object
// This is what components will import to access profile data
const UserProfileContext = createContext()

// Step 2: Create the Provider component
// This wraps the whole app and makes profile available everywhere
export function UserProfileProvider({ children }) {

  // The profile state — starts empty (user hasn't filled it yet)
  const [profile, setProfile] = useState({
    riskTolerance:       '',   // 'conservative' | 'moderate' | 'aggressive'
    investmentHorizon:   '',   // 'short' | 'medium' | 'long'
    monthlyCapacity:     '',   // number in PKR
    liquidityPreference: '',   // 'easy' | 'moderate' | 'locked'
    investmentGoal:      ''    // 'wealth' | 'retirement' | 'emergency' | 'purchase'
  })

  // Update the entire profile at once (called when form is submitted)
  function updateProfile(newProfile) {
    setProfile(newProfile)
  }

  // Check if user has completed their profile
  // All fields must be non-empty
  function isProfileComplete() {
    return (
      profile.riskTolerance       !== '' &&
      profile.investmentHorizon   !== '' &&
      profile.monthlyCapacity     !== '' &&
      profile.liquidityPreference !== '' &&
      profile.investmentGoal      !== ''
    )
  }

  // The recommendation engine lives here because it needs the profile
  // Takes the full products array, returns only suitable products
  function getRecommendations(products) {

    // Map user risk tolerance to allowed product risk levels
    const riskMapping = {
      'conservative': ['low'],
      'moderate':     ['low', 'medium'],
      'aggressive':   ['low', 'medium', 'high']
    }

    // Map user horizon to allowed product time horizons
    // A medium-term investor can also use short-term products
    const horizonMapping = {
      'short':  ['short'],
      'medium': ['short', 'medium'],
      'long':   ['short', 'medium', 'long']
    }

    // Map user liquidity preference to allowed product liquidity
    // Someone okay with locked funds can also use easier options
    const liquidityMapping = {
      'easy':     ['easy'],
      'moderate': ['easy', 'moderate'],
      'locked':   ['easy', 'moderate', 'locked']
    }

    const allowedRisk      = riskMapping[profile.riskTolerance]       || ['low']
    const allowedHorizon   = horizonMapping[profile.investmentHorizon] || ['short']
    const allowedLiquidity = liquidityMapping[profile.liquidityPreference] || ['easy']
    const budget           = parseFloat(profile.monthlyCapacity) || 0

    // Filter products — ALL conditions must pass (AND logic)
    const recommended = products.filter(p =>
      allowedRisk.includes(p.riskLevel)      &&
      allowedHorizon.includes(p.timeHorizon) &&
      allowedLiquidity.includes(p.liquidity) &&
      p.minInvestment <= budget
    )

    // Sort: conservative users see lowest risk first
    // aggressive users see highest return first
    if (profile.riskTolerance === 'conservative') {
      return recommended.sort((a, b) => a.expectedReturn - b.expectedReturn)
    } else {
      return recommended.sort((a, b) => b.expectedReturn - a.expectedReturn)
    }
  }

  // Everything we expose to the rest of the app
  const value = {
    profile,
    updateProfile,
    isProfileComplete,
    getRecommendations
  }

  return (
    <UserProfileContext.Provider value={value}>
      {children}
    </UserProfileContext.Provider>
  )
}

// Step 3: Custom hook — makes it easy to use this context in any component
// Instead of writing useContext(UserProfileContext) every time,
// components just write useUserProfile()
export function useUserProfile() {
  return useContext(UserProfileContext)
}