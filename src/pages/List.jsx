import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './List.css'
import { Link } from 'react-router-dom';
import { deleteContact } from '../redux/contactsReducer';
const List = () => {
    const contacts = useSelector((state) => state.contacts);
    const dispatch = useDispatch();

    const handleDelete = (index) => {
      dispatch(deleteContact(index));
    };
  
    return (
        <>
            <h1>List Contact</h1>
            <table className="contacts-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) => (
                        <tr key={index}>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phoneNumber}</td>
                            <td>
                                <button className="delete-button" onClick={() => handleDelete(index)}>Xóa</button>
                                <Link to={'/edit/'+index}><button className="edit-button">Sửa</button></Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>

    )
}

export default List