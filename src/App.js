import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { contactOperations } from './redux/phonebook';
import Container from './components/Container';
// import Section from './components/Section';
import Form from './components/Form';
import Filter from './components/Filter';
import Contacts from './components/Contacts';
import style from './App.module.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactOperations.fetchContacts());
  }, [dispatch]);

  return (
    <main className={style.app}>
      <Container>
        <h1 className={style.title}>Phonebook</h1>
        <Form />
        <h2 className={style.title}>Contacts</h2>
        <Filter />
        <Contacts />
      </Container>
    </main>
  );
};

export default App;
