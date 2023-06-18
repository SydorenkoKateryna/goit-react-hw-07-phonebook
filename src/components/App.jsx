import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

const App = () => {
  return (
    <div
      style={{
        width: '400px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        gap: '20px',
        borderRadius: '5px',
        fontSize: '16px',
        color: '#010101',
        backgroundColor: '#ffffff',
        boxShadow:
          '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2)',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
