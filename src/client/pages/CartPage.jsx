import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useAuth } from '../context/AuthContext.jsx';
import { useCart } from '../context/CartContext.jsx';


const CartPage = () => {
   const [cart, setCart] = useState([]);
   const [cartItems, setCartItems] = useState([]);
   const { token } = useAuth();
   const { updateCart } = useCart();
   const navigate = useNavigate();
   function getProduct(id) {
      navigate(`/sugernest/products/${id}`);
   }
   function getLoginPage() {
      navigate('/sugernest/login');
   }
   function getHomePage() {
      navigate('/sugernest/');
   }

   useEffect(() => {
      if (!token) {
         getLoginPage();
         return;
      }
      axios.get('http://localhost:8080/sugarnest/v0.1/carts/my-cart', {
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
      axios.delete(`http://localhost:8080/sugarnest/v0.1/carts/remove-item/${cartItemId}`, {
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
   const increaseQuantity = (cartItemId) => {
      axios.put(`http://localhost:8080/sugarnest/v0.1/carts/increase-quantity/${cartItemId}`, {}, {
         headers: {
            "Authorization": `Bearer ${token}`
         }
      })
         .then(response => {
            updateCart(response.data.result);
         })
         .catch(error => {
            console.error("There was an error increasing the item quantity:", error);
         });
   };

   const decreaseQuantity = (cartItemId) => {
      axios.put(`http://localhost:8080/sugarnest/v0.1/carts/decrease-quantity/${cartItemId}`, {}, {
         headers: {
            "Authorization": `Bearer ${token}`
         }
      })
         .then(response => {
            updateCart(response.data.result);
         })
         .catch(error => {
            console.error("There was an error decreasing the item quantity:", error);
         });
   };
   return (
      <section className="main-cart-page main-container col1-layout mobile-tab active" id="cart-tab" data-title="Giỏ hàng">
         <div className="wrap_background_aside padding-top-15 margin-bottom-40 padding-left-0 padding-right-0 cartmbstyle">
            <div className="cart-mobile container card border-0 py-2">
               {cartItems.length > 0 ? (
                  <form action="/cart" method="post" className="margin-bottom-0">
                     <div className="header-cart">
                        <div className=" title_cart_mobile heading-bar">
                           <h1 className="heading-bar__title">Giỏ hàng</h1>
                        </div>
                     </div>
                     <div className="header-cart-content">
                        <div className="cart_page_mobile content-product-list">
                           {
                              cartItems.map((item, index) => (
                                 <div key={index} className="item-product">
                                    <div className="text-center">
                                       <a onClick={() => deleteCartItem(item.id)} className="remove-itemx remove-item-cart " title="Xóa">
                                          <svg className="icon" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <g clipPath="url(#clip0)">
                                                <path d="M0.620965 12C0.462896 12 0.304826 11.9399 0.184729 11.8189C-0.0563681 11.5778 -0.0563681 11.1869 0.184729 10.9458L10.9497 0.180823C11.1908 -0.0602744 11.5817 -0.0602744 11.8228 0.180823C12.0639 0.421921 12.0639 0.8128 11.8228 1.05405L1.05795 11.8189C0.936954 11.9392 0.778884 12 0.620965 12Z" fill="#8C9196"></path>
                                                <path d="M11.3867 12C11.2287 12 11.0707 11.9399 10.9505 11.8189L0.184729 1.05405C-0.0563681 0.8128 -0.0563681 0.421921 0.184729 0.180823C0.425827 -0.0602744 0.816706 -0.0602744 1.05795 0.180823L11.8228 10.9458C12.0639 11.1869 12.0639 11.5778 11.8228 11.8189C11.7018 11.9392 11.5439 12 11.3867 12Z" fill="#8C9196"></path>
                                             </g>
                                          </svg>
                                       </a>
                                    </div>
                                    <div className="item-product-cart-mobile">
                                       <a onClick={() => getProduct(item.productEntity.id)} className="product-images1  pos-relative embed-responsive embed-responsive-1by1" title={item.productEntity.nameProduct}>
                                          <img className="img-fluid" src={item.productEntity.imageProducts[0].image} alt={item.productEntity.nameProduct} />
                                       </a>
                                    </div>
                                    <div className="product-cart-infor">
                                       <div className="title-product-cart-mobile">
                                          <h3 className="product-name"> <a onClick={() => getProduct(item.productEntity.id)} className="text2line" title="Bánh blue sky cupcakes">
                                             {item.productEntity.nameProduct}</a>
                                          </h3>
                                          <span className="variant-title">{item.productSize} / {item.productColor}</span>
                                       </div>
                                       <div className="cart-price">
                                          <span className="product-price price">{parseInt(item.price).toLocaleString('it-IT')}₫</span>
                                       </div>
                                       <div className="custom input_number_product custom-btn-number">
                                          <button className="btn btn_num num_1 button button_qty" type="button" onClick={() => decreaseQuantity(item.id)} disabled={item.quantity <= 1}>
                                             <i className="fa fa-minus" aria-hidden="true"></i>
                                          </button>
                                          <input
                                             required
                                             type="text"
                                             name="quantity"
                                             value={item.quantity}
                                             maxLength="3"
                                             className="form-control prd_quantity pd-qtym"
                                             readOnly
                                          />
                                          <button className="btn btn_num num_2 button button_qty" type="button" onClick={() => increaseQuantity(item.id)}>
                                             <i className="fa fa-plus" aria-hidden="true"></i>
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              ))
                           }
                           <div className="cart-note">
                              <label htmlFor="note" className="note-label">Ghi chú đơn hàng</label>
                              <textarea id="note" name="note" rows="8"></textarea>
                           </div>
                        </div>
                        <div className="header-cart-price">
                           <div className="timedeli-modal">
                              <div className="timedeli-modal-content">
                                 <button type="button" className="close window-close d-sm-none" aria-label="Close"><span aria-hidden="true">×</span></button>
                                 <div className="timedeli d-sm-block">
                                    <div className="ega-delivery__wrapper left">
                                       <p className="ega-delivery__title">HẸN GIỜ NHẬN HÀNG</p>
                                       <div className="ega-delivery ega-form__group">
                                          <label>
                                             Ngày nhận hàng
                                             <input id="datepicker" className="ega-delivery__date ega-form__control" type="date" />
                                          </label>
                                          Thời gian nhận hàng
                                          <select className="ega-delivery__date ega-form__control">
                                             <option value="">Chọn thời gian</option>
                                             <option value="08h00 - 12h00">08h00 - 12h00</option>
                                             <option value="14h00 - 18h00">14h00 - 18h00</option>
                                             <option value="19h00 - 21h00">19h00 - 21h00</option>
                                          </select>
                                       </div>
                                       <div className="ega-delivery__note"></div>
                                    </div>
                                 </div>
                                 <div className="timedeli-cta">
                                    <button className="btn btn-block timedeli-btn  d-sm-none" type="button">
                                       <span>Xong</span>
                                    </button>
                                 </div>
                              </div>
                              <div className="timedeli-overaly">
                              </div>
                           </div>
                           <div className="title-cart d-none d-sm-flex ">
                              <h3 className="text-xs-left">TỔNG CỘNG</h3>
                              <span className="text-xs-right  totals_price_mobile">{parseInt(cart.totalPrice).toLocaleString('it-IT')}₫</span>
                              <i className="text-xs-right price_vat ">(Đã bao gồm VAT nếu có)</i>
                           </div>
                           <div className="coupon-toggle d-flex justify-content-between align-items-center">
                              <div>
                                 <img className="mr-1" src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/coupon-icon.png?1704435927037" alt="delivery" />
                                 <span>Mã giảm giá</span>
                              </div>
                              <div className="coupon-toggle-btn">
                                 <span className="mr-1">Chọn mã giảm giá</span>
                              </div>
                           </div>
                           <div className="checkout d-none d-sm-block">
                              <button className="btn btn-block btn-proceed-checkout-mobile disabled" title="Tiến hành thanh toán" type="button">
                                 <span>Thanh Toán</span>
                              </button>
                           </div>
                           <div className="cart-trustbadge mt-3">
                              <span className="title-menu">
                                 Phương thức thanh toán
                              </span>
                              <div className="trustbadge">
                                 <a href="/public" target="_blank" title="Phương thức thanh toán">
                                    <img className=" img-fluid" src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/footer_trustbadge.jpg?1704435927037" alt="" width="246" height="53" />
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </form>
               ) : (
                  <div className="cart-empty container card border-0 py-2 ">
                     <div className="alert green-alert section" role="alert">
                        <div className="title-cart text-center">
                           <h1 className="d-none">Giỏ hàng</h1>
                           <div>
                              <img src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/cart_empty_background.png?1704435927037" className="img-fluid" width="298" height="152"/>
                           </div>
                           <h3>
                              "Hổng” có gì trong giỏ hết
                           </h3>
                           <p>	Về trang cửa hàng để chọn mua sản phẩm bạn nhé!!</p>
                           <a onClick={getHomePage} title="Mua sắm ngay" className="btn btn-main">Mua sắm ngay</a>
                        </div>
                     </div>
                  </div>
               )}
            </div>
            <div className="cart-empty container card border-0 py-2 " style={{ display: 'none' }}>
               <div className="alert green-alert section" role="alert">
                  <div className="title-cart text-center">
                     <h1 className="d-none">Giỏ hàng</h1>
                     <div>
                        <img src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/cart_empty_background.png?1704435927037" className="img-fluid" width="298" height="152" />
                     </div>
                     <h3>
                        Hổng có gì trong giỏ hết
                     </h3>
                     <p>	Về trang cửa hàng để chọn mua sản phẩm bạn nhé!!</p>
                     <a href="/public" title="Mua sắm ngay" className="btn btn-main">Mua sắm ngay</a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
export default CartPage