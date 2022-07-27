import React, {useState} from 'react';
import "./styles.scss";
import { CheckOutlined,DeleteOutlined, EditOutlined  } from '@ant-design/icons';

const Todo = () => {
  const [todo, setTodo] = useState({
    title:"",
    isDone:false,
    id:""
  });
  const [todos, setTodos] = useState([]);

  const inputHandler = (e) => {
    setTodo({...todo, title: e.target.value})
  }

  const taskAddHandler = () => {
    setTodos([...todos, {...todo, id: String(Math.round(Math.random()*10000000))}])
    setTodo({  
      title:"",
      isDone:false,
      id:""
    })
  }
  
  const doneHandler = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id){
        todo.isDone = !todo.isDone;
      }
      return todo;
    }))
  }

  const deleteHandler = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  return (
    <div className='todo'>
      <div className='todo__add'>
        <div className='todo__add-input'>
          <input type="text" placeholder='Enter task...' onChange={inputHandler} value={todo.title} />
        </div>
        <div className='todo__add-button'>
          <button onClick={taskAddHandler}>Add task</button>
        </div>
      </div>
      <div className='todo__items'>
        {
          todos.map(todo => (
            <div className='todo__item d-flex align-items-center justify-content-between'>
              <div className={`todo__item-text ${todo.isDone && 'done' }`}> 
                {todo.title}
              </div>
              <div className='d-flex'>
              <div>
                <EditOutlined className="me-3"/>
              </div>
              <div className='todo__item-done me-3'>
                <CheckOutlined 
                  width={30}
                  onClick={() => doneHandler(todo.id)}
                />
              </div>
              <div className='todo__item-delete me-3'>
                <DeleteOutlined 
                  width={30}
                  onClick={() => deleteHandler(todo.id)}
                />
              </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Todo;