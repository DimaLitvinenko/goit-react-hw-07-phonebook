import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { search } from 'redux/phonebook/contacts-actions';
import style from './Filter.module.scss';

const Filter = () => {
  const [inputValue, setinputValue] = useState('');
  const dispatch = useDispatch();
  const findValue = value => dispatch(search(value));

  const handleChange = e => {
    setinputValue(e.currentTarget.value);
    findValue(e.currentTarget.value);
  };

  // const reset = (e) => setInputValue('');

  return (
    <>
      <input
        className={style.input}
        id="filter"
        name="filter"
        type="text"
        value={inputValue}
        onChange={handleChange}
        // onBlur={reset}
        placeholder=" "
      />
      <div className={style.cut}></div>
      <label className={style.label} htmlFor="filter">
        Find contacts by name
      </label>
    </>
  );
};
export default Filter;

Filter.propTypes = {
  inputValue: PropTypes.string,
};

/*
import { useSelector, useDispatch } from 'react-redux';
import contactActions from '../../redux/phonebook/actions';
import { getFilter } from '../../redux/phonebook/selectors';
import style from './Filter.module.scss';

export default function Filter() {
  const contactName = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      <input
        className={style.input}
        id="filter"
        name="filter"
        type="text"
        value={contactName}
        onChange={event =>
          dispatch(contactActions.contactsFilter(event.target.value))
        }
        placeholder=" "
      />
      <div className={style.cut}></div>
      <label className={style.label} htmlFor="filter">
        Find contacts by name
      </label>
    </div>
  );
}
*/
