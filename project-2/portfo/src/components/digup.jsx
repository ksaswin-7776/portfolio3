import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';

const APIEx6 = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    async function handleGetData() {
        try {
            const response = await axios.get("https://dummyjson.com/users");
            setUsers(response.data.users ); 
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        handleGetData();
    }, []);

    function filterUsr() {
        const filtered = users.filter(
            (user) => user.age< 40 && user.hair.color==="Brown"
        );
        
        setFilteredUsers(filtered);
    }

    
    return (
        <>
            <Button variant="success" onClick={filterUsr}>
                Show Filtered Users
            </Button>
            <h1> Users</h1>
            <Table striped bordered hover className="mt-4">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>NAME</th>
                        <th>IMAGE</th>
                        <th>HAIR COLOR</th>
                        <th>AGE</th>
                    </tr>
                </thead>
                <tbody>
                {(filteredUsers.length > 0 ? filteredUsers : users).map((u, index) => (
                    <tr key={u.id}>
                        <td>{index + 1}</td>
                        <td>{u.firstName}</td>
                        <td>
                            <img
                                src={u.image} 
                                alt={u.firstName}
                                width="50"
                            />
                        </td>
                        <td>{u.hair.color}</td> 
                        <td>{u.age}</td>
                    </tr>
                ))}
            </tbody>
            </Table>
        </>
    );
};

export default APIEx6