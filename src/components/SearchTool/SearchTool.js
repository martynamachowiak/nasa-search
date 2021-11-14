import React, { useState } from "react";

const SearchTool = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="e.g. moon"
      />
      <button onClick={() => onSubmit(value)}>Search</button>
    </div>
  );
};

export default SearchTool;
