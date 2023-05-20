import React from 'react';
import { Provider } from 'react-redux';
//Вытаскиваем хранилище данных о пользователях
import store from './redux/store';
import './App.css';
//Вытаскиваем страницу проекта
import UserContainer from './components/UserContainer';

function App() {
  return (
    //Хранилище данных о пользователях 
    <Provider store={store}>
      <div className="App">
        {/*Показываем страницу проекта */}
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
