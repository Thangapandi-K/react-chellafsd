import React from 'react'
import { useLoaderData } from 'react-router-dom';

// define a loader function
export const loader = async() => {
    // make an async call to fetch data
    const response = await fetch(`https://665eb2be1e9017dc16f0f570.mockapi.io/todos`, 
    {
        method: "GET"
    }
);

    // PARSE THE RESPONSE
    const todos = await response.json();
    // return the data
    return todos;

}

const Todos = () => {

        // use the data using the useLoader hook
        const todos = useLoaderData();

        console.log(todos);
  return (
    <div>Todos</div>
  )
}

export default Todos