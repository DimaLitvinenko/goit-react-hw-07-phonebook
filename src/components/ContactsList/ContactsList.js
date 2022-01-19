import { useDispatch, useSelector } from 'react-redux';
import style from './ContactsList.module.scss';
import { deleteContact } from '../../redux/action';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state =>
    state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(state.filter.toLowerCase()),
    ),
  );

  return (
    <ul className={style.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={style.item}>
          <p className={style.name}>{name}:</p>
          <p className={style.number}>{number}</p>
          <button
            className={style.button}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
