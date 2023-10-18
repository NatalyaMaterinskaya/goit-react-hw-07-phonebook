import { useSelector } from 'react-redux';
import { selectvisibleContacts } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List, ListItem } from './ContactList.styled';


export const ContactList = () => {
  const contacts = useSelector(selectvisibleContacts);

  return (
    <List>
      {contacts?.map(contact => (
        <ListItem key={contact.id}>
          <ContactItem contact={contact} />
        </ListItem>
      ))}
    </List>
  );
};
