import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import TodoItem from '../components/TodoItem';


// define a loader function
export const loader = async() => {
    // make an async call to fetch data
    const todos = await axios.get(`https://665eb2be1e9017dc16f0f570.mockapi.io/todos`);

  
    // return the data
    return {todos: todos.data};

}

const Todos = () => {

        // use the data using the useLoader hook
        const { todos: initialTodos } = useLoaderData();
        const[todos, setTodos] = useState(initialTodos);
        const [title, setTitle] = useState('');
        const[description, setDescription] = useState('');
        const [completed, setCompleted] = useState(false);

        const handleUpdateTodo = (updatedTodo) => {
            setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo: todo)))
        }

        const handleCreateTodo = async (e) => {
            e.preventDefault();

            // create a new todo object
            const newTodo = {
                title,
                description,
                completed
            }
            // api call to create new todo
            const response = await axios.post(`https://665eb2be1e9017dc16f0f570.mockapi.io/todos/`, newTodo
            );

            if (response) {
                setTitle('');
                setDescription('');
                setCompleted(false);

            // update the state
            response.data && setTodos([...todos, response.data])

            alert("New Todo Created Successfully");
        }
    }
    
    const handleDeleteTodo = async (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

        console.log(todos);
  return (
    <div>
        <h1>Todo List</h1>
            {
                todos.map(todo =>(
                    <TodoItem 
                        todo={todo}
                        key={todo.id}
                        OnUpdateTodo={handleUpdateTodo}
                    />
                ))
            }
            <form onSubmit={handleCreateTodo}>
                <input 
                    type="text"
                    placeholder='Todo Title...'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder='Todo Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <select
                    value={completed}
                    onChange={(e) => setCompleted(e.target.value)}
                >
                    <option
                        value={false}
                    >Not Completed</option>
                    <option
                        value={true}
                    >Completed</option>
                </select>
                <button type="submit">Add Todo</button>
            </form>
    </div>
  )
}

export default Todos