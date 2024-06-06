import React from 'react'
import axios from 'axios';



const TodoItem = ({todo, OnUpdateTodo}) => {

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

  return (
    <div>
        <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleCheckBoxChange}
        />
        <span>
            <strong>{todo.title.toUpperCase()}</strong> : <em>{todo.description}</em>
        </span>
    </div>
  )
}

export default TodoItem