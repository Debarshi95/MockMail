import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import Searchbar from '../Searchbar';

const Navbar = () => {
  const history = useHistory();

  const handleOnSearch = (e) => {
    const { value } = e.target;
    history.replace({ pathname: `/`, search: `search=${value}` });
  };

  return (
    <nav className="flex py-3 px-2 md:px-8 border-b-2 border-slate-200 mb-4 bg-white">
      <Link to="/" className="text-blue-500 font-bold text-xl flex items-center mr-2">
        MockMail
      </Link>
      <div className="mx-auto sm:ml-40 max-w-3xl w-full  border-2 border-slate-200 rounded-sm">
        <Searchbar placeholder="Search for a mail..." onChange={handleOnSearch} />
      </div>
    </nav>
  );
};

export default Navbar;
