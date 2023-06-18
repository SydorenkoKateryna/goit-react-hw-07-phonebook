import ContactListItem from '../ContactListItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'store/selectors';

const getVisibleContacts = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

const ContactList = () => {
  const { contactList } = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contactList, filter);

  return (
    <ul>
      {visibleContacts?.map(({ id, name, number }) => {
        return <ContactListItem key={id} name={name} number={number} id={id} />;
      })}
    </ul>
  );
};

export default ContactList;
