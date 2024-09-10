import { React, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../../services/UserService';
import { Table } from 'react-bootstrap';

export default function UserComponent() {

    const [users, setUsers] = useState([]);
    const navigate  = useNavigate();

    useEffect(() => {
        const getUsuarios = async () => {
            try {
                setUsers(await getUsers());
            } catch (error) {
                console.log("There was an Error");
            }
        };

        getUsuarios();

    }, []);

    const editUser = (id) => {
        navigate(`edit-user/${id}`)
    };

    const removeUser = (id) => {
        console.log("Remove user with id:", id);
    };

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>
                                {user.name + " " + user.lastname} 
                                <a
                                    onClick={() => editUser(user.id)}  // Corregido el onClick
                                    className="mx-2">
                                    Edit
                                </a>
                                <a
                                    onClick={() => removeUser(user.id)} // Corregido el onClick
                                    className="mx-2 text-danger">
                                    Remove
                                </a>
                            </td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{"Administrator"}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
