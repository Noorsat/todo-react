import React, {useState} from 'react';
import './styles.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = ({user, setUser, submitHandler}) => {
  return (
    <div className='wrapper'>
     <Form>
     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label'>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(e) => setUser({...user, name: e.target.value})} value={user.name}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label'>Surname</Form.Label>
        <Form.Control type="text" placeholder="Enter surname" onChange={(e) => setUser({...user, surname: e.target.value})} value={user.surname}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setUser({...user, email: e.target.value})} value={user.email} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setUser({...user, password: e.target.value})} value={user.password} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setUser({...user, confirmPassword: e.target.value})} value={user.confirmPassword}/>
      </Form.Group>
      <Button variant="primary" onClick={(e) => submitHandler(e)}>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Register;