import {
    //вытаскиваем метку начала процесса получения информации о пользователях 
    //с сервера https://jsonplaceholder.typicode.com/users
    FETCH_USERS_REQUEST,
    //вытаскиваем метку успешного получения информации о пользователях с указанного сервера
    FETCH_USERS_SUCCESS,
    //вытаскиваем метку неудачного получения информации о пользователях с указанного сервера
    FETCH_USERS_FAILURE
} from './userTypes'

//начальное состояние о проводимом скачивании информации о пользователях с указанного сервера
const initialState = {
    loading: false,
    users: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        //проводится процесс скачивания информации о пользователях с указанного сервера
        //проведение этого процесса сигнализируется в хранилище store при помощи логического флага loading
        case FETCH_USERS_REQUEST:
        {
            return {
                ...state,
                loading: true
            }
        }
        //процесс скачивания информации о пользователях с указанного сервера успешно осуществлен
        //полученная информация action.payload передается в хранилище store 
        case FETCH_USERS_SUCCESS:
        {
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        }
        //процесс скачивания информации о пользователях с указанного сервера не удался
        case FETCH_USERS_FAILURE:
        {
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        }

        default:
        {
            return state;
        }
    }
}

export default reducer;