// eslint-disable-next-line

// import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'components/redux/phonebook-operations';
import { useDispatch, useSelector} from 'react-redux';
import css from './ContactForm.module.css';


export const ContactForm = () => {
  
 
  const dispatch = useDispatch();
  
  // const contacts = useSelector(state => state.contacts.items);


  

  const formSubmithandler = (event) => {

    const { name, number } = event.target.elements;

    event.preventDefault();
   
    // const newContact = {
    //   // id: nanoid(),
    //   name: name.value,
    //   number: number.value
    // };

   

    dispatch(addContact({name: name.value, number: number.value}));

    
//  contacts.find(contact => contact.name.toLowerCase().includes(name.value.toLowerCase())) ? alert(`${name.value} is already in contacts.`) :
// dispatch(addContact(newContact));

    event.target.reset();

  }
  
   console.log(useSelector(state => state))

  return (
      
    <form className={css.mainForm} onSubmit={formSubmithandler}>
      <div>
        <label className={css.formLabel}>
          
          Name
          <input
            className={css.formInput}
            // value={name}
            // onChange={handleInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
      </div>

      <div>
        <label className={css.formLabel}>
          
          Number
          <input
            className={css.formInput}
            // value={number}
            // onChange={handleInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>

      <button className={css.addButton} type="submit"> Add contact</button>
    </form>
  );
  
}
  

