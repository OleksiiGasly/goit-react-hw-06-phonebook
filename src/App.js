import Form from './components/Form/Form';
import ContactsList from './components/List/List';
import Filter from './components/Filter/Filter';
import { FirstTitle, SecondTitle } from './App.styled';

const App = () => {
  return (
    <div>
      <FirstTitle>Phonebook</FirstTitle>
      <Form />
      <SecondTitle>Contacts</SecondTitle>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;
