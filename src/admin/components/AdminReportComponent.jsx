import React from 'react'
import AppTitleComponent from './AppTitleComponent'
import MonthlyDataChart from '../util/MonthlyDataChart'
import SalesStatisticsChart from '../util/SalesStatisticsChart'


const AdminReportComponent = () => {
    return (
        <main className="app-content">
            <AppTitleComponent />
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="widget-small primary coloured-icon">
                        <i className="icon  bx bxs-user fa-3x" />
                        <div className="info">
                            <h4>Tổng Nhân viên</h4>
                            <p>
                                <b>26 nhân viên</b>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="widget-small info coloured-icon">
                        <i className="icon bx bxs-purchase-tag-alt fa-3x" />
                        <div className="info">
                            <h4>Tổng sản phẩm</h4>
                            <p>
                                <b>8580 sản phẩm</b>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="widget-small warning coloured-icon">
                        <i className="icon fa-3x bx bxs-shopping-bag-alt" />
                        <div className="info">
                            <h4>Tổng đơn hàng</h4>
                            <p>
                                <b>457 đơn hàng</b>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="widget-small danger coloured-icon">
                        <i className="icon fa-3x bx bxs-info-circle" />
                        <div className="info">
                            <h4>Bị cấm</h4>
                            <p>
                                <b>4 nhân viên</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="widget-small primary coloured-icon">
                        <i className="icon fa-3x bx bxs-chart" />
                        <div className="info">
                            <h4>Tổng thu nhập</h4>
                            <p>
                                <b>104.890.000 đ</b>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="widget-small info coloured-icon">
                        <i className="icon fa-3x bx bxs-user-badge" />
                        <div className="info">
                            <h4>Nhân viên mới</h4>
                            <p>
                                <b>3 nhân viên</b>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="widget-small warning coloured-icon">
                        <i className="icon fa-3x bx bxs-tag-x" />
                        <div className="info">
                            <h4>Hết hàng</h4>
                            <p>
                                <b>1 sản phẩm</b>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="widget-small danger coloured-icon">
                        <i className="icon fa-3x bx bxs-receipt" />
                        <div className="info">
                            <h4>Đơn hàng hủy</h4>
                            <p>
                                <b>2 đơn hàng</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <div>
                            <h3 className="tile-title">SẢN PHẨM BÁN CHẠY</h3>
                        </div>
                        <div className="tile-body">
                            <table className="table table-hover table-bordered responsive-table" id="sampleTable">
                                <thead>
                                    <tr>
                                        <th>Mã sản phẩm</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Giá tiền</th>
                                        <th>Danh mục</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>71304041</td>
                                        <td>Bàn ăn mở rộng Vegas</td>
                                        <td>21.550.000 đ</td>
                                        <td>Bàn thông minh</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <div>
                            <h3 className="tile-title">TỔNG ĐƠN HÀNG</h3>
                        </div>
                        <div className="tile-body">
                            <table className="table table-hover table-bordered responsive-table" id="sampleTable">
                                <thead>
                                    <tr>
                                        <th>ID đơn hàng</th>
                                        <th>Khách hàng</th>
                                        <th>Đơn hàng</th>
                                        <th>Số lượng</th>
                                        <th>Tổng tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>QY8723</td>
                                        <td>Ngô Thái An</td>
                                        <td>Giường ngủ Kara 1.6x2m</td>
                                        <td>1 sản phẩm</td>
                                        <td>14.500.000 đ</td>
                                    </tr>
                                    <tr>
                                        <th colSpan={4}>Tổng cộng:</th>
                                        <td>104.890.000 đ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <div>
                            <h3 className="tile-title">SẢN PHẨM ĐÃ HẾT</h3>
                        </div>
                        <div className="tile-body">
                            <table className="table table-hover table-bordered responsive-table" id="sampleTable">
                                <thead>
                                    <tr>
                                        <th>Mã sản phẩm</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Ảnh</th>
                                        <th>Số lượng</th>
                                        <th>Tình trạng</th>
                                        <th>Giá tiền</th>
                                        <th>Danh mục</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>83826226</td>
                                        <td>Tủ ly - tủ bát</td>
                                        <td>
                                            <img src="/img-sanpham/tu.jpg" alt="" width="100px;" />
                                        </td>
                                        <td>0</td>
                                        <td>
                                            <span className="badge bg-danger">Hết hàng</span>
                                        </td>
                                        <td>2.450.000 đ</td>
                                        <td>Tủ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <div>
                            <h3 className="tile-title">NHÂN VIÊN MỚI</h3>
                        </div>
                        <div className="tile-body">
                            <table className="table table-hover table-bordered responsive-table" id="sampleTable">
                                <thead>
                                    <tr>
                                        <th>Họ và tên</th>
                                        <th>Địa chỉ</th>
                                        <th>Ngày sinh</th>
                                        <th>Giới tính</th>
                                        <th>SĐT</th>
                                        <th>Chức vụ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Nguyễn Đặng Trọng Nhân</td>
                                        <td>59C Nguyễn Đình Chiểu, Quận 3, Hồ Chí Minh </td>
                                        <td>23/07/1996</td>
                                        <td>Nam</td>
                                        <td>0846881155</td>
                                        <td>Dịch vụ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col-md-12 col-lg-6">
                    <MonthlyDataChart />
                </div>
                <div className="col-md-12 col-lg-6">
                    <SalesStatisticsChart />
                </div>
            </div>
        </main>
    )
}


export default AdminReportComponent