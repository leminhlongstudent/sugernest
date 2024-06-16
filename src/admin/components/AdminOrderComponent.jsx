import React, { useEffect, useState } from 'react';
import { Button, Space } from 'antd';
import { EyeOutlined, CheckOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';
import axios from 'axios';
import ReusableTableComponent from './ReusableTableComponent';
import EmlementButtonComponent from './EmlementButtonComponent';
import AppTitleComponent from './AppTitleComponent';
import { REST_API_BASE_URL } from '../service/AdminService';

const AdminOrderComponent = () => {
    const [data, setData] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        axios.get(`${REST_API_BASE_URL}/orders/admin-orders`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.data.code === 200) {
                    if (response.data.result.length > 0) {
                        setData(response.data.result.map(item => ({
                            key: item.id.toString(),
                            id: item.id,
                            accountName: item.accountEntity.fullName,
                            orderItems: item.orderItems,
                            quantity: item.orderItems.map(orderItem => orderItem.quantity).join(', '),
                            totalPrice: item.totalPrice,
                            status: item.status,
                            sizeColor: item.orderItems.map(orderItem => `${orderItem.productSize}/${orderItem.productColor}`).join(", "),
                        })));
                    }
                }
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, [token]);

    const showDetailModal = (key) => {
        // Implement the detail modal function
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: '5%',
            searchable: true,
            sortable: true,
        },
        {
            title: 'Khách hàng',
            dataIndex: 'accountName',
            key: 'accountName',
            searchable: true,
            sortable: true,
        },
        {
            title: 'Đơn hàng',
            dataIndex: 'orderItems',
            key: 'orderItems',
            render: orderItems => (
                <div>
                    {orderItems.map((item, index) => (
                        <div key={index}>{item.productEntity.nameProduct}</div>
                    ))}
                </div>
            ),
        },
        {
            title: 'Màu sắc/Kích thước',
            dataIndex: 'sizeColor',
            key: 'sizeColor',
            render: (text) => (
                <div>{text.split(', ').map((sizeColor, index) => (
                    <div key={index}>{sizeColor}</div>
                ))}</div>
            ),
        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (text) => (
                <div>{text.split(', ').map((sizeColor, index) => (
                    <div key={index}>{sizeColor}</div>
                ))}</div>
            ),
        },
        {
            title: 'Tổng tiền',
            dataIndex: 'totalPrice',
            key: 'totalPrice',
            render: (text) => (
                <div>{parseInt(text).toLocaleString('it-IT')}đ</div>
            ),
        },
        {
            title: 'Tình trạng',
            dataIndex: 'status',
            key: 'status',
            render: (text) => (<span className="badge bg-warning">{text}</span>),
        },

        {
            title: 'Tính năng',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button
                        type="default"
                        className='btn btn-secondary btn-sm detail'
                        icon={<EyeOutlined />}
                        onClick={() => showDetailModal(record.key)}
                    >
                        Chi tiết
                    </Button>
                    <Button
                        type="default"
                        className='btn btn-success btn-sm'
                        icon={<CheckOutlined />}
                        onClick={() => showDetailModal(record.key)}
                    >
                        Duyệt
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <main className="app-content">
            <AppTitleComponent name={'Quản lý đơn hàng'} />
            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <div className="tile-body">
                            <EmlementButtonComponent />
                            <ReusableTableComponent columns={columns} data={data} />
                            {/* <DetailModalOrder
                                order={selectedOrder}
                                visible={isDetailVisible}
                                onCancel={handleDetailCancel}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AdminOrderComponent;
