import { Component } from 'react';
import { nanoid } from 'nanoid';
import './App.scss';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import ContactsList from './components/ContactsList/ContactsList';
import ContactsForm from './components/ContactsForm/ContactsForm';
import Filter from './components/Filter/Filter';
import earlyContacts from '../src/data/contacts.json';

export default class App extends Component {
	state = {
		contacts: earlyContacts,
		filter: '',
	};

	addContact = ({ name, number }) => {
		this.state.contacts.some(contact => name === contact.name)
			? alert(`${name} is already in contacts`)
			: this.setState(({ contacts }) => ({
					contacts: [...contacts, { name, number, id: nanoid() }],
			  }));
	};

	deleteContact = contactId => {
		this.setState(prevState => ({
			contacts: prevState.contacts.filter(
				contact => contact.id !== contactId,
			),
		}));
	};

	findByName = ({ currentTarget }) => {
		this.setState({
			filter: currentTarget.value,
		});
	};

	filterList = () => {
		const { contacts, filter } = this.state;
		const filteredItems = filter.toLowerCase();

		return contacts.filter(contact =>
			contact.name.toLowerCase().includes(filteredItems),
		);
	};

	render() {
		const { filter } = this.state;
		const { addContact, findByName, filterList, deleteContact } = this;
		return (
			<main className="App">
				<Container>
					<Section>
						<h1 className="app-title">Phonebook</h1>
						<ContactsForm addContactHandler={addContact} />
					</Section>
					<Section>
						<h2 className="app-title">Contacts</h2>
						<Filter contactName={filter} findByNameHandler={findByName} />
						<ContactsList
							contacts={filterList()}
							deleteContactHandler={deleteContact}
						/>
					</Section>
				</Container>
			</main>
		);
	}
}

// ===================
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
