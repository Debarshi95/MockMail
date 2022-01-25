import React from 'react';
import { FadeLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <FadeLoader />
    </div>
  );
};

export default Loader;
