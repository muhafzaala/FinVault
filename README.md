README.md
markdown# FinVault — Dynamic Financial Product Discovery Platform

> A comprehensive React-based Financial Technology web application developed as part of the BS FinTech program at FAST National University, Islamabad.

---

## Academic Information

| Field          | Details                                          |
|----------------|--------------------------------------------------|
| University     | FAST National University, Islamabad Campus       |
| Program        | BS Financial Technology                          |
| Course         | Web Programming                                  |                                     |
| Student        | Muhammad Afzaal Asghar                           |
| Assignment     | Dynamic Financial Product Discovery Platform     |

---

## Table of Contents

- [Project Overview](#project-overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation and Setup](#installation-and-setup)
- [Pages and Routes](#pages-and-routes)
- [Financial Data Model](#financial-data-model)
- [Financial Logic Explained](#financial-logic-explained)
- [Recommendation Engine](#recommendation-engine)
- [Portfolio System](#portfolio-system)
- [Component Hierarchy](#component-hierarchy)
- [State Management](#state-management)
- [API Integration and Data Transformation](#api-integration-and-data-transformation)
- [Filtering Logic](#filtering-logic)
- [Animations and Interactions](#animations-and-interactions)
- [Styling Approach](#styling-approach)
- [Commit History](#commit-history)
- [Academic Integrity](#academic-integrity)

---

## Project Overview

FinVault is a Dynamic Financial Product Discovery Platform that simulates how real users explore and evaluate financial instruments. Unlike a generic product catalog, this platform models actual financial concepts including risk assessment, expected return calculation, liquidity preferences, and investment horizon planning.

The application is inspired by private banking dashboards and robo-advisor platforms. It presents financial products across four asset classes — Savings, Investment, Insurance, and Crypto — with a recommendation engine that dynamically matches users to suitable products based on their personal financial profile.

This project demonstrates:

- Proper React application architecture with multi-page routing
- Real financial domain logic implemented in code
- Global state management using Context API
- External API integration with deterministic data transformation
- A fully custom CSS design system with no UI libraries

---

## Live Demo

> Add your deployed application link here after deploying to Vercel or Netlify.

```
https://finvault.vercel.app
```

---

## Features

### Core Features

- **Home Page** — Hero section with platform overview, dynamically selected featured products from each asset class, category navigation with live filtering, and platform statistics
- **Product Listing** — Complete product catalog with 6 simultaneous filters using AND logic
- **Product Detail** — Full product information, dynamically generated decision insights, compound return calculator, side-by-side product comparison, and add to portfolio functionality
- **Financial Profile** — Multi-field form collecting risk tolerance, investment horizon, monthly capacity, liquidity preference and investment goal with full validation
- **Recommendation Engine** — Dynamic algorithm that maps profile attributes to suitable products with intelligent sorting
- **Portfolio Management** — Add and remove products, edit allocation amounts, view weighted return, risk distribution breakdown and category distribution
- **404 Handling** — Custom not found page for invalid routes

### UI and Interaction Features

- Old Money cinematic dark theme with gold accents
- Smooth hover transitions on all interactive elements
- Add to portfolio button state feedback animation
- Loading spinner during API calls
- Risk level color coding throughout the application
- Fully responsive layout for mobile, tablet and desktop
- Sticky navbar with active route indication and live portfolio count

---

## Tech Stack

| Technology       | Version  | Purpose                              |
|------------------|----------|--------------------------------------|
| React            | 18       | UI component framework               |
| Vite             | 5        | Build tool and development server    |
| React Router DOM | 6        | Client-side routing and navigation   |
| Context API      | Built-in | Global state management              |
| Plain CSS        | —        | All styling with CSS custom properties |
| Fake Store API   | Public   | External data source                 |

**Libraries intentionally excluded:** Bootstrap, Tailwind CSS, Material UI, Ant Design, Styled Components, Redux. All styling and state management is written from scratch as per assignment requirements.

---

## Folder Structure

```
fintech-platform/
├── public/
├── src/
│   ├── api/
│   │   └── fetchProducts.js           # Fake Store API fetch and financial transformation
│   ├── context/
│   │   ├── PortfolioContext.jsx        # Global portfolio state, calculations, actions
│   │   └── UserProfileContext.jsx     # Global profile state and recommendation engine
│   ├── components/
│   │   ├── Navbar.jsx                  # Sticky nav with active route and portfolio count
│   │   ├── ProductCard.jsx             # Reusable financial product card
│   │   ├── FilterPanel.jsx             # All 6 filter controls with reset
│   │   ├── RiskBadge.jsx               # Color-coded risk level indicator
│   │   ├── PortfolioItem.jsx           # Single portfolio holding with allocation input
│   │   ├── PortfolioSummary.jsx        # Portfolio stats, risk bars, category breakdown
│   │   └── RecommendationList.jsx      # Renders filtered recommendation results
│   ├── pages/
│   │   ├── Home.jsx                    # Landing page
│   │   ├── Products.jsx                # Product listing with filters
│   │   ├── ProductDetail.jsx           # Dynamic product detail page
│   │   ├── Profile.jsx                 # Financial profile form
│   │   ├── Portfolio.jsx               # Portfolio management
│   │   ├── Recommendations.jsx         # Personalized recommendations
│   │   └── NotFound.jsx                # 404 page
│   ├── styles/
│   │   ├── global.css                  # CSS variables, reset, shared utilities
│   │   ├── navbar.css
│   │   ├── productCard.css
│   │   ├── filterPanel.css
│   │   ├── home.css
│   │   ├── products.css
│   │   ├── productDetail.css
│   │   ├── profile.css
│   │   ├── portfolio.css
│   │   └── recommendations.css
│   ├── App.jsx                         # Route configuration and provider wrapping
│   └── main.jsx                        # React DOM entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Installation and Setup

### Prerequisites

- Node.js version 16 or higher
- npm version 7 or higher
- Git

### Steps

**1. Clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/fintech-platform.git
cd fintech-platform
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm run dev
```

**4. Open in your browser**

```
http://localhost:5173
```

**5. Build for production**

```bash
npm run build
```

**6. Preview production build**

```bash
npm run preview
```

### Dependencies

```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-router-dom": "^6.0.0"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.0.0"
  }
}
```

---

## Pages and Routes

| Route              | Component         | Description                                                        |
|--------------------|-------------------|--------------------------------------------------------------------|
| `/`                | Home              | Hero, featured products, category tabs, platform stats, CTA        |
| `/products`        | Products          | Full catalog with 6 combined AND-logic filters                     |
| `/product/:id`     | ProductDetail     | Full info, insights, calculator, comparison, portfolio action      |
| `/profile`         | Profile           | 5-field financial profile form with validation                     |
| `/portfolio`       | Portfolio         | Holdings list, allocation editing, weighted return, risk breakdown |
| `/recommendations` | Recommendations   | Dynamic recommendations based on saved profile                     |
| `*`                | NotFound          | 404 for any unmatched route                                        |

---

## Financial Data Model

Every product in the system must satisfy this structure. Missing any attribute makes the product invalid:

| Attribute        | Type   | Allowed Values                              | Description                         |
|------------------|--------|---------------------------------------------|-------------------------------------|
| `id`             | number | Any unique integer                          | Used in dynamic routes `/product/:id` |
| `name`           | string | Any string                                  | Display name of the product         |
| `category`       | enum   | savings, investment, insurance, crypto      | Asset class                         |
| `expectedReturn` | number | 3.0 — 27.0                                  | Annual return percentage            |
| `riskLevel`      | enum   | low, medium, high                           | Risk classification                 |
| `liquidity`      | enum   | easy, moderate, locked                      | How accessible the funds are        |
| `timeHorizon`    | enum   | short, medium, long                         | Recommended investment duration     |
| `minInvestment`  | number | Any positive number in PKR                  | Minimum amount to invest            |
| `description`    | string | Any string                                  | Human-readable product description  |
| `image`          | string | URL                                         | Product image URL                   |

### Data Consistency Rules

The system enforces logical relationships between attributes:

- A low risk product cannot have a return above 7%
- A locked liquidity product is always long term
- A crypto product is always high risk
- A savings product is always short term and easy liquidity
- Higher expected return always corresponds to higher risk

---

## Financial Logic Explained

### Risk to Return Mapping

```
Low Risk    →  3.0% to 6.6% expected annual return
Medium Risk →  7.0% to 11.5% expected annual return
High Risk   → 12.0% to 25.5% expected annual return
```

Returns are calculated using a deterministic seed:

```js
const seed = productId % 10  // gives 0–9, same for same product every time

low:    3 + seed × 0.4
medium: 7 + seed × 0.5
high:   12 + seed × 1.5
```

This means the same product always gets the same return value. There is no `Math.random()` anywhere in the codebase.

### Category to Financial Attribute Mapping

| API Category     | Financial Category | Risk    | Liquidity | Horizon |
|------------------|--------------------|---------|-----------|---------|
| electronics      | investment         | medium  | moderate  | long    |
| jewelery         | savings            | low     | easy      | short   |
| men's clothing   | insurance          | low     | locked    | long    |
| women's clothing | crypto             | high    | easy      | long    |

### Decision Insight Generation

Insights on the product detail page are generated dynamically based on product attributes — not hardcoded strings:

```js
function generateDecisionInsight(product) {
  const insights = []

  if (product.riskLevel === 'low')
    insights.push('Suitable for conservative investors prioritising capital preservation.')
  else if (product.riskLevel === 'medium')
    insights.push('Balanced option for moderate investors seeking growth with manageable risk.')
  else
    insights.push('Best for aggressive investors comfortable with significant volatility.')

  if (product.liquidity === 'locked')
    insights.push('Requires long-term commitment — early withdrawal may incur penalties.')
  else if (product.liquidity === 'easy')
    insights.push('Funds remain accessible — ideal if you may need liquidity.')

  if (product.timeHorizon === 'long')
    insights.push('Optimal returns are achieved when held for 5 or more years.')
  else if (product.timeHorizon === 'short')
    insights.push('Designed for short-term goals within 1–2 years.')

  if (product.expectedReturn > 15)
    insights.push('High return potential comes with elevated market exposure.')

  return insights
}
```

Changing any attribute on the product changes the insights automatically.

---

## Recommendation Engine

The recommendation engine lives inside `UserProfileContext` and is called with the full products array. It never returns a hardcoded list.

### Step by Step Logic

**Step 1 — Map risk tolerance to allowed risk levels**

```
conservative  →  ['low']
moderate      →  ['low', 'medium']
aggressive    →  ['low', 'medium', 'high']
```

**Step 2 — Map investment horizon to allowed time horizons**

```
short   →  ['short']
medium  →  ['short', 'medium']
long    →  ['short', 'medium', 'long']
```

**Step 3 — Map liquidity preference to allowed liquidity types**

```
easy      →  ['easy']
moderate  →  ['easy', 'moderate']
locked    →  ['easy', 'moderate', 'locked']
```

**Step 4 — Filter by budget**

```
product.minInvestment <= userProfile.monthlyCapacity
```

**Step 5 — Apply all filters with AND logic**

A product is recommended only if it passes all four conditions simultaneously.

**Step 6 — Sort results**

```
conservative profile  →  sort by lowest expected return first (capital preservation)
all other profiles    →  sort by highest expected return first
```

### What happens when profile changes

If a user changes their risk tolerance from `moderate` to `conservative`, the entire recommendation list recalculates immediately. Products that were showing before may disappear. This is intentional and reflects real financial advisory logic.

---

## Portfolio System

### Portfolio State Structure

```js
{
  items: [
    {
      ...product,
      allocatedAmount: 50000   // user-defined amount in PKR
    }
  ]
}
```

### Calculations

**Total Invested**

```
totalInvested = sum of all allocatedAmount values
```

**Weighted Expected Return**

```
weightedReturn = Σ (allocatedAmount / totalInvested) × expectedReturn

Example:
  PKR 60,000 at 8% return  →  share = 0.6  →  contribution = 4.8%
  PKR 40,000 at 12% return →  share = 0.4  →  contribution = 4.8%
  Weighted Return = 4.8 + 4.8 = 9.6%
```

**Risk Distribution**

```
lowRiskPercent    = (sum of low risk allocations / totalInvested) × 100
mediumRiskPercent = (sum of medium risk allocations / totalInvested) × 100
highRiskPercent   = (sum of high risk allocations / totalInvested) × 100
```

**Projected Value**

```
projectedValue = allocatedAmount × (1 + expectedReturn / 100) ^ years
```

**High Risk Warning**

If more than 70% of the portfolio is allocated to high risk products, a warning banner is displayed automatically.

---

## Component Hierarchy

```
App
├── UserProfileProvider (context)
│   └── PortfolioProvider (context)
│       ├── BrowserRouter
│       │   ├── Navbar
│       │   │   └── usePortfolio() — reads items.length for count
│       │   └── Routes
│       │       ├── / → Home
│       │       │       └── ProductCard × featured products
│       │       ├── /products → Products
│       │       │       ├── FilterPanel
│       │       │       └── ProductCard × filtered products
│       │       ├── /product/:id → ProductDetail
│       │       │       └── RiskBadge
│       │       ├── /profile → Profile
│       │       ├── /portfolio → Portfolio
│       │       │       ├── PortfolioItem × items
│       │       │       └── PortfolioSummary
│       │       ├── /recommendations → Recommendations
│       │       │       └── RecommendationList
│       │       │               └── ProductCard × recommendations
│       │       └── * → NotFound
```

### Props Flow

| Component          | Key Props Received             | Communicates Back Via        |
|--------------------|--------------------------------|------------------------------|
| ProductCard        | product                        | usePortfolio() hook directly |
| FilterPanel        | filters, onFilterChange, productCount | onFilterChange callback |
| PortfolioItem      | item                           | usePortfolio() hook directly |
| PortfolioSummary   | none                           | reads from usePortfolio()    |
| RecommendationList | recommendations, profile       | none                         |
| RiskBadge          | riskLevel                      | none                         |

---

## State Management

### Why Context API over Prop Drilling

Without Context, portfolio data would need to pass through this chain:

```
App → Products → ProductCard → AddButton
App → Navbar (to show count)
App → Portfolio → PortfolioItem
```

This means App would hold all state and pass it through every intermediate component even if that component does not use it. Context eliminates this by letting any component access the state directly.

### UserProfileContext

**State:**

```js
{
  riskTolerance:       '',   // conservative | moderate | aggressive
  investmentHorizon:   '',   // short | medium | long
  monthlyCapacity:     '',   // number in PKR
  liquidityPreference: '',   // easy | moderate | locked
  investmentGoal:      ''    // wealth | retirement | emergency | purchase
}
```

**Exposed Functions:**

| Function                        | Description                                          |
|---------------------------------|------------------------------------------------------|
| `updateProfile(newProfile)`     | Saves the complete profile object to state           |
| `isProfileComplete()`           | Returns true only when all 5 fields are non-empty    |
| `getRecommendations(products)`  | Filters and sorts products based on current profile  |

### PortfolioContext

**State:**

```js
{
  items: []   // array of product objects each with allocatedAmount field
}
```

**Exposed Functions:**

| Function                          | Description                                            |
|-----------------------------------|--------------------------------------------------------|
| `addToPortfolio(product)`         | Adds product with default allocation, blocks duplicates |
| `removeFromPortfolio(id)`         | Removes product by id                                  |
| `updateAllocation(id, amount)`    | Updates allocated amount for a specific product        |
| `isInPortfolio(id)`               | Returns boolean — used to toggle button state          |
| `getTotalInvested()`              | Returns sum of all allocations                         |
| `getWeightedReturn()`             | Returns portfolio weighted expected return             |
| `getRiskDistribution()`           | Returns percentage breakdown by risk level             |
| `getCategoryDistribution()`       | Returns percentage breakdown by category               |

---

## API Integration and Data Transformation

### API Used

```
https://fakestoreapi.com/products
```

Returns 20 products across 4 categories. Raw data does not contain any financial attributes.

### Transformation Pipeline

```
Raw API Product
      ↓
categoryMapping  →  maps API category to financial category
      ↓
riskMapping      →  assigns risk level based on financial category
      ↓
assignLiquidity  →  assigns liquidity based on financial category
      ↓
assignTimeHorizon →  assigns time horizon based on financial category
      ↓
assignExpectedReturn →  calculates return using riskLevel + id seed
      ↓
minInvestment    →  price × 1000 to convert USD to PKR scale
      ↓
Transformed Financial Product
```

### Error Handling

- If the API call fails, an error message is displayed with a Retry button
- If a product ID in the URL does not exist, an error state is shown with a back navigation option
- If no products match the active filters, an empty state is shown with a reset option
- If the user visits recommendations without a profile, a prompt to complete the profile is shown

---

## Filtering Logic

All 6 filters work together using AND logic. A product must pass every active filter to appear in results.

```js
const pass =
  (riskFilter.length === 0    || riskFilter.includes(product.riskLevel))     &&
  (categoryFilter.length === 0 || categoryFilter.includes(product.category)) &&
  (product.expectedReturn >= minReturn && product.expectedReturn <= maxReturn) &&
  (liquidityFilter === 'all'   || product.liquidity === liquidityFilter)      &&
  (horizonFilter === 'all'     || product.timeHorizon === horizonFilter)      &&
  (product.minInvestment <= budget)
```

| Filter            | Type            | Logic                                           |
|-------------------|-----------------|-------------------------------------------------|
| Risk Level        | Multi-select    | OR within filter, AND with others               |
| Category          | Multi-select    | OR within filter, AND with others               |
| Return Range      | Min and Max     | Product return must fall within range           |
| Liquidity         | Single select   | Exact match or all                              |
| Time Horizon      | Single select   | Exact match or all                              |
| Budget            | Number input    | Product minInvestment must be within budget     |

---

## Animations and Interactions

All animations use plain CSS — no animation libraries:

| Interaction                    | Implementation                              | Duration  |
|--------------------------------|---------------------------------------------|-----------|
| Product card hover             | `transform: translateY(-2px)` + border glow | 250ms     |
| Add to Portfolio button        | Color and text change when added            | 250ms     |
| Risk distribution bars         | `transition: width` on bar fill             | 400ms     |
| Page loading state             | CSS keyframe spin animation on loader       | 800ms loop |
| Filter panel hover states      | Border color and text color transition      | 250ms     |
| Navbar link hover              | Color transition on link text               | 250ms     |

---

## Styling Approach

The entire design system is built on CSS custom properties defined in `global.css`:

```css
:root {
  --color-bg:         #0f0f0f;   /* deep black background          */
  --color-surface:    #1a1a1a;   /* card and component surfaces     */
  --color-surface-2:  #222222;   /* elevated surface level          */
  --color-border:     #2e2e2e;   /* subtle borders                  */
  --color-gold:       #c9a84c;   /* primary accent color            */
  --color-gold-muted: #9e7f3a;   /* hover state for gold elements   */
  --color-cream:      #f0ead6;   /* headings and important text     */
  --color-text:       #e8e0cc;   /* body text                       */
  --color-text-muted: #8a8070;   /* secondary and label text        */
  --color-low:        #4a7c59;   /* low risk green                  */
  --color-medium:     #9e7a2e;   /* medium risk amber               */
  --color-high:       #8b3a3a;   /* high risk red                   */
}
```

Typography uses Georgia and Times New Roman to achieve a premium serif feel consistent with private banking aesthetics.

---

## Commit History

| Commit | Message                                                                              |
|--------|--------------------------------------------------------------------------------------|
| 1      | Initial project setup with Vite, React and React Router                              |
| 2      | Add Old Money cinematic theme with CSS variables and base styling                    |
| 3      | Add Fake Store API integration with deterministic financial product transformation   |
| 4      | Add UserProfileContext with profile state management and recommendation engine       |
| 5      | Add PortfolioContext with weighted return and risk distribution calculations          |
| 6      | Configure all routes and wrap app with UserProfile and Portfolio context providers   |
| 7      | Add Navbar with active route and portfolio count, add RiskBadge with risk color coding |
| 8      | Add ProductCard with hover effects, return display and add to portfolio button state |
| 9      | Add FilterPanel with all 6 filters using AND logic combination                       |
| 10     | Add Home page with hero section, dynamic featured products and category navigation   |
| 11     | Add Products page with live filtering across risk, category, return, liquidity, horizon and budget |
| 12     | Add ProductDetail with dynamic route, decision insights generator, return calculator and comparison |
| 13     | Add Profile page with controlled form validation and all 5 financial profile fields  |
| 14     | Add Portfolio page with holdings, allocation editing, weighted return and risk distribution visual |
| 15     | Add Recommendations page with dynamic profile-based engine and NotFound 404 page    |

---

## Academic Integrity

All code in this repository was written and is fully understood by the student. The financial logic, recommendation engine, portfolio calculations, and data transformation reflect genuine understanding of both React development and financial technology concepts.

