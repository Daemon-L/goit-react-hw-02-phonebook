import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem, Button, Text } from './ContactList.styled'

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul>
        {contacts.map(({ id, name, number }) => (
            <ContactItem key={id}>
                <Text>{name}: {number}</Text>
                <Button type="button"
                        onClick={() => onDeleteContact(id)}>
                    Delete
                </Button>
            </ContactItem>
        ))}
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;