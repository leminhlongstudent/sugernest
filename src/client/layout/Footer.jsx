import React, { useEffect, useState, useRef } from 'react'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { t } = useTranslation();

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <div className='top-footer'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-12 col-lg-8 col-xl-7 order-lg-1'>
              <div className='subscribe align-items-center'>
                <img src='//bizweb.dktcdn.net/100/419/628/themes/897067/assets/email-icon.svg?1704435927037'
                  width='32' height='32' loading='lazy' alt='email' />
                <h6 className="m-0">
                  {t('Do you want')}
                </h6>
                <div className="form_register" style={{ flex: '1 1 100%' }}>
                  <form id="mc-form" className="newsletter-form custom-input-group" data-toggle="validator">
                    <input className="form-control input-group-field  " aria-label="Địa chỉ Email" type="email"
                      placeholder={t('Enter your email to receive promotions')} name="EMAIL" required autoComplete="off" />
                    <div className="input-group-btn btn-action">
                      <button className="px-3 py-2 h-100 btn button_subscribe subscribe"
                        style={{ lineHeight: '24px' }}
                        type="submit" aria-label="Đăng ký nhận tin"
                        name="subscribe">{t('Register')}</button>
                    </div>
                  </form>
                  <div className="mailchimp-alerts ">
                    <div className="mailchimp-submitting"></div>
                    <div className="mailchimp-success"></div>
                    <div className="mailchimp-error"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-4 col-xl-5 mt-3 mt-lg-0'>
              <div className="social-footer">
                <ul
                  className="follow_option mb-0 mt-2 mt-sm-0 d-flex flex-wrap align-items-center p-0 list-unstyled">
                  <li>
                    <a className="facebook link" target="_blank"
                      title="Theo dõi Facebook EGA Cake">
                      <img src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/facebook.png?1704435927037"
                        loading="lazy" width="36" height="36" alt="facebook" />
                    </a>
                  </li>

                  <li>
                    <a className="instgram link" target="_blank"
                      title="Theo dõi instgram EGA Cake">
                      <img src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/instagram.png?1704435927037"
                        loading="lazy" width="36" height="36" alt="instgram" />
                    </a>
                  </li>

                  <li>
                    <a className="youtube link" target="_blank"
                      title="Theo dõi youtube EGA Cake">
                      <img src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/youtube.png?1704435927037"
                        loading="lazy" width="36" height="36" alt="youtube" />
                    </a>
                  </li>

                  <li>
                    <a className="tiktok link" target="_blank"
                      title="Theo dõi tiktok EGA Cake">
                      <img src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/tiktok.png?1704435927037"
                        loading="lazy" width="36" height="36" alt="tiktok" />
                    </a>
                  </li>

                  <li>
                    <a className="zalo link" target="_blank"
                      title="Theo dõi zalo EGA Cake">
                      <img src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/zalo.png?1704435927037"
                        loading="lazy" width="36" height="36" alt="zalo" />
                    </a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer bg-white">
        <div className="mid-footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-6 col-lg-3 footer-click footer-1">
                <a className="logo-wrapper mb-3 d-block ">
                  <img loading="lazy"
                    src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/logo-footer.png?1704435927037"
                    alt="logo EGA Cake" width="164" height="50" />
                </a>
                <p>

                </p>
                <div className="single-contact">
                  <div className="content"><strong>{t('Address')}: </strong>
                    <span>150/8 Nguyễn Duy Cung, Phường 12, TP Hồ Chí Minh </span>
                  </div>
                </div>
                <div className="single-contact">
                  <div className="content">
                    <strong>{t('Phone')}: </strong>
                    <a className="link" title="19006750" href="tel:19006750">19006750</a>
                  </div>
                </div>
                <div className="single-contact">
                  <i className="fa fa-envelope"></i>
                  <div className="content">
                    <strong>Email: </strong><a title="leminhlongit@gmail.com" className="link"
                      href="mailto:leminhlongit@gmail.com">leminhlongit@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6 col-lg-3 footer-click">
                <h4 className="title-menu clicked">
                  {t('Customer support')} <i className="fa fa-angle-down d-md-none d-inline-block"></i>
                </h4>
                <ul className="list-menu toggle-mn">
                  <li className="li_menu">
                    <a className="link" title="Về chúng tôi">{t('About us')}</a>
                  </li>
                  <li className="li_menu">
                    <a className="link" title="Hệ thống cửa hàng">{t('Shop system')}</a>
                  </li>
                  <li className="li_menu">
                    <a className="link" title="Gọi điện đặt hàng">{t('Call to order')}</a>
                  </li>
                  <li className="li_menu">
                    <a className="link" title="Xuất hoá đơn điện tử">{t('Sales policy')}</a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-md-6 col-lg-3 footer-click">
                <h4 className="title-menu clicked">
                  {t('Export electronic invoices')} <i className="fa fa-angle-down d-md-none d-inline-block"></i>
                </h4>
                <ul className="list-menu toggle-mn">
                  <li className="li_menu">
                    <a className="link" title="Chính sách bán hàng">{t('Return policy')}</a>
                  </li>
                  <li className="li_menu">
                    <a className="link" title="Chính sách đổi trả">{t('Delivery policy')}</a>
                  </li>
                  <li className="li_menu">
                    <a className="link" title="Chính sách giao hàng">{t('Support switchboard')}</a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-md-6 col-lg-3">
                <h4 className="title-menu">
                  {t('Export electronic invoices')}
                </h4>
                <p>
                  <span>{t('Call to buy')}:</span>
                  <a className='text-primary font-weight-bold' href='tel:19006750'>19006750</a>
                  <span>(8h-20h)</span>
                </p>
                <p>
                  <span>{t('Call for warranty')}:</span>
                  <a className='text-primary font-weight-bold' href='tel:19006750 '>19006750 </a>
                  <span>(8h-20h)</span>
                </p>
                <p>
                  <span>{t('Call for complaints')}:</span>
                  <a className='text-primary font-weight-bold' href='tel:19006750 '>19006750 </a>
                  <span> (8h-20h)</span>
                </p>

                <span className="title-menu">
                  {t('Payment methods')}
                </span>
                <div className="trustbadge">
                  <a target="_blank" title="Phương thức thanh toán">
                    <img className=" img-fluid" loading="lazy"
                      src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/footer_trustbadge.jpg?1704435927037"
                      alt="" width="246" height="53" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-footer-bottom copyright clearfix py-2">
          <div className="container">
            <div className="row">
              <div id="copyright" className=" col-xl-4 col-xs-12 fot_copyright">

                <span className="wsp">
                  © {t('Copyright belong to')} <a rel="nofollow" target="_blank">SugarNest </a>
                  | {t('Provided by')} <a
                    rel="nofollow" title="Sapo" target="_blank">SugarNest</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '50px',
            right: '50px',
            zIndex: 1000,
            backgroundColor: '#a50a06',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            cursor: 'pointer',
          }}
          aria-label="Scroll to top"
        >
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </button>
      )}
    </div>
  )
}

export default Footer