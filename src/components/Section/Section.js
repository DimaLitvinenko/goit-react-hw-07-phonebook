import PropTypes from 'prop-types';
import style from './Section.module.scss';

export default function Section({ children }) {
	return <section className={style.section}>{children}</section>;
}

Section.propTypes = {
	children: PropTypes.array.isRequired,
};
