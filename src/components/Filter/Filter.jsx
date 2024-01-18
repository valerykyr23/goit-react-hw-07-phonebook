import css from "./Filter.module.css"
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { filterContacts } from "components/redux/filterSlice";

export const Filter = () => {
  
  const dispatch = useDispatch();
 
  const filter = useSelector(state => state.filter);

  
  
  const changeFilter = (event) => {
    
    dispatch(filterContacts(event.currentTarget.value))
    
  }

 

    return (
       <div className={css.filterBox}>
            <label>Find contacts by name
                <br/>
        <input
            className={css.filterInput}
            type="text"
            name="filter"
            value={filter}
            onChange={changeFilter}
          />
            </label>
            </div>
    )
}


// Filter.propTypes = {
//   filterValue: PropTypes.string,
//   onChange: PropTypes.func
// }