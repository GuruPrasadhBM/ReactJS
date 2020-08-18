import React from 'react';

const GreetFnComp = (props) => {
  return (
    <div>
      <h4>
        Hello {props.name} a.k.a {props.heroName}
      </h4>
      {props.children}
    </div>
  );
};

export default GreetFnComp;
