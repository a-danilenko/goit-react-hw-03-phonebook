import PropTypes from "prop-types";
import s from './Filter.module.css';

export default function Filter({ value, onChangeFilter }) {
  return (
    <div className={s.filterContainer}>
      Find contacts by name
      <input
        className={s.filterContainerInput}
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </div>
  );
}


Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};