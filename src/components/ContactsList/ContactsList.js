import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  getContacts,
  getFilter,
  getSpinner,
} from '../../redux/phonebook/contacts-selectors';
import { fetchContacts } from '../../redux/phonebook/contacts-operations';
import ContactData from '../ContactData/ContactData';
// import FindForm from '../FindForm';
import Spinner from '../Spinner/Spinner';
import style from './ContactsList.module.scss';

const ContactsList = () => {
  const dispatch = useDispatch();

  const contactArr = useSelector(getContacts);
  const findValue = useSelector(getFilter);
  const isLoading = useSelector(getSpinner);

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

      {isLoading && <Spinner />}
    </>
  );
};
export default ContactsList;

ContactsList.propTypes = {
  id: PropTypes.string,
};
