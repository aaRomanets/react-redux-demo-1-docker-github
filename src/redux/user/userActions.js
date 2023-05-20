import axios from 'axios';

import { 
    //вытаскиваем метку начала процесса получения информации о пользователях 
    //с сервера https://jsonplaceholder.typicode.com/users
    FETCH_USERS_REQUEST, 
    //вытаскиваем метку успешного получения информации о пользователях с указанного сервера
    FETCH_USERS_SUCCESS, 
    //вытаскиваем метку неудачного получения информации о пользователях с указанного сервера
    FETCH_USERS_FAILURE 
} from "./userTypes"

//начинается запрос на получение информации о пользователях с указанного сервера
export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

//эта функция сигнализирует о том, что запрос на получение информации о пользователях 
//с указанного сервера успешно осуществлен и отправляет полученную информацию в хранилище store
export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

//эта функция сигнализирует о том, что запрос на получение информации о пользователях 
//с указанного сервера не удался
export const fetchUsersFailure = () => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: console.error()
    }
}

//функция полного процесса получения информации о пользователях с указанного сервера
//и отправки ее в хранилище store
export const fetchUsers = () => {
    return (dispatch) => {
        //начинаем указанный процесс 
        dispatch(fetchUsersRequest);
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            //информация о пользователях с указанного сервера получена
            const users = response.data;
            //отправляем полученную информацию в хранилище store
            dispatch(fetchUsersSuccess(users));
        })
        .catch(error => {
            // указанный процесс не удался выводим ошибку error.message
            const errorMsg = error.message;
            dispatch(fetchUsersFailure(errorMsg));
        })
    }
}