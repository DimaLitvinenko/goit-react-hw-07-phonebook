import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/phonebook/contacts-operations';
// import CONFIG from '../../data/formConfig.json';
import { getContactsItems } from 'redux/phonebook/contacts-selectors';
import style from './ContactsForm.module.scss';

export default function ContactsForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // const contArr = useSelector(state => state.contacts.items);
  const contArr = useSelector(getContactsItems);

  const dispatch = useDispatch();

  const contactToServer = ({ name, phone }) =>
    dispatch(addContact({ name, phone }));

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'subscriber':
        setName(e.currentTarget.value);
        // setId(uuidv4());
        break;
      case 'number':
        setPhone(e.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contArr.findIndex(item => item.name === name) !== -1) {
      return alert(`Абонент с именем ${name} уже существует!`);
    }
    if (contArr.findIndex(item => item.phone === phone) !== -1) {
      return alert(`Такой номер ${phone} уже присвоен другому абоненту!`);
    }
    contactToServer({ name, phone });
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <>
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
              name="number"
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
          Add Contact
        </button>
      </form>
    </>
  );
}

ContactsForm.propTypes = {
  subscriber: PropTypes.string,
  number: PropTypes.string,
};

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
