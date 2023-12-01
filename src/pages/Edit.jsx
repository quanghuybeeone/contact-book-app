import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { editContact } from '../redux/contactsReducer';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

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
        <Stack spacing={2} direction="row">
          <Link to={'/'}>
            <Button type="button" className="form-button cancel">
              Cancel
            </Button>
          </Link>

          <Button variant='contained' type="button" onClick={handleSave} className="form-button">
            Save
          </Button>
        </Stack>

      </form>
    </div>
  );
};

export default Edit;