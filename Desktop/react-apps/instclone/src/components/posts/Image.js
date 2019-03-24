import React from 'react';

const Image = (props) => {
  return (
    <div className="post-image">
      <img src={ props.data } alt="fsd" />
    </div>
  );
};

export default Image;