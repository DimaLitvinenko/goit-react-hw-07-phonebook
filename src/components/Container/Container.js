import React from 'react';
import PropTypes from 'prop-types';
import style from './Container.module.scss';

const Container = ({ children }) => {
  <div className={style.container}>{children}</div>;
};

export default Container;
Container.propTypes = {
  children: PropTypes.node.isRequired,
};
