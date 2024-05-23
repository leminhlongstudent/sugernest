import HomePage from './client/pages/HomePage.jsx'
import Header from './client/layout/Header.jsx'
import Footer from './client/layout/Footer.jsx'
import ListProductComponent from './client/pages/ProductsPage.jsx'
import ProductComponent from './client/pages/ProductDetailPage.jsx'
import LoginComponent from './client/pages/LoginPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartPage from './client/pages/CartPage.jsx'
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/products" element={<ListProductComponent />} />
          <Route path="/products/:id" element={<ProductComponent/>} />
          <Route path="cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
