import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Login = ({user}) => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({});

  const loginHandler = (e) => {
    e.preventDefault();
    if(user.email === login.name && user.password === login.password){
      navigate("/")
    }else{
      alert("Error")
    }
  }

  return (
    <Form className='w-25 mx-auto mt-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setLogin({...login, name: e.target.value})} value={login.name}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setLogin({...login, password: e.target.value})} value={login.password}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e) => loginHandler(e)}>
        Submit
      </Button>
    </Form>
  )
}

export default Login;