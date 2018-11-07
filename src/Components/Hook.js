import React, { useState, useEffect } from "react";

export default function Hook () {
    const [count, setCount] = useState(0);
    const [person, setPerson ] = useState(null);
    const [loading, setLoading] = useState(true);
// function runs after render
// useEffect(() => {
//     document.title = `You've clicked ${count} times`;
// });


// componentdidmount lifecycle, function will only run when variable inside square bracket changes
// useEffect(() => {
//     document.title = `You clicked ${count} times`;
// },[count]);

useEffect(async () => {
    const response = await fetch('https://api.randomuser.me/');
    const data = await response.json();
    const [ item ] = data.results;
    setPerson(item);
    setLoading(false);
    
},[count])
return (
    <div>
        <p>You've clicked { count } times </p>
        <button onClick={()=>setCount(count + 1)}>Click me</button>
        {loading ? <div>...loading</div> : <div>{person.name.first}</div>}
    </div>
)
}