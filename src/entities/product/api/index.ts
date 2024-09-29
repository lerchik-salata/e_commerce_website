import axios from 'axios';
import { ProductsResponse } from '../model';

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',  
});

export const productApi = {
    getProducts: async (limit: number, skip: number): Promise<ProductsResponse> => {
        try {
            const response = await axiosInstance.get<ProductsResponse>(`/products?limit=${limit}&skip=${skip}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },
};
