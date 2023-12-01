const initialState = {
    contacts: [
        { name: 'John Doe', email: 'john@example.com', phoneNumber: '1234567890' },
        { name: 'Jane Smith', email: 'jane@example.com', phoneNumber: '9876543210' },
        // Add more contacts as needed
    ],
};

// Action types
const ADD_CONTACT = 'ADD_CONTACT';
const EDIT_CONTACT = 'EDIT_CONTACT';
const DELETE_CONTACT = 'DELETE_CONTACT';

// Action creators
export const addContact = (contact) => {
    return {
        type: ADD_CONTACT,
        payload: contact,
    };
};

export const editContact = (index, updatedContact) => {
    return {
        type: EDIT_CONTACT,
        payload: { index, updatedContact },
    };
};

export const deleteContact = (index) => {
    return {
        type: DELETE_CONTACT,
        payload: index,
    };
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
            };
        case EDIT_CONTACT:
            const { index, updatedContact } = action.payload;
            const updatedContacts = [...state.contacts];
            updatedContacts[index] = updatedContact;
            return {
                ...state,
                contacts: updatedContacts,
            };
        case DELETE_CONTACT:
            const deleteIndex = action.payload;
            const filteredContacts = state.contacts.filter((contact, index) => index !== deleteIndex);
            return {
                ...state,
                contacts: filteredContacts,
            };
        default:
            return state;
    }
};

export default contactsReducer;