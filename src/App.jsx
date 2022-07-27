import Header from './components/Header/Header';
import './index.scss'
import {Routes, Route} from 'react-router-dom';
import Register from './components/Register/Register';
import { Main } from './components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import Todo from './components/Todo/Todo';
import 'antd/dist/antd.css'; 


function App() {
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const menu = [
    {
      title: "Главная",
      url:'/'
    },
    {
      title: "Блог",
      url:"/blog"
    },
    {
      title: "Контакты",
      url:"/contacts"
    },
    {
      title: "Магазин",
      url:"/shop"
    },
    {
      title: "Регистрация",
      url:"/register"
    }
  ]

  const submitHandler = (e) => {
    e.preventDefault()
    if (user.password === user.confirmPassword){
      navigate("/login")
    }else{
      alert("Passwords not same")
    }
   }

  const info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis adipisci debitis quod ad, fuga amet, molestias laborum velit illum nobis non sed, explicabo sit dolores omnis cumque nulla inventore voluptas."
  const descr = "qwerty"

  return (
    <div className="App">
      <Header menu={menu} />
      <Routes>
        <Route path='/register' element={<Register user={user} setUser={setUser} submitHandler={submitHandler}/>} />
        <Route path="/login" element={<Login user={user} />} />
        <Route path='/' element={<Main info={info} descr={descr} />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
