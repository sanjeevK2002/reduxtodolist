import React ,{useEffect}from 'react'
import { removeTodo } from '../feature/todoSlice'
import { useSelector, useDispatch } from 'react-redux'
import { MdDeleteOutline } from 'react-icons/md'
import "./Todoo.css"

const Todoo = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)
    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

    return (
        <>
            <div>Todos</div>
            <ul className='list-none'>
                {todos.map((todo) => (
                    <li className='list' key={todo.id}>
                        <div className='todo-text'>{todo.text}</div>
                        <button 
                            onClick={() => dispatch(removeTodo(todo.id))} 
                            className='deletebtn'
                        >
                            <MdDeleteOutline />
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todoo
