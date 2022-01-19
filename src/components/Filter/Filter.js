import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactActions from '../../redux/actions';
import { getFilter } from '../../redux/selectors';
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
