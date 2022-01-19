import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../redux/actions';
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
        {CONFIG.map(({ type, name, pattern, title }) => (
          <li key={name} className={style.item}>
            <input
              className={style.input}
              id={type}
              type={type}
              name={name}
              pattern={pattern}
              title={title}
              value={name}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <div className={style.cut}></div>
            <label className={style.label} htmlFor={type}>
              {name}
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
