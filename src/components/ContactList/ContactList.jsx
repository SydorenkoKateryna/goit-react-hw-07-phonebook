import ContactListItem from '../ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'store/selectors';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {contacts.map(({ id, name, phone }) => {
        return <ContactListItem key={id} name={name} phone={phone} id={id} />;
      })}
    </ul>
  );
};

export default ContactList;
