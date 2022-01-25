import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/contacts-actions';
import style from './Filter.module.scss';

const Filter = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const findValue = value => dispatch(changeFilter(value));

  const handleChange = e => {
    setInputValue(e.currentTarget.value);
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
