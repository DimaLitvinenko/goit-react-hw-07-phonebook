import style from './Filter.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { contactsFilter } from '../../redux/action';

export default function Filter() {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const onChangeByFilter = ({ target }) => {
    setFilter(target.value);
    dispatch(contactsFilter(target.value));
  };

  return (
    <div className={style.container}>
      <input
        className={style.input}
        id="filter"
        name="filter"
        type="text"
        value={filter}
        onChange={onChangeByFilter}
        placeholder=" "
      />
      <div className={style.cut}></div>
      <label className={style.label} htmlFor="filter">
        Find contacts by name
      </label>
    </div>
  );
}
