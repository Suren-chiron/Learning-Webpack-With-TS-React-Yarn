import React, { useState } from 'react';

const CountCounter: React.FC = () => {
  const [Count, setCount] = useState(0);
  //    function addCount() {
  //       setCount((prev) => prev + 1);
  //    }إ

  return (
    <>
      <p>countCounter</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Counter i'm {Count === 0 ? '' : Count}</button>
    </>
  );
};

export default CountCounter;
