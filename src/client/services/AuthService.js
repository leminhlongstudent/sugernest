import axios from "axios";
import { REST_API_BASE_URL } from "./ProductService";


export const loginToken = (accountName, password) => axios.post(`${REST_API_BASE_URL}/auth/login`, { accountName, password });
