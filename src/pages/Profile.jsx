import { useState } from 'react'
import { useUserProfile } from '../context/UserProfileContext'
import { useNavigate } from 'react-router-dom'
import '../styles/profile.css'

const initialForm = {
  riskTolerance:       '',
  investmentHorizon:   '',
  monthlyCapacity:     '',
  liquidityPreference: '',
  investmentGoal:      ''
}

function Profile() {
  const { profile, updateProfile, isProfileComplete } = useUserProfile()
  const navigate = useNavigate()

  const [form, setForm]     = useState(profile.riskTolerance ? profile : initialForm)
  const [errors, setErrors] = useState({})
  const [saved, setSaved]   = useState(false)

  function validate() {
    const e = {}
    if (!form.riskTolerance)       e.riskTolerance       = 'Please select your risk tolerance'
    if (!form.investmentHorizon)   e.investmentHorizon   = 'Please select your investment horizon'
    if (!form.monthlyCapacity || parseFloat(form.monthlyCapacity) < 1000)
                                   e.monthlyCapacity     = 'Minimum capacity is PKR 1,000'
    if (!form.liquidityPreference) e.liquidityPreference = 'Please select liquidity preference'
    if (!form.investmentGoal)      e.investmentGoal      = 'Please select an investment goal'
    return e
  }

  function handleChange(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: '' }))
    setSaved(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    updateProfile(form)
    setSaved(true)
    setTimeout(() => navigate('/recommendations'), 1200)
  }

  const fieldRow = (label, field, options) => (
    <div className="form-group" key={field}>
      <label className="form-label">{label}</label>
      <div className="radio-group">
        {options.map(opt => (
          <label key={opt.value} className={`radio-option ${form[field] === opt.value ? 'selected' : ''}`}>
            <input
              type="radio"
              name={field}
              value={opt.value}
              checked={form[field] === opt.value}
              onChange={() => handleChange(field, opt.value)}
            />
            <span className="radio-title">{opt.label}</span>
            {opt.desc && <span className="radio-desc">{opt.desc}</span>}
          </label>
        ))}
      </div>
      {errors[field] && <p className="form-error">{errors[field]}</p>}
    </div>
  )

  return (
    <div className="page profile-page">
      <div className="profile-header">
        <h1>Your Financial Profile</h1>
        <p>Answer a few questions so we can recommend the right products for you.</p>
        {isProfileComplete() && (
          <div className="profile-complete-badge">Profile Complete</div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="profile-form">
        {fieldRow('Risk Tolerance', 'riskTolerance', [
          { value: 'conservative', label: 'Conservative', desc: 'Preserve capital, minimal risk' },
          { value: 'moderate',     label: 'Moderate',     desc: 'Balance growth and safety' },
          { value: 'aggressive',   label: 'Aggressive',   desc: 'Maximise returns, accept volatility' }
        ])}

        {fieldRow('Investment Horizon', 'investmentHorizon', [
          { value: 'short',  label: 'Short Term',  desc: '1–2 years' },
          { value: 'medium', label: 'Medium Term', desc: '3–5 years' },
          { value: 'long',   label: 'Long Term',   desc: '5+ years' }
        ])}

        <div className="form-group">
          <label className="form-label">Monthly Investment Capacity (PKR)</label>
          <input
            type="number"
            value={form.monthlyCapacity}
            onChange={e => handleChange('monthlyCapacity', e.target.value)}
            placeholder="e.g. 50000"
            min="1000"
            className="capacity-input"
          />
          {errors.monthlyCapacity && <p className="form-error">{errors.monthlyCapacity}</p>}
        </div>

        {fieldRow('Liquidity Preference', 'liquidityPreference', [
          { value: 'easy',     label: 'Need Quick Access', desc: 'Withdraw anytime' },
          { value: 'moderate', label: 'Some Flexibility',  desc: 'Occasional withdrawals ok' },
          { value: 'locked',   label: 'Can Lock Funds',    desc: 'Long-term commitment' }
        ])}

        {fieldRow('Investment Goal', 'investmentGoal', [
          { value: 'wealth',     label: 'Wealth Building' },
          { value: 'retirement', label: 'Retirement' },
          { value: 'emergency',  label: 'Emergency Fund' },
          { value: 'purchase',   label: 'Specific Purchase' }
        ])}

        <button type="submit" className="btn-submit">
          {saved ? '✓ Saved — Redirecting...' : 'Save Profile & Get Recommendations'}
        </button>
      </form>
    </div>
  )
}

export default Profile