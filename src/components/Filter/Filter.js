import React from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.scss';

export default function Filter({ contactName, findByNameHandler }) {
   return (
      <div className={style.filter__container}>
         <input
            className={style.filter__input}
            id="input"
            type="text"
            value={contactName}
            onChange={findByNameHandler}
            placeholder=" "
         />
         <div className={style.cut}></div>
         <label className={style.filter__label} htmlFor="input">
            Find contacts by name
         </label>
      </div>
   );
}

Filter.propTypes = {
   contactName: PropTypes.string.isRequired,
   findByNameHandler: PropTypes.func.isRequired,
};
