import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './List.css'
import { Link } from 'react-router-dom';
import { addContact, deleteContact } from '../redux/contactsReducer';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const List = () => {


    const handleDelete = (index) => {
        dispatch(deleteContact(index));
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [newContact, setNewContact] = useState({ name: '', email: '', phoneNumber: '' });

    const handleNewContactChange = (field) => (event) => {
        setNewContact((prevContact) => ({
            ...prevContact,
            [field]: event.target.value,
        }));
    };

    const handleSaveNewContact = () => {
        if (newContact.name && newContact.email && newContact.phoneNumber) {
            dispatch(addContact(newContact));
            setNewContact({ name: '', email: '', phoneNumber: '' });
            handleClose();
        } else {
            alert('Please fill in all fields.');
        }
    };
    const contacts = useSelector((state) => state.contacts.contacts);
    const searchQuery = useSelector((state) => state.search.searchQuery);
    const dispatch = useDispatch();
    const filteredContacts = contacts.filter(contact => contact.name.toUpperCase().includes(searchQuery.toUpperCase()));


    return (
        <>
            <div className='title-page'>
                <h1>List Contact</h1>
                <div>
                    <Button variant="outlined" onClick={handleClickOpen}>
                        Add New Contact
                    </Button>
                    <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                    >
                        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                            Add New Contact
                        </DialogTitle>
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent dividers>
                            <TextField
                                label="Name"
                                type="text"
                                value={newContact.name}
                                onChange={handleNewContactChange('name')}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Email"
                                type="email"
                                value={newContact.email}
                                onChange={handleNewContactChange('email')}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Phone Number"
                                type="text"
                                value={newContact.phoneNumber}
                                onChange={handleNewContactChange('phoneNumber')}
                                fullWidth
                                margin="normal"
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button autoFocus onClick={handleSaveNewContact} color="primary">
                                Save
                            </Button>
                        </DialogActions>
                    </BootstrapDialog>
                </div>
            </div>

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
                    {filteredContacts.length === 0 ? (
                        <tr>
                            <td colSpan="4" style={{ textAlign: 'center' }}>Contact is Not Found <b>"{searchQuery}"</b></td>
                        </tr>
                    ) : (
                        filteredContacts.map((contact, index) => (
                            <tr key={index}>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phoneNumber}</td>
                                <td>
                                    <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
                                    <Link to={'/edit/' + index}><button className="edit-button">Edit</button></Link>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </>

    )
}

export default List