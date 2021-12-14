import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactsList.module.scss';

export default function ContactsList({ contacts, deleteContactHandler }) {
   return (
      <ul className={style.contact__list}>
         {contacts.map(({ id, name, number }) => (
            <li key={id} className={style.contact__item}>
               <p className={style.contact__name}>{name}:</p>
               <p className={style.contact__number}>{number}</p>
               <button
                  className={style.contact__button}
                  onClick={() => deleteContactHandler(id)}
               >
                  Delete
               </button>
            </li>
         ))}
      </ul>
   );
}

ContactsList.propTypes = {
   contacts: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         number: PropTypes.string.isRequired,
      }),
   ),
   deleteContactHandler: PropTypes.func.isRequired,
};
