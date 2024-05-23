import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './assets/css/index.css'
import './assets/css/main.css'
import './assets/css/responsive.css'
import './assets/css/product-infor-style.css'
import './assets/css/quickviews-popup-cart.css'
import './assets/css/coupon.css'
import './assets/css/sidebar-style.css'
import './assets/css/product-style.css'
import './assets/css/cartpage.css'
import './assets/css/appcombo.css'
import './assets/css/collection-style.css'

import { AuthProvider } from './client/context/AuthContext.jsx';
import { CartProvider } from './client/context/CartContext.jsx'; // Thêm CartProvider ở đây
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
)
