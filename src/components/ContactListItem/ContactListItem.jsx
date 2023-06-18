import PropTypes from 'prop-types';
import { Item, Name, Number, Button } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/operations';

const ContactListItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Name>{name}:</Name>
      <Number>{phone}</Number>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactListItem;
