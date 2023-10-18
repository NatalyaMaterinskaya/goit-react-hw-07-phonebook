import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';
import { Text, Btn } from './ContactItem.styled';

export const ContactItem = ({ contact: { id, name, phone } }) => {
  const dispach = useDispatch();
  const handleDelete = () => dispach(deleteContact(id));
  return (
    <>
      <Text>{name}</Text>
      <Text>{phone}</Text>
      <Btn type="button" onClick={handleDelete}>
        Delete
      </Btn>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
};
