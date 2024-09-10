import { React, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsers, DeleteUser } from '../../services/UserService';
import { Table } from 'react-bootstrap';
import {toast } from 'react-toastify';





export default function UserComponent() {

    const [users, setUsers] = useState([]);
    const [userID , setId] = useState('')
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

    function CustomToast({ closeToast, onYes, onCancel }) {
        return (
            <div>
                <p>Are you sure you want to proceed?</p>
                <button className='btn btn-success' onClick={onYes} style={{ marginRight: '10px' }}>Yes</button>
                <button className ="btn btn-danger" onClick={onCancel}>Cancel</button>
            </div>
        );
    }

    const handleYes = async () => {
        await(DeleteUser(userID))

        toast.dismiss(); 

        toast.success("User Deleted Successfully!");
        navigate('/admin/users');
    };

    const handleCancel = () => {
        console.log("User clicked Cancel");
        toast.dismiss(); // Cerrar el toast
    };

    const showCustomToast = (id) => {
        setId(id);

        toast(<CustomToast onYes={handleYes} onCancel={handleCancel} />, {
            position: "top-center",
            autoClose: false, // Para que no se cierre automáticamente
            closeOnClick: false,
            closeButton: false,
            draggable: false,
        });
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
                                <h6>{user.name + " " + user.lastname} </h6>
                                <div className="actions-container">
                                <a
                                    onClick={() => editUser(user.id)}  // Corregido el onClick
                                    className="mr-2">
                                    Edit
                                </a>
                                <a
                                    onClick={() => showCustomToast(user.id)} // Corregido el onClick
                                    className="mx-2 text-danger">
                                    Remove
                                </a>
                                </div>
                                
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
