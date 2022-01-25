import PropTypes from 'prop-types';
import style from './ContactData.module.scss';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/contacts-operations';

const ContactData = ({ contactObj }) => {
  const dispatch = useDispatch();

  const onDelContact = e => {
    dispatch(deleteContact(e.target.dataset.key));
  };

  const { id, name, phone } = contactObj;
  return (
    <>
      <p className={style.name}>{name}:</p>
      <p className={style.number}>{phone}</p>
      <button
        className={style.button}
        type={'button'}
        data-key={id}
        onClick={onDelContact}
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
