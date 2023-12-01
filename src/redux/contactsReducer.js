const initialState = {
    contacts: [
        { name: 'John Doe', email: 'john@example.com', phoneNumber: '1234567890' },
        { name: 'Jane Smith', email: 'jane@example.com', phoneNumber: '9876543210' },
        { name: 'Adam Johnson', email: 'adam@example.com', phoneNumber: '4567891230' },
        { name: 'Sarah Williams', email: 'sarah@example.com', phoneNumber: '9081726354' },
        { name: 'Michael Brown', email: 'michael@example.com', phoneNumber: '2468135790' },
        { name: 'Emily Davis', email: 'emily@example.com', phoneNumber: '1357924680' },
        { name: 'Christopher Wilson', email: 'christopher@example.com', phoneNumber: '3698521470' },
        { name: 'Jessica Taylor', email: 'jessica@example.com', phoneNumber: '7852143690' },
        { name: 'Matthew Anderson', email: 'matthew@example.com', phoneNumber: '1592634870' },
        { name: 'Olivia Jackson', email: 'olivia@example.com', phoneNumber: '9876541230' }
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