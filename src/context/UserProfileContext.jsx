import { createContext, useContext, useState } from 'react'

export const UserProfileContext = createContext()

export function UserProfileProvider({ children }) {
  const [profile, setProfile] = useState({
    riskTolerance:       '',
    investmentHorizon:   '',
    monthlyCapacity:     '',
    liquidityPreference: '',
    investmentGoal:      ''
  })

  function updateProfile(newProfile) {
    setProfile(newProfile)
  }

  function isProfileComplete() {
    return (
      profile.riskTolerance       !== '' &&
      profile.investmentHorizon   !== '' &&
      profile.monthlyCapacity     !== '' &&
      profile.liquidityPreference !== '' &&
      profile.investmentGoal      !== ''
    )
  }

  function getRecommendations(products) {
    const riskMapping = {
      'conservative': ['low'],
      'moderate':     ['low', 'medium'],
      'aggressive':   ['low', 'medium', 'high']
    }
    const horizonMapping = {
      'short':  ['short'],
      'medium': ['short', 'medium'],
      'long':   ['short', 'medium', 'long']
    }
    const liquidityMapping = {
      'easy':     ['easy'],
      'moderate': ['easy', 'moderate'],
      'locked':   ['easy', 'moderate', 'locked']
    }

    const allowedRisk      = riskMapping[profile.riskTolerance]            || ['low']
    const allowedHorizon   = horizonMapping[profile.investmentHorizon]     || ['short']
    const allowedLiquidity = liquidityMapping[profile.liquidityPreference]  || ['easy']
    const budget           = parseFloat(profile.monthlyCapacity)           || 0

    const recommended = products.filter(p =>
      allowedRisk.includes(p.riskLevel)      &&
      allowedHorizon.includes(p.timeHorizon) &&
      allowedLiquidity.includes(p.liquidity) &&
      p.minInvestment <= budget
    )

    if (profile.riskTolerance === 'conservative') {
      return recommended.sort((a, b) => a.expectedReturn - b.expectedReturn)
    } else {
      return recommended.sort((a, b) => b.expectedReturn - a.expectedReturn)
    }
  }

  const value = { profile, updateProfile, isProfileComplete, getRecommendations }

  return (
    <UserProfileContext.Provider value={value}>
      {children}
    </UserProfileContext.Provider>
  )
}

export function useUserProfile() {
  return useContext(UserProfileContext)
}