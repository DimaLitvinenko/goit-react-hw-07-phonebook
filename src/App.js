import './App.scss';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import ContactsForm from './components/ContactsForm/ContactsForm';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';

export default function App() {
  return (
    <main className="app">
      <Container>
        <Section>
          <h1 className="app-title">Phonebook</h1>
          <ContactsForm />
        </Section>

        <Section>
          <h2 className="app-title">Contacts</h2>
          <div className="app-container">
            <Filter />
            <ContactsList />
          </div>
        </Section>
      </Container>
    </main>
  );
}
