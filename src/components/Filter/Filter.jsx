import css from './Filter.module.css';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'components/redux/filterSlice';
import { selectFilter } from 'components/redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = event => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <div className={css.filterBox}>
      <label>
        Find contacts by name
        <br />
        <input
          className={css.filterInput}
          type="text"
          name="filter"
          id="filter"
          value={filter}
          onChange={changeFilter}
          pattern="^[a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż]+(([' \-][a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż])?[a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </div>
  );
};

// Filter.propTypes = {
//   filterValue: PropTypes.string,
//   onChange: PropTypes.func
// }
