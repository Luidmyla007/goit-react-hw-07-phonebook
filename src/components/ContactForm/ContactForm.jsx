import { useDispatch, useSelector } from 'react-redux';
import { addContact } from "redux/operations";
import { selectContacts } from "../../redux/selectors";
import { FirstTitle, FormStyled } from './ContactForm.styled';
import PropTypes from 'prop-types';

export const ContactForm = () => {
  const dispatch = useDispatch();  
  const contacts = useSelector(selectContacts);
  
  const  handleSubmit = evt =>{
    evt.preventDefault();
    const form = evt.target;

    const repeatContact = contacts.find(
      contact => contact.name === form.elements.name.value
    );

    if (repeatContact) {
      return alert(`${form.elements.name.value} is already in contacts`);
    } else {
      dispatch(
        addContact({
          name: form.elements.name.value,
          phone: form.elements.number.value,
        })
      );
      form.reset();
    }
   };  

   return (
     <FormStyled onSubmit={handleSubmit}>
       <FirstTitle>Phonebook</FirstTitle>
       <div>
         <label>Name</label><br />
         <input
           type="text"         
           name="name"
           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required
         />
         <br />
         <br />
         <label>Number</label><br />
         <input
           type="tel"        
           name="number"
           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
           required
          />
         <br />
         <br />
         <div>
           <button type='submit'>Add contact</button>
         </div>
       </div>
     </FormStyled>
   );
};


ContactForm.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};




