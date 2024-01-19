import css from './ContactList.module.css';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/phonebook-operations';
import { selectContacts, selectFilter } from 'components/redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactsList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.contactItem} key={id}>
          <p>{name}:</p> <span>{number}</span>{' '}
          <button
            className={css.delButton}
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//     contactsList: PropTypes.array,
//     onDeleteContact: PropTypes.func
// }
