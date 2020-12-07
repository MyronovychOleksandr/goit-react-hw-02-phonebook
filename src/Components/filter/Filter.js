import React from "react";
import PropTypes from "prop-types";
import s from "./Filter.module.css";

const Filter = ({ filter, onHandleFilterContact }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onHandleFilterContact}
      />
    </label>
  );
};

Filter.propTypes = {
  onHandleFilterContact: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
