import React from 'react'
import { useTranslation } from 'react-i18next';
const Coupon = () => {
    const { t } = useTranslation();
    const handleCopy = (event) => {
        const copyText = "Sao chép";
        const copiedText = "Đã chép";
        const coupon = event.currentTarget.dataset.egaCoupon;
        const targetElement = event.currentTarget; // Lưu trữ tham chiếu đến phần tử hiện tại
        targetElement.innerHTML = `<span>${copiedText}</span>`;
        targetElement.classList.add('disabled');
        setTimeout(() => {
            targetElement.innerHTML = `<span>${copyText}</span>`;
            targetElement.classList.remove('disabled');
        }, 3000);
        navigator.clipboard.writeText(coupon);
    }
    return (
        <div>  <div className="row scroll justify-content-xl-center">
            <div className=" col-md-5 col-lg-6 col-9 col-xl-3">
                <div className="coupon_item no-icon">
                    <div className="coupon_body">
                        <div className="coupon_head">
                            <h3 className="coupon_title">{(t('INSERT CODE'))}: EGA50</h3>
                            <div className="coupon_desc">{(t('50% off for orders with a minimum value of 500K. Discount code maximum 200K'))} </div>
                        </div>
                        <div className="d-flex align-items-center flex-wrap justify-content-between">
                            <button className="btn btn-main btn-sm coupon_copy" data-ega-coupon="EGA50" onClick={handleCopy}>
                                <span>{(t('Copy'))}</span></button>
                            <span className="coupon_info_toggle" data-coupon="EGA50">
                            {(t('Conditions'))}
                            </span>
                            <div className="coupon_info">
                            {(t('Minimum order value 500K'))} <br />
                            {(t('Each customer can use a maximum of 1 time'))} </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className=" col-md-5 col-lg-6 col-9 col-xl-3">
                <div className="coupon_item no-icon">
                    <div className="coupon_body">
                        <div className="coupon_head">
                            <h3 className="coupon_title">{(t('INSERT CODE'))}: EGA15</h3>
                            <div className="coupon_desc">{(t('15% discount for orders with a minimum value of 500k. Discount code 100K max'))}</div>

                        </div>
                        <div className="d-flex align-items-center flex-wrap justify-content-between">
                            <button className="btn btn-main btn-sm coupon_copy" data-ega-coupon="EGA15" onClick={handleCopy}>
                                <span>{(t('Copy'))}</span></button>
                            <span className="coupon_info_toggle" data-coupon="EGA15">
                            {(t('Conditions'))}
                            </span>
                            <div className="coupon_info">
                                - Đơn hàng giá trị tối thiểu 250K. <br />
                                {(t('Each customer can use a maximum of 1 time'))} </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className=" col-md-5 col-lg-6 col-9 col-xl-3">
                <div className="coupon_item no-icon">
                    <div className="coupon_body">
                        <div className="coupon_head">
                            <h3 className="coupon_title">{(t('INSERT CODE'))}: EGA99K</h3>
                            <div className="coupon_desc">{(t('Enter code EGA99K for instant discount of 99K'))} </div>

                        </div>
                        <div className="d-flex align-items-center flex-wrap justify-content-between">
                            <button className="btn btn-main btn-sm coupon_copy" data-ega-coupon="EGA99K" onClick={handleCopy}>
                                <span>{(t('Copy'))}</span></button>
                            <span className="coupon_info_toggle" data-coupon="EGA99K">
                            {(t('Conditions'))}
                            </span>
                            <div className="coupon_info">
                                - Đơn hàng từ 1000K.<br />
                                {(t('Each customer can use a maximum of 1 time'))} </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className=" col-md-5 col-lg-6 col-9 col-xl-3">
                <div className="coupon_item no-icon">
                    <div className="coupon_body">
                        <div className="coupon_head">
                            <h3 className="coupon_title">{(t('INSERT CODE'))}: FREESHIP</h3>
                            <div className="coupon_desc">{(t('Enter code FREESHIP for free shipping'))} </div>

                        </div>
                        <div className="d-flex align-items-center flex-wrap justify-content-between">
                            <button className="btn btn-main btn-sm coupon_copy" data-ega-coupon="FREESHIP" onClick={handleCopy}>
                                <span>{(t('Copy'))}</span></button>
                            <span className="coupon_info_toggle" data-coupon="FREESHIP">
                            {(t('Conditions'))}
                            </span>
                            <div className="coupon_info">
                                - Đơn hàng từ 500K <br />
                                {(t('Each customer can use a maximum of 1 time'))} </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="coupon-modal" className="coupon-modal modal fade " role="dialog" style={{ display: 'none' }}>
                <div className="modal-dialog align-vertical">
                    <div className="modal-content">
                        <button type="button" className="close window-close" data-dismiss="modal" data-backdrop="false"
                            aria-label="Close" style={{ zIndex: '9' }}><span aria-hidden="true">×</span></button>
                        <div className="coupon-content"></div>
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default Coupon