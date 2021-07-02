import React from 'react';

function ChildFunction(props) {
  return (
    <div>
      <h1>ChildFunction</h1>
      <p>{props.ten}</p>
      <p>{props.noi}</p>
      <div>{props.children}</div>
    </div>
  );
}

export default ChildFunction;
