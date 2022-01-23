import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  getContactsItems,
  getContactsFilter,
  getLoadingSpinner,
} from 'redux/phonebook/contacts-selectors';
import { fetchContacts } from 'redux/phonebook/contacts-operations';
import style from './ContactsList.module.scss';
import ContactData from '../ContactData/ContactData';
// import FindForm from '../FindForm';
import Spinner from '../Spinner/Spinner';

const ContactsList = () => {
  const dispatch = useDispatch();

  const contactArr = useSelector(getContactsItems);
  const findValue = useSelector(getContactsFilter);
  const isLoadingContacts = useSelector(getLoadingSpinner);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const tempContactArr = [...contactArr].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <>
      {contactArr && (
        <ul className={style.list}>
          {tempContactArr
            .filter(item =>
              item.name.toLowerCase().includes(findValue.toLowerCase()),
            )
            .map(item => {
              const { id } = item;
              return (
                <li key={id} className={style.item}>
                  <ContactData contactObj={item} />
                </li>
              );
            })}
        </ul>
      )}

      {isLoadingContacts && <Spinner />}
    </>
  );
};

ContactsList.propTypes = {
  id: PropTypes.string,
};

export default ContactsList;

/*
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import contactActions from '../../redux/phonebook/actions';
import { getFilteredContacts } from '../../redux/phonebook/selectors';
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
*/
