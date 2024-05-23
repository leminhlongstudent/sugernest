import React from 'react'

const Breadcrumb = () => {
    return (
        <div> <section className="bread-crumb mb-0">
            <span className="crumb-border"></span>
            <div className="container ">
                <div className="row">
                    <div className="col-12 a-left">
                        <ul className="breadcrumb m-0 px-0 py-2">
                            <li className="home">
                                <a href="/products" className='link'><span>Trang chủ</span></a>
                                <span className="mr_lr">&nbsp;/&nbsp;</span>
                            </li>
                            <li>
                                <strong><span> Tất cả sản phẩm</span></strong></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section></div>
    )
}

export default Breadcrumb