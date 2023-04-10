import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/selectors';
import { ContactItem } from "components/ContactItem/ContactItem";

export const ContactList = () => {  
  const contacts = useSelector(selectFilterValue);
  
  return (   
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}            
        />
      ))}
    </ul>    
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

