import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useAuth } from '../context/AuthContext.jsx';
import { useCart } from '../context/CartContext.jsx';
import './layout.css'
import Sidebar from './Sidebar.jsx'
import { IMAGE_BASE_URL, REST_API_BASE_URL } from '../services/ProductService.js';

const Header = () => {
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const navigator = useNavigate();
  const { user, logout, token } = useAuth();
  const { updateCart } = useCart();
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    if (user && user.id) {
      axios.get(`${REST_API_BASE_URL}/carts/total-items/${user.id}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
        .then(response => {
          setCartTotal(response.data);
          updateCart(response.data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } else {
      setCartTotal(0);
    }
  }, [user, updateCart, token]);


  useEffect(() => {
    if (!token) {
      return;
    }
    axios.get(`${REST_API_BASE_URL}/carts/my-cart`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(response => {
        setCart(response.data.result);
        let reversedCartItems = response.data.result.cartItems.reverse();
        setCartItems(reversedCartItems);
      })
      .catch(error => {
        console.error("There was an error with the Axios operation:", error);
      });
  }, [token, updateCart]);

  const deleteCartItem = (cartItemId) => {
    axios.delete(`${REST_API_BASE_URL}/carts/remove-item/${cartItemId}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(response => {
        updateCart(response.data.result);
      })
      .catch(error => {
        console.error("There was an error removing the cart item:", error);
      });
  };
  function getHomePage() {
    navigator(`/`);
  }
  function getCart() {
    navigator(`/cart`);
  }
  const handleClick = () => {
    if (user) {
      navigator(`/profile`);
    } else {
      navigator(`/login`);
    }
  };
  function getProduct(id) {
    navigator(`/products/${id}`);
  }
  function getOrders() {
    navigator(`/orders`);
  }

  return (
    <div>
      <div className="top-banner position-relative" style={{ background: '#a50a06' }}>
        <div className="container text-center px-0">
          <a className="position-relative  d-sm-none d-block" style={{ maxHeight: '78px', height: 'calc( 78 * 100vw /828 )' }} href="/collections/all" title="Khuyến mãi">
            <img className="img-fluid position-absolute " src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/top_banner_mb.jpg?1704435927037" style={{ left: 0 }} alt="Khuyến mãi" width="828" height="78" />
          </a>
          <a className="position-relative d-sm-block d-none " style={{ maxHeight: '44px', height: 'calc(44 * 100vw /1200)' }} href="/collections/all" title="Khuyến mãi">
            <picture>
              <source media="(max-width: 480px)" srcSet="//bizweb.dktcdn.net/thumb/large/100/419/628/themes/897067/assets/top_banner.jpg?1704435927037" />
              <img className="img-fluid position-absolute" src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/top_banner.jpg?1704435927037" style={{ left: 0 }} alt="Khuyến mãi" width="1200" height="44" />
            </picture>
          </a>
          <button type="button" className="close " aria-label="Close">✕</button>
        </div>
      </div>
      <header className="header header_menu">
        <div className="mid-header wid_100 d-flex align-items-center">
          <div className="container">
            <div className="row align-items-center position-relative">
              <div className=' col-12 header-main'>
                <div className='row align-items-center'>
                  <div className="col-4 d-lg-none menu-mobile">
                    <div className="toggle-nav btn menu-bar mr-4 ml-0 p-0 d-lg-none d-flex text-white">
                      <span className="bar"></span>
                      <span className="bar"></span>
                      <span className="bar"></span>
                    </div>
                  </div>
                  <div className='col-lg-3 col-4 logo-col'>
                    {location.pathname !== '/' && (
                      <div className="header-left">
                        <div className="subheader">
                          <div className="toogle-nav-wrapper">
                            <div className="icon-bar btn menu-bar mr-2 p-0 d-inline-flex">
                              <span className="bar" />
                              <span className="bar" />
                              <span className="bar" />
                            </div>
                            <div className="toogle-nav-focus-area"></div>
                            <div className="menu-wrapper" style={{ top: 'calc(100%)' }}>
                              <Sidebar />
                            </div>
                          </div>
                          <div className="sticky-overlay" />
                        </div>
                      </div>
                    )}
                    <a onClick={getHomePage} className="logo-wrapper" title='EGA Cake'>
                      <img loading="lazy" className="img-fluid"
                        src="https://bizweb.dktcdn.net/100/419/628/themes/897067/assets/logo.png?1704435927037"
                        alt="logo EGA Cake" width="187" height="50" />
                    </a>
                  </div>
                  <div className="col-lg-5 col-12 header-center px-lg-0" id="search-header">
                    <form action="/search" method="get" className="input-group search-bar custom-input-group "
                      role="search">
                      <input type="text" name="query" autoComplete="off"
                        className="input-group-field auto-search form-control " required=""
                        data-placeholder="Bạn cần tìm gì..; Nhập tên sản phẩm.." />
                      <input type="hidden" name="type" />
                      <span className="input-group-btn btn-action">
                        <button type="submit" aria-label="search"
                          className="btn text-white icon-fallback-text h-100">
                          <i className="fa fa-search" aria-hidden="true"></i></button>
                      </span>
                    </form>
                    <div className="search-overlay">
                    </div>
                  </div>
                  <div className="col-4 col-lg-4 menu-cart">
                    <ul
                      className="header-right mb-0 list-unstyled d-flex align-items-center justify-content-end">
                      <li className='media d-lg-block d-none '>
                        <a onClick={getOrders} className='d-block text-center' title="Đơn hàng">
                          <img loading="lazy"
                            src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/order-icon.png?1704435927037"
                            width="24" height="24" className="align-self-center" alt="order-icon" />
                          <span className='d-none d-xl-block mt-1'>
                            Đơn hàng
                          </span>
                        </a>
                      </li>
                      <li className='media d-lg-block d-none '>
                        <a onClick={() => navigator(`/store-address`)} className='d-block text-center'
                          title="Hệ thống cửa hàng">
                          <img loading="lazy"
                            src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/address-icon.png?1704435927037"
                            width="24" height="24" className="align-self-center" alt="phone-icon" />
                          <span className='d-none d-xl-block mt-1'>
                            Cửa hàng
                          </span>
                        </a>
                      </li>
                      <li className='media d-lg-block d-none  '>
                        <div className="account-wrapper">
                          <a
                            onClick={handleClick}
                            className='text-center d-block'
                            title="Tài khoản"
                          >
                            <img
                              loading="lazy"
                              src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/account-icon.png?1704435927037"
                              width="24"
                              height="24"
                              alt="account_icon"
                              className="align-self-center"
                            />
                            <span className='d-none d-xl-block mt-1'>{user ? user.fullName : 'Tài khoản'}</span>
                          </a>
                          {user && (
                            <button onClick={logout} className="logout-button">Đăng xuất
                            </button>
                          )}
                        </div>
                      </li>
                      <li className="cartgroup">
                        <div className="mini-cart text-xs-center">
                          <a className="img_hover_cart d-block d-xl-flex flex-column align-items-center"
                            onClick={getCart} title="Giỏ hàng">
                            <div className="cart-icon">
                              <img loading="lazy"
                                src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/cart-icon.png?1704435927037"
                                width="24" height="24" alt="cart_icon" />
                              <span className="count_item count_item_pr">{cartTotal}</span>
                            </div>
                            <span className='d-xl-block d-none mt-1'>Giỏ hàng</span>
                          </a>
                          <div className="top-cart-content card ">
                            {cartItems.length > 0 ? (
                              <ul id="cart-sidebar" className="mini-products-list count_li list-unstyled">
                                <ul className="list-item-cart">
                                  {cartItems.map((item, index) => (
                                    <li key={index}>
                                      <div className="border_list">
                                        <div className="image_drop">
                                          <a className="product-image pos-relative embed-responsive embed-responsive-1by1" onClick={() => getProduct(item.productEntity.id)} title={item.productEntity.nameProduct}>
                                            <img alt="Heavy Duty Paper Car" src={`${IMAGE_BASE_URL}` + item.productEntity.imageProductEntity[0].image} width="100" />
                                          </a>
                                        </div>
                                        <div className="detail-item">
                                          <div className="product-details">
                                            <span title="Xóa" onClick={() => deleteCartItem(item.id)} className="remove-item-cart fa fa-times"></span>
                                            <p className="product-name"> <a href="/heavy-duty-paper-car" title="Heavy Duty Paper Car">{item.productEntity.nameProduct}</a></p>
                                          </div>
                                          <span className="variant-title">{item.productSize} / {item.productColor}</span>
                                          <div className="product-details-bottom">
                                            <span className="price">{parseInt(item.productEntity.sizeColorProductsEntity[0].discountPrice).toLocaleString('it-IT')}₫</span>
                                            <span className="quanlity"> x {item.quantity}</span>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                                <div className="pd">
                                  <div className="top-subtotal">Tổng tiền tạm tính: <span className="price price_big">{parseInt(cart.totalPrice).toLocaleString('it-IT')}₫</span></div>
                                </div>
                                <div className="pd right_ct"><a onClick={getCart} className="btn btn-white"><span>Tiến hành thanh toán</span></a></div>
                              </ul>
                            ) : (
                              <div className="no-item"><p>Không có sản phẩm nào.</p></div>
                            )}
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="sub-header d-lg-block d-none" style={{ '--header-background': '#2d2d2d', '--header-color': '#ffffff' }}>
        <div className="container">
          <div className="navigation--horizontal d-md-flex align-items-center d-none">
            <div className=" navigation-horizontal-wrapper ">
              <nav>
                <ul className="navigation-horizontal list-group list-group-flush scroll">
                  <li className="menu-item list-group-item">
                    <a onClick={getHomePage} className="menu-item__link" title="Trang chủ">
                      <span> Trang chủ</span>
                    </a>
                  </li>
                  <li className="menu-item list-group-item">
                    <a onClick={() => navigator(`/introduction`)} className="menu-item__link" title="Giới thiệu">
                      <span> Giới thiệu</span>
                    </a>
                  </li>
                  <li className="menu-item list-group-item">
                    <a onClick={() => navigator(`/products`)} className="menu-item__link" title="Quà tặng 08/03">
                      <span> Quà tặng 08/03</span>
                    </a>

                  </li>
                  <li className="menu-item list-group-item">
                    <a onClick={() => navigator(`/products`)} className="menu-item__link" title="Chương trình khuyến mãi">
                      <span> Chương trình khuyến mãi</span>
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </a>
                    <div className="submenu scroll  default ">
                      <ul className="submenu__list">
                        <li className="submenu__item submenu__item--main">
                          <a className="link" onClick={() => navigator(`/products`)}
                            title="Landing Page - Flash Sales">Landing Page - Flash Sales</a>
                        </li>
                        <li className="submenu__item submenu__item--main">
                          <a className="link" onClick={() => navigator(`/products`)}
                            title="Landing Page - Black Friday">Landing Page - Black Friday</a>
                        </li>
                        <li className="submenu__item submenu__item--main">
                          <a className="link" onClick={() => navigator(`/products`)}
                            title="Landing Page - XMas">Landing Page - XMas</a>
                        </li>
                        <li className="submenu__item submenu__item--main">
                          <a className="link" onClick={() => navigator(`/products`)}
                            title="Landing Page - FnB">Landing Page - FnB</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item list-group-item">
                    <a onClick={() => navigator(`/products`)} className="menu-item__link" title="Bánh ngon mỗi ngày">
                      <span> Bánh ngon mỗi ngày</span>
                    </a>
                  </li>
                  <li className="menu-item list-group-item">
                    <a className="menu-item__link" title="Công thức làm bánh">
                      <span> Công thức làm bánh</span>
                    </a>
                  </li>
                  <li className="menu-item list-group-item">
                    <a className="menu-item__link" title="Chuyên mục làm bánh">
                      <span> Chuyên mục làm bánh</span>
                    </a>
                  </li>
                  <li className="menu-item list-group-item">
                    <a onClick={() => navigator(`/contact`)} className="menu-item__link" title="Liên hệ">
                      <span> Liên hệ</span>
                    </a>
                  </li>
                  <li className="menu-item list-group-item">
                    <a className="menu-item__link" title="Góp ý / Khiếu nại">
                      <span> Góp ý chúng tôi </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header