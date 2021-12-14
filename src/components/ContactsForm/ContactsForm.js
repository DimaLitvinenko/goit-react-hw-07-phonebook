import { Component } from 'react';
import PropTypes from 'prop-types';
import CONFIG from '../../data/formConfig.json';
import style from './ContactsForm.module.scss';

export default class Phonebook extends Component {
	static propTypes = {
		name: PropTypes.string,
		number: PropTypes.number,
	};

	state = {
		name: '',
		number: '',
	};

	toChangeHandler = ({ currentTarget }) => {
		const { name, value } = currentTarget;
		this.setState({ [name]: value });
	};

	toSubmitHandler = event => {
		event.preventDefault();
		this.props.addContactHandler(this.state);
		this.setState({ name: '', number: '' });
	};

	render() {
		return (
			<form className={style.form} onSubmit={this.toSubmitHandler}>
				<ul className={style.form__list}>
					{CONFIG.map(({ type, name, pattern, title }) => (
						<li key={name} className={style.form__item}>
							<input
								className={style.form__input}
								id={type}
								type={type}
								name={name}
								pattern={pattern}
								title={title}
								value={this.state[name]}
								onChange={this.toChangeHandler}
								placeholder=" "
								required
							/>
							<div className={style.cut}></div>
							<label className={style.placeholder} htmlFor={type}>
								{name}
							</label>
						</li>
					))}
				</ul>
				<button className={style.form__button} type="submit">
					Add Contact
				</button>
			</form>
		);
	}
}
CONFIG.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	pattern: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
