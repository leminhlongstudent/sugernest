import React from 'react'
import { useEffect, useState} from 'react'
import { listProducts } from '../services/ProductService.js'
import Coupon from '../components/Coupon.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import ItemProductComponent from '../components/ItemProduct.jsx';


const ProductsPage = () => {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    useEffect(() => {
        listProducts(currentPage).then((response) => {
            setProducts(response.data.result.content);
            setTotalPages(response.data.result.totalPages);
        }).catch((error) => { console.log(error) });
    }, [currentPage]);
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    return (
        <div>
            <Breadcrumb />
            <div className='collection_banner mb-3 container text-center'>
                <a className="banner" href="/collections/all" title="Tất cả sản phẩm">
                    <picture>
                        <source media="(min-width: 768px)"
                            srcSet="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/collection_main_banner.jpg?1704435927037"
                            data-srcset="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/collection_main_banner.jpg?1704435927037" />
                        <source media="(max-width: 767px)"
                            srcSet="//bizweb.dktcdn.net/thumb/large/100/419/628/themes/897067/assets/collection_main_banner.jpg?1704435927037"
                            data-srcset="//bizweb.dktcdn.net/thumb/large/100/419/628/themes/897067/assets/collection_main_banner.jpg?1704435927037" />
                        <img className=' img-fluid'
                            src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/collection_main_banner.jpg?1704435927037"
                            loading="lazy" width="1200" height="200" alt="Tất cả sản phẩm" />
                    </picture>
                </a>
            </div>
            <div className="section mb-3">
                <div className='container'>
                    <link rel="preload" as='style' type="text/css"
                        href="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/coupon.css?1704435927037" />

                    <link rel="stylesheet" href="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/coupon.css?1704435927037" />
                    <div className="section_coupons">
                        <div className="container">
                            <Coupon />
                        </div>
                    </div>
                </div>
            </div>

            <section className="section wrap_background">
                <div className="container">
                    <div className="bg_collection section">
                        <div className="coll-head">
                            <h1 className="title_page collection-title mb-0 pb-3">
                                Tất cả sản phẩm </h1>
                            <div className="coll-sortby d-flex justify-content-between align-items-center">
                                <div className="sortPagiBar">
                                    <div className="sort-cate clearfix">
                                        <div id="sort-by" className="d-flex align-items-baseline">
                                            <label className="left">
                                                <span className=''>Sắp xếp: </span>
                                            </label>
                                            <select className="content_ul" >
                                                <option data-sort="name:asc" value="alpha-asc">Tên A &rarr; Z</option>
                                                <option data-sort="name:desc" value="alpha-desc">Tên Z &rarr; A</option>
                                                <option data-sort="price_min:asc" value="price-asc">Giá tăng dần</option>
                                                <option data-sort="price_min:desc" value="price-desc">Giá giảm dần</option>
                                                <option data-sort="created_on:desc" value="created-desc">Hàng mới</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div id="open-filters" className="btn open-filters d-lg-none d-block p-0">
                                    <i className="fa fa-filter"></i>
                                    <span>Lọc</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-lg-3 col-md-12 col-sm-12'>
                                <aside className=" scroll card py-2 dqdt-sidebar sidebar left-content">
                                    <div className="wrap_background_aside asidecollection">
                                        <div className="filter-content aside-filter">
                                            <div className="filter-container">
                                                <button className="btn d-block d-lg-none open-filters p-0">
                                                    <i className="fa fa-arrow-left mr-3 "> </i>
                                                    <b className="d-inline">
                                                        Tìm theo
                                                    </b>
                                                </button>
                                                <div className="filter-container__selected-filter" style={{ display: 'none' }}>
                                                    <div className="filter-container__selected-filter-header clearfix d-none">
                                                        <span className="filter-container__selected-filter-header-title"><i
                                                            className="fa fa-arrow-left hidden-sm-up"></i> Bạn chọn</span>
                                                        <a href=""
                                                            className="filter-container__clear-all">Bỏ hết <i
                                                                className="fa fa-angle-right"></i></a>
                                                    </div>
                                                </div>
                                                <aside className="aside-item filter-vendor">
                                                    <div className="aside-title">
                                                        <h2 className="title-head margin-top-0"><span>Hãng sản xuất</span></h2>
                                                    </div>
                                                    <div className="aside-content filter-group">
                                                        <ul>
                                                            <li className="filter-item filter-item--check-box filter-item--green">
                                                                <span>
                                                                    <label className="custom-checkbox" htmlFor="filter-abc">
                                                                        <input type="checkbox" id="filter-abc"
                                                                            data-group="PRODUCT_VENDOR"
                                                                            data-field="vendor.filter_key" data-text=""
                                                                            value="(&#34;ABC&#34;)" data-operator="OR" />
                                                                        <i className="fa"></i>
                                                                        ABC
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li className="filter-item filter-item--check-box filter-item--green">
                                                                <span>
                                                                    <label className="custom-checkbox" htmlFor="filter-ega-cake">
                                                                        <input type="checkbox" id="filter-ega-cake"
                                                                            data-group="PRODUCT_VENDOR"
                                                                            data-field="vendor.filter_key" data-text=""
                                                                            value="(&#34;Ega-Cake&#34;)" data-operator="OR" />
                                                                        <i className="fa"></i>
                                                                        Ega-Cake
                                                                    </label>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </aside>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div className="main_container collection col-lg-9 col-12 pl-lg-0">
                                <div className="filter-content aside-filter">
                                    <div className="filter-container">
                                        <div className="filter-container__selected-filter" style={{ display: 'none' }}>
                                            <div className="filter-container__selected-filter-list mb-2 ">
                                                <ul></ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="category-products products">
                                    <div className="products-view products-view-grid collection_reponsive list_hover_pro">
                                        <div className="row product-list content-col">
                                            {/* Render ProductSlider */}
                                            {
                                                products.map(product =>
                                                    <ItemProductComponent key={product.id} product={product} />
                                                )
                                            }
                                        </div>
                                        <div className="section pagenav">
                                            <nav className="clearfix relative nav_pagi w_100">
                                                <ul className="pagination clearfix float-right">
                                                    {currentPage !== 1 && (
                                                        <li className="page-item">
                                                            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}><i className="fa fa-angle-left"></i></button>
                                                        </li>
                                                    )}
                                                    {[...Array(totalPages)].map((_, i) => (
                                                        <li key={i} className={currentPage === i + 1 ? "active page-item disabled" : "page-item"}>
                                                            <button className="page-link" onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
                                                        </li>
                                                    ))}
                                                    {currentPage !== totalPages && (
                                                        <li className="page-item">
                                                            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}><i className="fa fa-angle-right" aria-hidden="true"></i></button>
                                                        </li>
                                                    )}
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ProductsPage