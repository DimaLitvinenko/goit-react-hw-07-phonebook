import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import style from './App.module.scss';
import { contactOperations } from './redux/phonebook';
import Container from './components/Container';
import Section from './components/Section';
import Form from './components/Form';
import Filter from './components/Filter';
import Contacts from './components/Contacts';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <main>
        <Container>
          <Section>
            <h1 className={style.title}>Phonebook</h1>
            <Form />
          </Section>
          <Section>
            <h2 className={style.title}>Contacts</h2>
            <Filter />
            <Contacts />
          </Section>
        </Container>
      </main>
    </>
  );
}
