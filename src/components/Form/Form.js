import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
// import { addContact } from "../../redux/phonebook/phonebook-operations";
import { contactOperations } from '../../redux/phonebook';
import { getContacts } from '../../redux/phonebook/phonebook-selectors';
import style from './Form.module.scss';

function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setPhone(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // const existsContact = contacts.find(contact => name === contact.name);

    if (contacts.find(contact => name === contact.name)) {
      return alert(`The subscriber: ${name} - already exists!`);
    }
    if (contacts.find(contact => phone === contact.phone)) {
      return alert(
        `This number: ${phone} - has already been assigned to the subscriber!`,
      );
    }
    dispatch(contactOperations.addContact({ name, phone }));
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <ul className={style.list}>
        <li className={style.item}>
          <input
            className={style.input}
            id="name"
            type="text"
            name="subscriber"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer!"
            value={name}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <div className={style.cut}></div>
          <label className={style.label} htmlFor="name">
            Name
          </label>
        </li>

        <li className={style.item}>
          <input
            className={style.input}
            id="phone"
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with + !"
            value={phone}
            onChange={handleChange}
            placeholder=" "
            required
          />
          <div className={style.cut}></div>
          <label className={style.label} htmlFor="phone">
            Phone
          </label>
        </li>
      </ul>

      <button className={style.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default Form;

/*
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../redux/phonebook/actions';
import CONFIG from '../../data/formConfig.json';
import style from './ContactsForm.module.scss';

export default function Phonebook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    name === 'name' && setName(value);
    name === 'number' && setNumber(value);
  };

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    name && number !== '' && dispatch(actions.addContact(name, number));

    setName('');
    setNumber('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <ul className={style.list}>
        {CONFIG.map(field => (
          <li key={field.name} className={style.item}>
            <input
              className={style.input}
              id={field.type}
              type={field.type}
              name={field.name}
              pattern={field.pattern}
              title={field.title}
              value={{ name, number }[field.name]}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <div className={style.cut}></div>
            <label className={style.label} htmlFor={field.type}>
              {field.name}
            </label>
          </li>
        ))}
      </ul>
      <button className={style.button} type="submit">
        Add Contact
      </button>
    </form>
  );
}

CONFIG.PropTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
*/
