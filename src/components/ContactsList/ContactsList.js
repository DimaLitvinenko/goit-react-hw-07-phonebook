import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import contactActions from '../../redux/actions';
import { getFilteredContacts } from '../../redux/selectors';
import style from './ContactsList.module.scss';

export default function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={style.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={style.item}>
          <p className={style.name}>{name}:</p>
          <p className={style.number}>{number}</p>
          <button
            className={style.button}
            type="button"
            onClick={() => dispatch(contactActions.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }),
  ),
};
