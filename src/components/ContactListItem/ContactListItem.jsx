import PropTypes from 'prop-types';
import { Item, Name, Number, Button } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/contactsSlice';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Name>{name}:</Name>
      <Number>{number}</Number>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
