import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';
import style from './Filter.module.scss';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };
  return (
    <div className={style.wrapper}>
      <input
        className={style.input}
        id="filter"
        name="filter"
        type="text"
        value={value}
        onChange={onChange}
        placeholder=" "
      />
      <div className={style.cut}></div>
      <label className={style.label} htmlFor="filter">
        Find contacts by name
      </label>
    </div>
  );
};

export default Filter;
// const mapStateToProps = (state) => ({
//   value: state.phonebook.filter,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onChange: (e) => dispatch(changeFilter(e.currentTarget.value)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
