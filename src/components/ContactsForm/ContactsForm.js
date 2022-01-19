import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import style from './ContactsForm.module.scss';
import CONFIG from '../../data/formConfig.json';
import { addContact } from '../../redux/action';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = currentTarget => {
    const { name, value } = currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    dispatch(addContact(contact));
    reset();
  };

  const reset = () => {
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
