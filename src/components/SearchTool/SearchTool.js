import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SearchTool.css";

const SearchTool = ({ onSubmit }) => {
  const [fields, setFields] = useState({
    query: "",
    searchCriteria: [],
  });

  const updateQuery = (e) => {
    setFields({
      ...fields,
      query: e.target.value,
    });
  };

  const updateSearchCriteria = (e) => {
    const { name } = e.target;

    const searchCriteria = fields.searchCriteria.includes(name)
      ? fields.searchCriteria.filter((el) => el !== name)
      : [...fields.searchCriteria, name];

    setFields({
      ...fields,
      searchCriteria,
    });
  };

  return (
    <div className="search-tool">
      <div className="search-tool__query">
        <input
          type="text"
          value={fields.query}
          onChange={(e) => updateQuery(e)}
          placeholder="e.g. space cat"
        />
        <button onClick={() => onSubmit(fields)}>Search</button>
      </div>

      <div className="search-tool__criteria">
        <label>
          <input
            name="image"
            type="checkbox"
            onChange={(e) => updateSearchCriteria(e)}
          />
          Images
        </label>
        <label>
          <input
            name="video"
            type="checkbox"
            onChange={(e) => updateSearchCriteria(e)}
          />
          Videos
        </label>
      </div>
    </div>
  );
};

export default SearchTool;

SearchTool.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
