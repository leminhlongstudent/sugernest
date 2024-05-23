import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/sugarnest/v0.1";

export const listProducts = (page) => axios.get(`${REST_API_BASE_URL}/products?page=${page}`);
export const getProduct = (id) => axios.get(`${REST_API_BASE_URL}/products/${id}`);
export const getProductByCategory = (category, limit) => axios.get(`${REST_API_BASE_URL}/products/category/${category}/limit/${limit}`);
export const listCategories = () => axios.get(`${REST_API_BASE_URL}/categories`);
export const addCartItems = (cartItems) => axios.post(`${REST_API_BASE_URL}/carts/add-item`, cartItems);
export const getCartByAccountId = (accountId) => axios.get(`${REST_API_BASE_URL}/carts/${accountId}`);
export const loginToken = (accountName, password) => axios.post(`${REST_API_BASE_URL}/auth/login`, { accountName, password });
export const getTotalItemsInCart = (accountId) => axios.get(`${REST_API_BASE_URL}/carts/total-items/${accountId}`);
export const removeCartItem = (accountId,cartItemId) => axios.delete(`${REST_API_BASE_URL}/carts/remove-item/?${accountId}&${cartItemId}`);