import React, { useState } from "react";

const SearchTool = ({ onSubmit }) => {
  const [fields, setFields] = useState({
    query: null,
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
    <div>
      <input
        type="text"
        value={fields.query}
        onChange={(e) => updateQuery(e)}
        placeholder="e.g. space cat"
      />
      <button onClick={() => onSubmit(fields.query)}>Search</button>
      <label>
        <input
          name="images"
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
  );
};

export default SearchTool;
