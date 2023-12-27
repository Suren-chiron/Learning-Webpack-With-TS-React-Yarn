import React from 'react';
import './App.css';
import TestOne from '../public/v2.jpg';
import CountCounter from './component/CountCounter';

type Props = {
  name: string;
  age: number;
  isStudent: boolean;
};

const App: React.FC<Props> = ({ name, age, isStudent }) => {
  var test = 'mohammad3'
  console.log(test);

  return (
    <>
      <div>
        <p>
          my name is {name}, i'm {age} years old and i'm {isStudent ? 'student' : 'engineer'}
        </p>
        <h2>
          Template is - {process.env.NODE_ENV} {process.env.name}
        </h2>
        <img src={TestOne} alt="a picture of bridge" width={290} height={290} />
        <CountCounter />
      </div>
    </>
  );
};

export default App;
