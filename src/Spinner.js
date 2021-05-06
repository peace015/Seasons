import React from 'react';

const Speinner = (porps) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader"> {porps.message}</div>
    </div>
  );
};

Speinner.defualtProps = {
  message: 'Loading...',
};

export default Speinner;
