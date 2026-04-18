import '../styles/filterPanel.css'

function FilterPanel({ filters, onFilterChange, productCount }) {
  function handleCheckbox(field, value) {
    const current = filters[field]
    const updated  = current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value]
    onFilterChange(field, updated)
  }

  return (
    <aside className="filter-panel">
      <div className="filter-header">
        <h3>Refine Results</h3>
        <span className="product-count">{productCount} products</span>
      </div>

      {/* Risk Level */}
      <div className="filter-group">
        <h4>Risk Level</h4>
        {['low', 'medium', 'high'].map(level => (
          <label key={level} className="checkbox-label">
            <input
              type="checkbox"
              checked={filters.riskLevel.includes(level)}
              onChange={() => handleCheckbox('riskLevel', level)}
            />
            <span className={`risk-dot risk-${level}`}></span>
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </label>
        ))}
      </div>

      {/* Category */}
      <div className="filter-group">
        <h4>Category</h4>
        {['savings', 'investment', 'insurance', 'crypto'].map(cat => (
          <label key={cat} className="checkbox-label">
            <input
              type="checkbox"
              checked={filters.category.includes(cat)}
              onChange={() => handleCheckbox('category', cat)}
            />
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </label>
        ))}
      </div>

      {/* Expected Return Range */}
      <div className="filter-group">
        <h4>Expected Return (%)</h4>
        <div className="range-inputs">
          <input
            type="number"
            placeholder="Min %"
            value={filters.minReturn}
            onChange={e => onFilterChange('minReturn', e.target.value)}
          />
          <span>—</span>
          <input
            type="number"
            placeholder="Max %"
            value={filters.maxReturn}
            onChange={e => onFilterChange('maxReturn', e.target.value)}
          />
        </div>
      </div>

      {/* Liquidity */}
      <div className="filter-group">
        <h4>Liquidity</h4>
        <select
          value={filters.liquidity}
          onChange={e => onFilterChange('liquidity', e.target.value)}
        >
          <option value="all">All</option>
          <option value="easy">Easy Access</option>
          <option value="moderate">Moderate</option>
          <option value="locked">Locked</option>
        </select>
      </div>

      {/* Time Horizon */}
      <div className="filter-group">
        <h4>Time Horizon</h4>
        <select
          value={filters.timeHorizon}
          onChange={e => onFilterChange('timeHorizon', e.target.value)}
        >
          <option value="all">All</option>
          <option value="short">Short Term</option>
          <option value="medium">Medium Term</option>
          <option value="long">Long Term</option>
        </select>
      </div>

      {/* Min Investment Budget */}
      <div className="filter-group">
        <h4>My Budget (PKR)</h4>
        <input
          type="number"
          placeholder="Max I can invest"
          value={filters.budget}
          onChange={e => onFilterChange('budget', e.target.value)}
        />
      </div>

      {/* Reset */}
      <button
        className="btn-reset"
        onClick={() => onFilterChange('reset', null)}
      >
        Reset Filters
      </button>
    </aside>
  )
}

export default FilterPanel