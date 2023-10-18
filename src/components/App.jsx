import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Loader } from './Loader/Loader';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        margin: 40,
      }}
    >
      <div>
        {!error && (
          <>
            <h1>Phonebook</h1>
            <ContactForm />
          </>
        )}
        {isLoading ? (
          <Loader />
        ) : (
          contacts.length > 0 &&
          !error && (
            <>
              <h2>Contacts</h2>
              <Filter />
              <ContactList />
            </>
          )
        )}
        {error && !isLoading && <p>Oops! Something went wrong!</p>}
        <GlobalStyle />
      </div>
    </div>
  );
};
