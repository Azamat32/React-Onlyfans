import './Loader.scss';
import ClipLoader from 'react-spinners/ClipLoader';

import React from 'react';

const Loader = () => {
  return (
    <div className="loader_container">
      <ClipLoader size={150} color="#3F50C0" />
    </div>
  );
};

export default Loader;
