import React from 'react';
import style from './Container.module.scss';

export default function Container({ children }) {
	return <div className={style.Container}>{children}</div>;
}
