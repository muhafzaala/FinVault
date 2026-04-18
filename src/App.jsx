import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserProfileProvider } from './context/UserProfileContext'
import { PortfolioProvider } from './context/PortfolioContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Profile from './pages/Profile'
import Portfolio from './pages/Portfolio'
import Recommendations from './pages/Recommendations'
import NotFound from './pages/NotFound'

function App() {
  return (
    <UserProfileProvider>
      <PortfolioProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/"                element={<Home />} />
            <Route path="/products"        element={<Products />} />
            <Route path="/product/:id"     element={<ProductDetail />} />
            <Route path="/profile"         element={<Profile />} />
            <Route path="/portfolio"       element={<Portfolio />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="*"                element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PortfolioProvider>
    </UserProfileProvider>
  )
}

export default App