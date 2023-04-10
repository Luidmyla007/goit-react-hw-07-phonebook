import PropTypes from 'prop-types';
import { ListItem } from './ContactItem.styled';


export const ContactItem = ({ id, name, number, onDeleteContact }) => {
    return (
        <ListItem  key={id}>
            <span>{name}: {number}</span>
            <button  type="button" onClick={() => onDeleteContact(id)}>Delete</button>
        </ListItem>
    );
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};


