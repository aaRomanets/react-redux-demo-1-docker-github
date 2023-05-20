import React, {useEffect} from 'react';
import {connect} from 'react-redux';
//вытаскиваем функцию полного получения информации о пользователях
import { fetchUsers } from '../redux';

function UserContainer ({
    //полученные данные о пользователях
    userData, dfetchUsers
}) {
    useEffect(() => {
        //сигнализируем процесс полного получения информации о пользователях в хуке useEffect
        dfetchUsers();
    }, [dfetchUsers]);

    return userData.loading ? (
        //идет процесс получения информации о пользователях
        <h2>Loading</h2>
    ) : userData.error ? (
        //процесс получения информации о пользователях не получился
        <h2>userData.error</h2>
    ) : (
        //выводим полученную информацию о пользователях
        <div>
            <h2>User List</h2>
            <div>
                {
                    userData &&
                    userData.users &&
                    userData.users.map(user => <p>{user.name}</p>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        //в userData собираем данные о пользователях из хранилища store
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //эта функция относится к хуку useEffect
        dfetchUsers: () => dispatch(fetchUsers())
    }
}

//с помощью функции connect осуществляем связь с хранилищем store и получаем из информацию в виде userData
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);