import React, { useEffect, useState } from "react";

const UseEffectEx = () => {
    const [users, setUsers] = useState([]); // Fixed state variable name

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users") // Replace with actual API URL
            .then((res) => res.json()) // Fixed incorrect .json() call
            .then((data) => {
                setUsers(data);
            })
            .catch((err) => console.error("Error fetching users:", err));
    }, []);

    return (
        <div className="parent">
            <h2>UseEffect Example</h2>
            {users.map((user, index) => ( // Fixed incorrect syntax
                <React.Fragment key={index}>
                    <h1>{user.name}</h1>
                    <h3>{user.email}</h3>
                </React.Fragment>
            ))}
        </div>
    );
};

export default UseEffectEx;