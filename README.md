<div align="center">

<img src="https://img.shields.io/badge/Academic_Project-FAST_NUCES-0f172a?style=flat-square&logo=graduation-cap&logoColor=gold" />
&nbsp;
<img src="https://img.shields.io/badge/BS_FinTech-Web_Programming-c9a84c?style=flat-square" />
&nbsp;
<img src="https://img.shields.io/badge/Status-Complete-22c55e?style=flat-square" />
&nbsp;
<img src="https://img.shields.io/badge/License-MIT-6366f1?style=flat-square" />

<br/><br/>

# FinVault

### Dynamic Financial Product Discovery Platform

<br/>

[![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite_5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![React Router](https://img.shields.io/badge/React_Router_6-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com)
[![Context API](https://img.shields.io/badge/Context_API-Built--in-61DAFB?style=for-the-badge&logo=react&logoColor=black)](#)
[![CSS3](https://img.shields.io/badge/Plain_CSS3-Custom_Design-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![Fake Store API](https://img.shields.io/badge/Fake_Store_API-Public-FF6B35?style=for-the-badge&logo=databricks&logoColor=white)](https://fakestoreapi.com)

<br/>

> A comprehensive React-based Financial Technology web application simulating how real users
> explore, evaluate, and manage financial instruments across four asset classes — with a
> live recommendation engine, portfolio analytics, and zero external UI libraries.

<br/>

**[⚡ Quick Start](#-quick-start)** &nbsp;·&nbsp;
**[✨ Features](#-features)** &nbsp;·&nbsp;
**[🧮 Financial Logic](#-financial-logic)** &nbsp;·&nbsp;
**[🤖 Recommendation Engine](#-recommendation-engine)** &nbsp;·&nbsp;
**[💼 Portfolio System](#-portfolio-system)** &nbsp;·&nbsp;
**[🗺️ API Reference](#%EF%B8%8F-api--data-transformation)** &nbsp;·&nbsp;
**[📬 Contact](#-contact)**

</div>

---

## 🎓 Academic Information

<div align="center">

| Field | Details |
|---|---|
| 🏛️ **University** | FAST National University, Islamabad Campus |
| 📚 **Program** | BS Financial Technology |
| 📖 **Course** | Web Programming |
| 👤 **Student** | Muhammad Afzaal Asghar |
| 📋 **Assignment** | Dynamic Financial Product Discovery Platform |

</div>

---

## 📌 Project Overview

**FinVault** is a Dynamic Financial Product Discovery Platform that simulates how real users explore and evaluate financial instruments. Unlike a generic product catalog, this platform models actual financial concepts including risk assessment, expected return calculation, liquidity preferences, and investment horizon planning.

The application is inspired by **private banking dashboards** and **robo-advisor platforms**. It presents financial products across four asset classes — Savings, Investment, Insurance, and Crypto — with a recommendation engine that dynamically matches users to suitable products based on their personal financial profile.

**This project demonstrates:**

- ✅ Proper React application architecture with multi-page routing
- ✅ Real financial domain logic implemented in code
- ✅ Global state management using Context API
- ✅ External API integration with deterministic data transformation
- ✅ A fully custom CSS design system with no UI libraries

---

## 🌐 Live Demo

```
https://finvault.vercel.app
```

> Deploy to Vercel or Netlify and update the link above.

---

## ✨ Features

### 🏠 Core Pages

| Page | Description |
|---|---|
| 🏠 **Home** | Hero section · dynamically selected featured products from each asset class · category navigation · platform statistics |
| 🗂️ **Product Listing** | Complete catalog with 6 simultaneous AND-logic filters |
| 🔍 **Product Detail** | Full product info · dynamic decision insights · compound return calculator · side-by-side comparison · portfolio action |
| 👤 **Financial Profile** | 5-field form — risk tolerance · investment horizon · monthly capacity · liquidity preference · goal — with full validation |
| 🤖 **Recommendation Engine** | Dynamic algorithm mapping profile attributes to suitable products with intelligent sorting |
| 💼 **Portfolio Management** | Add/remove products · edit allocations · weighted return · risk distribution · category breakdown |
| 🚫 **404 Handling** | Custom not-found page for invalid routes |

### 🎨 UI & Interaction Features

- 🎭 **Old Money** cinematic dark theme with gold accents
- ✨ Smooth hover transitions on all interactive elements
- 💫 Add-to-portfolio button state feedback animation
- ⏳ Loading spinner during API calls
- 🎨 Risk level colour coding throughout the application
- 📱 Fully responsive — mobile · tablet · desktop
- 📌 Sticky navbar with active route indication and live portfolio count

---

## 📦 Tech Stack

<div align="center">

| Technology | Version | Purpose |
|---|---|---|
| ⚛️ **React** | 18 | UI component framework |
| ⚡ **Vite** | 5 | Build tool and development server |
| 🧭 **React Router DOM** | 6 | Client-side routing and navigation |
| 🔄 **Context API** | Built-in | Global state management |
| 🎨 **Plain CSS** | — | All styling with CSS custom properties |
| 🛒 **Fake Store API** | Public | External data source |

</div>

> **Libraries intentionally excluded:** Bootstrap · Tailwind CSS · Material UI · Ant Design · Styled Components · Redux.
> All styling and state management is written from scratch as per assignment requirements.

---

## 📁 Folder Structure

```
fintech-platform/
│
├── 📁 public/
│
└── 📁 src/
    │
    ├── 🌐 api/
    │   └── fetchProducts.js           # Fake Store API fetch & financial transformation
    │
    ├── 🔄 context/
    │   ├── PortfolioContext.jsx        # Global portfolio state · calculations · actions
    │   └── UserProfileContext.jsx     # Global profile state · recommendation engine
    │
    ├── 🧩 components/
    │   ├── Navbar.jsx                  # Sticky nav with active route and portfolio count
    │   ├── ProductCard.jsx             # Reusable financial product card
    │   ├── FilterPanel.jsx             # All 6 filter controls with reset
    │   ├── RiskBadge.jsx               # Colour-coded risk level indicator
    │   ├── PortfolioItem.jsx           # Single holding with allocation input
    │   ├── PortfolioSummary.jsx        # Portfolio stats · risk bars · category breakdown
    │   └── RecommendationList.jsx      # Renders filtered recommendation results
    │
    ├── 📄 pages/
    │   ├── Home.jsx                    # Landing page
    │   ├── Products.jsx                # Product listing with filters
    │   ├── ProductDetail.jsx           # Dynamic product detail page
    │   ├── Profile.jsx                 # Financial profile form
    │   ├── Portfolio.jsx               # Portfolio management
    │   ├── Recommendations.jsx         # Personalised recommendations
    │   └── NotFound.jsx                # 404 page
    │
    ├── 🎨 styles/
    │   ├── global.css                  # CSS variables · reset · shared utilities
    │   ├── navbar.css
    │   ├── productCard.css
    │   ├── filterPanel.css
    │   ├── home.css
    │   ├── products.css
    │   ├── productDetail.css
    │   ├── profile.css
    │   ├── portfolio.css
    │   └── recommendations.css
    │
    ├── App.jsx                         # Route configuration and provider wrapping
    └── main.jsx                        # React DOM entry point
```

---

## 🗺️ Pages & Routes

| Route | Component | Description |
|---|---|---|
| `/` | `Home` | Hero · featured products · category tabs · platform stats · CTA |
| `/products` | `Products` | Full catalog with 6 combined AND-logic filters |
| `/product/:id` | `ProductDetail` | Full info · insights · calculator · comparison · portfolio action |
| `/profile` | `Profile` | 5-field financial profile form with validation |
| `/portfolio` | `Portfolio` | Holdings · allocation editing · weighted return · risk breakdown |
| `/recommendations` | `Recommendations` | Dynamic recommendations based on saved profile |
| `*` | `NotFound` | 404 for any unmatched route |

---

## 📐 Financial Data Model

Every product in the system must satisfy this structure. A missing attribute renders the product invalid.

| Attribute | Type | Allowed Values | Description |
|---|---|---|---|
| `id` | `number` | Any unique integer | Used in dynamic routes `/product/:id` |
| `name` | `string` | Any string | Display name of the product |
| `category` | `enum` | `savings` · `investment` · `insurance` · `crypto` | Asset class |
| `expectedReturn` | `number` | 3.0 — 27.0 | Annual return percentage |
| `riskLevel` | `enum` | `low` · `medium` · `high` | Risk classification |
| `liquidity` | `enum` | `easy` · `moderate` · `locked` | Accessibility of funds |
| `timeHorizon` | `enum` | `short` · `medium` · `long` | Recommended investment duration |
| `minInvestment` | `number` | Any positive PKR value | Minimum amount to invest |
| `description` | `string` | Any string | Human-readable product description |
| `image` | `string` | URL | Product image URL |

### 🔒 Data Consistency Rules

The system enforces logical relationships between attributes:

| Rule | Constraint |
|---|---|
| 🟢 Low risk return cap | A low-risk product cannot have a return above 7% |
| 🔒 Locked = long-term | A locked-liquidity product is always long-term |
| 🔴 Crypto = high risk | A crypto product is always high risk |
| 💰 Savings = short + easy | A savings product is always short-term with easy liquidity |
| 📈 Return ↔ Risk | Higher expected return always corresponds to higher risk |

---

## 🧮 Financial Logic

### 📊 Risk-to-Return Mapping

```
🟢 Low Risk    →   3.0% — 6.6%  expected annual return
🟡 Medium Risk →   7.0% — 11.5% expected annual return
🔴 High Risk   →  12.0% — 25.5% expected annual return
```

Returns are calculated using a **deterministic seed** — no `Math.random()` anywhere in the codebase:

```js
const seed = productId % 10        // gives 0–9, same value for same product every time

// low:    3 + seed × 0.4
// medium: 7 + seed × 0.5
// high:   12 + seed × 1.5
```

The same product always receives the same return value regardless of how many times the API is called.

### 🗂️ Category to Financial Attribute Mapping

| API Category | Financial Category | Risk | Liquidity | Horizon |
|---|---|---|---|---|
| `electronics` | Investment | 🟡 Medium | Moderate | Long |
| `jewelery` | Savings | 🟢 Low | Easy | Short |
| `men's clothing` | Insurance | 🟢 Low | Locked | Long |
| `women's clothing` | Crypto | 🔴 High | Easy | Long |

### 💡 Decision Insight Generation

Insights on the product detail page are generated **dynamically** based on product attributes — never hardcoded strings. Changing any attribute changes the insights automatically.

```js
function generateDecisionInsight(product) {
  const insights = []

  // Risk-based insight
  if (product.riskLevel === 'low')
    insights.push('Suitable for conservative investors prioritising capital preservation.')
  else if (product.riskLevel === 'medium')
    insights.push('Balanced option for moderate investors seeking growth with manageable risk.')
  else
    insights.push('Best for aggressive investors comfortable with significant volatility.')

  // Liquidity-based insight
  if (product.liquidity === 'locked')
    insights.push('Requires long-term commitment — early withdrawal may incur penalties.')
  else if (product.liquidity === 'easy')
    insights.push('Funds remain accessible — ideal if you may need liquidity.')

  // Horizon-based insight
  if (product.timeHorizon === 'long')
    insights.push('Optimal returns are achieved when held for 5 or more years.')
  else if (product.timeHorizon === 'short')
    insights.push('Designed for short-term goals within 1–2 years.')

  // High-return warning
  if (product.expectedReturn > 15)
    insights.push('High return potential comes with elevated market exposure.')

  return insights
}
```

---

## 🤖 Recommendation Engine

The recommendation engine lives inside `UserProfileContext` and is called with the full products array. **It never returns a hardcoded list.**

### Step-by-Step Logic

```
Step 1 — Map risk tolerance to allowed risk levels
─────────────────────────────────────────────────
  conservative  →  ['low']
  moderate      →  ['low', 'medium']
  aggressive    →  ['low', 'medium', 'high']

Step 2 — Map investment horizon to allowed time horizons
────────────────────────────────────────────────────────
  short   →  ['short']
  medium  →  ['short', 'medium']
  long    →  ['short', 'medium', 'long']

Step 3 — Map liquidity preference to allowed liquidity types
────────────────────────────────────────────────────────────
  easy      →  ['easy']
  moderate  →  ['easy', 'moderate']
  locked    →  ['easy', 'moderate', 'locked']

Step 4 — Filter by budget
─────────────────────────
  product.minInvestment <= userProfile.monthlyCapacity

Step 5 — Apply all filters with AND logic
──────────────────────────────────────────
  A product is recommended only if it passes ALL four conditions simultaneously.

Step 6 — Sort results
──────────────────────
  conservative  →  sort by lowest return first  (capital preservation priority)
  all others    →  sort by highest return first  (growth priority)
```

> **Live recalculation:** If a user changes their risk tolerance from `moderate` to `conservative`, the entire recommendation list recalculates immediately. Products that were showing before may disappear. This reflects real financial advisory logic.

---

## 💼 Portfolio System

### 🗂️ Portfolio State Structure

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

### 🧮 Calculations

**Total Invested**
```
totalInvested = Σ allocatedAmount
```

**Weighted Expected Return**
```
weightedReturn = Σ ( allocatedAmount / totalInvested ) × expectedReturn

Example:
  PKR 60,000 at 8%   →  share = 0.60  →  contribution = 4.8%
  PKR 40,000 at 12%  →  share = 0.40  →  contribution = 4.8%
  ──────────────────────────────────────────────────────────
  Weighted Return = 9.6%
```

**Risk Distribution**
```
lowRiskPercent    = ( Σ low-risk allocations    / totalInvested ) × 100
mediumRiskPercent = ( Σ medium-risk allocations / totalInvested ) × 100
highRiskPercent   = ( Σ high-risk allocations   / totalInvested ) × 100
```

**Projected Value (Compound Growth)**
```
projectedValue = allocatedAmount × ( 1 + expectedReturn / 100 ) ^ years
```

> ⚠️ **High-Risk Warning:** If more than 70% of the portfolio is allocated to high-risk products, a warning banner is displayed automatically.

---

## 🧩 Component Hierarchy

```
App
├── 🔄 UserProfileProvider (context)
│   └── 🔄 PortfolioProvider (context)
│       └── BrowserRouter
│           ├── 📌 Navbar
│           │       └── usePortfolio() → reads items.length for live count
│           └── Routes
│               ├── /              →  🏠 Home
│               │                         └── ProductCard × featured products
│               ├── /products      →  🗂️ Products
│               │                         ├── FilterPanel
│               │                         └── ProductCard × filtered products
│               ├── /product/:id   →  🔍 ProductDetail
│               │                         └── RiskBadge
│               ├── /profile       →  👤 Profile
│               ├── /portfolio     →  💼 Portfolio
│               │                         ├── PortfolioItem × items
│               │                         └── PortfolioSummary
│               ├── /recommendations → 🤖 Recommendations
│               │                         └── RecommendationList
│               │                                 └── ProductCard × recommendations
│               └── *              →  🚫 NotFound
```

### 📋 Props Flow

| Component | Key Props Received | Communicates Back Via |
|---|---|---|
| `ProductCard` | `product` | `usePortfolio()` hook directly |
| `FilterPanel` | `filters` · `onFilterChange` · `productCount` | `onFilterChange` callback |
| `PortfolioItem` | `item` | `usePortfolio()` hook directly |
| `PortfolioSummary` | — | Reads from `usePortfolio()` |
| `RecommendationList` | `recommendations` · `profile` | None |
| `RiskBadge` | `riskLevel` | None |

---

## 🔄 State Management

### Why Context API over Prop Drilling

Without Context, portfolio data would need to pass through this chain:

```
App → Products → ProductCard → AddButton
App → Navbar  (to show count)
App → Portfolio → PortfolioItem
```

This means `App` would hold all state and pass it through every intermediate component even if that component does not use it. Context eliminates this by letting any component access state directly.

### 👤 UserProfileContext

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

| Function | Description |
|---|---|
| `updateProfile(newProfile)` | Saves the complete profile object to state |
| `isProfileComplete()` | Returns `true` only when all 5 fields are non-empty |
| `getRecommendations(products)` | Filters and sorts products based on current profile |

### 💼 PortfolioContext

**State:**
```js
{
  items: []   // array of product objects each with an allocatedAmount field
}
```

**Exposed Functions:**

| Function | Description |
|---|---|
| `addToPortfolio(product)` | Adds product with default allocation · blocks duplicates |
| `removeFromPortfolio(id)` | Removes product by id |
| `updateAllocation(id, amount)` | Updates allocated amount for a specific product |
| `isInPortfolio(id)` | Returns `boolean` — used to toggle button state |
| `getTotalInvested()` | Returns sum of all allocations |
| `getWeightedReturn()` | Returns portfolio weighted expected return |
| `getRiskDistribution()` | Returns percentage breakdown by risk level |
| `getCategoryDistribution()` | Returns percentage breakdown by category |

---

## 🗺️ API & Data Transformation

### 🌐 API Used

```
GET https://fakestoreapi.com/products
```

Returns 20 products across 4 categories. Raw data contains **no financial attributes** — the full transformation is applied client-side.

### ⚙️ Transformation Pipeline

```
Raw API Product
      │
      ▼
  categoryMapping      →  maps API category string to financial category
      │
      ▼
  riskMapping          →  assigns risk level based on financial category
      │
      ▼
  assignLiquidity      →  assigns liquidity based on financial category
      │
      ▼
  assignTimeHorizon    →  assigns time horizon based on financial category
      │
      ▼
  assignExpectedReturn →  calculates return using riskLevel + id seed
      │
      ▼
  minInvestment        →  price × 1000  (converts USD price to PKR scale)
      │
      ▼
  Transformed Financial Product
```

### 🛡️ Error Handling

| Scenario | Behaviour |
|---|---|
| 🔴 API call fails | Error message displayed with a **Retry** button |
| 🔍 Invalid product ID in URL | Error state shown with back navigation option |
| 🔽 No products match filters | Empty state shown with a **Reset Filters** option |
| 👤 Recommendations without profile | Prompt to complete the financial profile |

---

## 🔽 Filtering Logic

All 6 filters work together using **AND logic**. A product must pass every active filter to appear in results.

```js
const pass =
  ( riskFilter.length === 0     || riskFilter.includes(product.riskLevel)      ) &&
  ( categoryFilter.length === 0 || categoryFilter.includes(product.category)   ) &&
  ( product.expectedReturn >= minReturn && product.expectedReturn <= maxReturn  ) &&
  ( liquidityFilter === 'all'   || product.liquidity === liquidityFilter        ) &&
  ( horizonFilter === 'all'     || product.timeHorizon === horizonFilter        ) &&
  ( product.minInvestment <= budget                                             )
```

| Filter | Type | Logic |
|---|---|---|
| 🎯 **Risk Level** | Multi-select | OR within filter · AND with others |
| 🗂️ **Category** | Multi-select | OR within filter · AND with others |
| 📈 **Return Range** | Min + Max | Product return must fall within range |
| 💧 **Liquidity** | Single-select | Exact match or all |
| 🕐 **Time Horizon** | Single-select | Exact match or all |
| 💰 **Budget** | Number input | `product.minInvestment` must be within budget |

---

## 🎨 Animations & Interactions

All animations use **plain CSS** — no animation libraries.

| Interaction | Implementation | Duration |
|---|---|---|
| 🃏 Product card hover | `transform: translateY(-2px)` + border glow | 250ms |
| ➕ Add to Portfolio button | Colour and text change when added | 250ms |
| 📊 Risk distribution bars | `transition: width` on bar fill | 400ms |
| ⏳ Page loading state | CSS `@keyframes` spin on loader element | 800ms loop |
| 🔽 Filter panel hover | Border colour + text colour transition | 250ms |
| 📌 Navbar link hover | Colour transition on link text | 250ms |

---

## 🎨 Styling Approach

The entire design system is built on **CSS custom properties** defined in `global.css`. Typography uses Georgia and Times New Roman for a premium serif feel consistent with private banking aesthetics.

```css
:root {
  /* ── Backgrounds ─────────────────────────────────── */
  --color-bg:          #0f0f0f;   /* deep black background         */
  --color-surface:     #1a1a1a;   /* card and component surfaces   */
  --color-surface-2:   #222222;   /* elevated surface level        */
  --color-border:      #2e2e2e;   /* subtle borders                */

  /* ── Brand Accents ───────────────────────────────── */
  --color-gold:        #c9a84c;   /* primary accent — Old Money    */
  --color-gold-muted:  #9e7f3a;   /* hover state for gold elements */

  /* ── Typography ──────────────────────────────────── */
  --color-cream:       #f0ead6;   /* headings and important text   */
  --color-text:        #e8e0cc;   /* body text                     */
  --color-text-muted:  #8a8070;   /* secondary and label text      */

  /* ── Risk Colours ────────────────────────────────── */
  --color-low:         #4a7c59;   /* 🟢 low risk green             */
  --color-medium:      #9e7a2e;   /* 🟡 medium risk amber          */
  --color-high:        #8b3a3a;   /* 🔴 high risk red              */
}
```

---

## ⚡ Quick Start

### 📋 Prerequisites

- Node.js 16+
- npm 7+
- Git

### Step 1 — Clone the Repository

```bash
git clone https://github.com/muhafzaala/fintech-platform.git
cd fintech-platform
```

### Step 2 — Install Dependencies

```bash
npm install
```

### Step 3 — Start Development Server

```bash
npm run dev
```

Open in browser → `http://localhost:5173`

### Step 4 — Build for Production

```bash
npm run build
```

### Step 5 — Preview Production Build

```bash
npm run preview
```

### 📦 Dependencies

```json
{
  "dependencies": {
    "react":            "^18.0.0",
    "react-dom":        "^18.0.0",
    "react-router-dom": "^6.0.0"
  },
  "devDependencies": {
    "vite":                  "^5.0.0",
    "@vitejs/plugin-react":  "^4.0.0"
  }
}
```

---

## 📜 Commit History

| # | Commit Message |
|---|---|
| `1` | Initial project setup with Vite, React and React Router |
| `2` | Add Old Money cinematic theme with CSS variables and base styling |
| `3` | Add Fake Store API integration with deterministic financial product transformation |
| `4` | Add UserProfileContext with profile state management and recommendation engine |
| `5` | Add PortfolioContext with weighted return and risk distribution calculations |
| `6` | Configure all routes and wrap app with UserProfile and Portfolio context providers |
| `7` | Add Navbar with active route and portfolio count · add RiskBadge with risk colour coding |
| `8` | Add ProductCard with hover effects · return display and add-to-portfolio button state |
| `9` | Add FilterPanel with all 6 filters using AND logic combination |
| `10` | Add Home page with hero section · dynamic featured products and category navigation |
| `11` | Add Products page with live filtering across risk · category · return · liquidity · horizon · budget |
| `12` | Add ProductDetail with dynamic route · decision insights generator · return calculator · comparison |
| `13` | Add Profile page with controlled form validation and all 5 financial profile fields |
| `14` | Add Portfolio page with holdings · allocation editing · weighted return · risk distribution visual |
| `15` | Add Recommendations page with dynamic profile-based engine and NotFound 404 page |

---

## 🔏 Academic Integrity

All code in this repository was written and is fully understood by the student. The financial logic, recommendation engine, portfolio calculations, and data transformation reflect genuine understanding of both React development and financial technology concepts.

---

## 📬 Contact

<div align="center">

**Muhammad Afzaal Asghar**
BS Financial Technology · FAST National University, Islamabad

[![Email](https://img.shields.io/badge/Email-mafzaala333%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mafzaala333@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-muhafzaala-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/muhafzaala)

<br/>

For questions or issues, open an [issue](https://github.com/muhafzaala/fintech-platform/issues) or reach out at **mafzaala333@gmail.com**

<br/>

---

⭐ **If this project was useful, consider giving it a star.**

*Built with React, Context API, and a deep focus on financial technology concepts.*

</div>
