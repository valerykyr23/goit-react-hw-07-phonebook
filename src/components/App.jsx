import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/phonebook-operations";



export const App = () => {
  
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
    
    return (
      
      <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
          color: '#010101',
          flexDirection: 'column',
      }}
    >
        <h1>Phonebook</h1>

        <ContactForm></ContactForm>

        <h2>Contacts</h2>

        <Filter />
        {/* {isLoading && !error && "Loading your contacts...."} */}
        <ContactList></ContactList>
        
      </div>
    
    )
 }