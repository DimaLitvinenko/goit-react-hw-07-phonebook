import PropTypes from 'prop-types';
import style from './ContactData.module.scss';
import { useDispatch } from 'react-redux';
import { delContact } from 'redux/phonebook/contacts-operations';

const ContactData = ({ contactObj }) => {
  const dispatch = useDispatch();
  const deleteContact = e => {
    dispatch(delContact(e.target.dataset.key));
  };

  const { name, id, phone } = contactObj;
  return (
    <>
      <p className={style.name}>{name}:</p>
      <p className={style.number}>{phone}</p>
      <button
        className={style.button}
        type={'button'}
        data-key={id}
        onClick={deleteContact}
      >
        Delete
      </button>
    </>
  );
};

ContactData.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  id: PropTypes.string,
};

export default ContactData;
