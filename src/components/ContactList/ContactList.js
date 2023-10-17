import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List, ListItem } from './ContactList.styled';

const getСontactByFilter = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts = getСontactByFilter(contacts, filter);
  return (
    <List>
      {visibleContacts?.map(contact => (
        <ListItem key={contact.id}>
          <ContactItem contact={contact} />
        </ListItem>
      ))}
    </List>
  );
};
