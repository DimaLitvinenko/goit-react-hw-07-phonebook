import React from 'react';
import Loader from 'react-loader-spinner';
import style from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={style.loaderBox}>
      <Loader
        type="Oval" //Audio Bars BallTriangle Circles Grid Oval Puff Rings TailSpin ThreeDots Hearts
        color="#dadada"
        height={90}
        width={90}
        timeout={5000} // ms
      />
    </div>
  );
};

export default Spinner;
