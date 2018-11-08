import React, { useState, useEffect } from 'react'; 


export default function Todo() {

    const [todo, setTodo ] = useState({});


    return (
        <div>
            { todo && <p>{todo.num}</p> }
            <input type="text" value={todo.num} onChange= {(e)=> setTodo({num:e.target.value})}/>

        </div>
    )
}

