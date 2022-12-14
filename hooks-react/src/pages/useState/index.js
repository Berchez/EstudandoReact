import logo from './logo.svg';
import './styles.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function UseStateFn() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="useStateFb">
      <header className="useStateFb-header">
        <h2>UseState</h2>
        <img
          src={logo}
          className={`useStateFb-logo ${reverseClass}`}
          alt="logo"
        />

        <h1>Contador: {counter}</h1>

        <button type="button" onClick={handleClick}>
          Reverse {reverseClass}
        </button>
        <button type="button" onClick={handleIncrement}>
          Increment
        </button>
        <button>
          <Link to="/useEffect">UseEffect</Link>
        </button>
      </header>
    </div>
  );
}

export default UseStateFn;
