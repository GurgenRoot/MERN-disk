import { AppDispatch } from './../../app/store';
import axios from 'axios';
import { login } from '../User/UserSlice';


export const createUserAccount = (email: string, password: string) => {

    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/registration', {email, password});
            alert(response.data.message)
            console.log(response, 'response');
            
        } catch(e) {
            alert(e.response.data.message)
        }

    }
}

export const loginUserAccount = (email: string, password: string) => {

    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {email, password});
            const user = response.data.user
            alert(response.data.user)
            localStorage.setItem('token', response.data.token);
            dispatch(login(user))
            console.log(response.data.user, 'response');
            
        } catch(e) {
            alert(e.response.data.message)
        }

    }
}

export const authUser = () => {

    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get('http://localhost:5000/api/auth/auth', {
                headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}
            });
            
            const user = response.data.user
            alert(response.data.user)
            localStorage.setItem('token', response.data.token);
            dispatch(login(user))
            console.log(response.data.user, 'response');
            
        } catch(e) {
            alert(e.response.data.message)
            localStorage.removeItem('token')
        }

    }
}