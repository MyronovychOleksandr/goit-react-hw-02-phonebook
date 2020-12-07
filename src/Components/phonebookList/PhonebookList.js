import React from "react";
import PropTypes from "prop-types";

const PhonebookList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <span>{name}: </span>
            <span>{number} </span>
            <button id={id} onClick={deleteContact}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

PhonebookList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default PhonebookList;
