import { useSelector, useDispatch } from 'react-redux';
import { contactOperations } from '../../redux/phonebook';
import { getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';
import style from './Contacts.module.scss';

const Contacts = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(contactOperations.deleteContact(id));
  };
  return (
    <>
      <ul className={style.list}>
        {contacts.map(({ id, name, phone }) => (
          <li key={id} className={style.item}>
            <p className={style.name}>{name}:</p>
            <p className={style.number}>{phone}</p>
            <button
              onClick={() => onDeleteContact(id)}
              className={style.button}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contacts;
