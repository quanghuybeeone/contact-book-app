import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { editContact } from '../redux/contactsReducer';
import './Edit.css'
const Edit = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const initialContact = contacts[index];
  const [contact, setContact] = useState(initialContact);

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    dispatch(editContact(index, contact));
    navigate('/');
  };

  return (
    <div>
      <h1>Edit Contact #{index}</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={contact.email}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={contact.phoneNumber}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <br />
        <Link to={'/'}>
          <button type="button" className="form-button cancel">
            Cancel
          </button>
        </Link>

        <button type="button" onClick={handleSave} className="form-button">
          Save
        </button>
      </form>
    </div>
  );
};

export default Edit;