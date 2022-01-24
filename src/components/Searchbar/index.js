import React from 'react';

const Searchbar = ({ ...props }) => {
  return (
    <input
      type="search"
      name="search"
      className="p-3 w-full outline-none"
      {...props}
      autoComplete="off"
    />
  );
};

export default Searchbar;
