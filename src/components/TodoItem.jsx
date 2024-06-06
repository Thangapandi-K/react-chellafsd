import React from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';



const TodoItem = ({todo, OnUpdateTodo, onDeleteTodo}) => {

    const handleCheckBoxChange = async () => {
        try {
            const updatedTodo = {
                ...todo,
                completed: !todo.completed
            };

            const response = await axios.put(
                `https://665eb2be1e9017dc16f0f570.mockapi.io/todos/${todo.id}`, updatedTodo
        
            );

            response.data && OnUpdateTodo(response.data);

        } catch (error) {

            console.error(`Failed to update: ${error}`);
        
        }
    }

    const handleDeleteTodo = async () => {
        try {
            const response = await axios.delete(
                `https://665eb2be1e9017dc16f0f570.mockapi.io/todos/${todo.id}`
            );

            onDeleteTodo && onDeleteTodo(todo.id);

        } catch (error) {
            console.error(`Failed to delete todo: ${error}`);
        }
    }

  return (
    <div>
        <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleCheckBoxChange}
        />
        <span>
            <strong>{todo.title.toUpperCase()}</strong> : <em>{todo.description}</em>
        </span> &nbsp;&nbsp;
        <span>
            <FontAwesomeIcon
                icon={faTrash}
                color="red"
                fontSize={16}
                onClick={handleDeleteTodo}
            />
        </span>
        <br /> <br />
    </div>
  )
}

export default TodoItem