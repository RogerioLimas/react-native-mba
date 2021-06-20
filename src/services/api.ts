import Product from './../models/Product';
import axios from '../../library/axios';
import User from '../models/User';

export async function auth(login: string, password: string): Promise<any> {
    try {
        const response = await axios.post('/user/login', { login, password });
        return response.data;
    } catch (error) {
        console.error('Error during authentication:');
        console.error(error);
        return null;
    }
}

export async function getProductsList(): Promise<Product[]> {
    try {
        const response = await axios.get('/product/list');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function addUser(user: User) : Promise<any> {
    try {
        const response = await axios.post('/user/customer/add', user);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
