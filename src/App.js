// https://fullstackopen.com/en/part7/custom_hooks

import { useState } from "react";

const useCounter = () => {
  const [value, setValue] = useState(0);

  const increase = () => {
    setValue(value + 1);
  };

  const decrease = () => {
    setValue(value - 1);
  };

  const zero = () => {
    setValue(0);
  };

  return {
    value,
    increase,
    decrease,
    zero,
  };
};

const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};

const App = () => {
  const counter = useCounter();

  const left = useCounter();
  const right = useCounter();

  // const [name, setName] = useState("");
  // const [born, setBorn] = useState("");
  // const [height, setHeight] = useState("");

  const name = useField("text");
  const born = useField("text");
  const height = useField("text");

  return (
    <>
      <div>
        <div>{counter.value}</div>
        <button onClick={counter.increase}>plus</button>
        <button onClick={counter.decrease}>minus</button>
        <button onClick={counter.zero}>zero</button>
      </div>
      <div>
        {left.value}
        <button onClick={left.increase}>left</button>
        <button onClick={right.increase}>right</button>
        {right.value}
      </div>
      <div>
        <form>
          name:
          <input
            // type="text"
            // value={name}
            // onChange={(event) => setName(event.target.value)}

            // type={name.type}
            // value={name.value}
            // onChange={name.onChange}

            {...name}
          />
          <br />
          birthdate:
          <input
            // type="text"
            // value={born}
            // onChange={(event) => setBorn(event.target.value)}

            // type={born.type}
            // value={born.value}
            // onChange={born.onChange}

            {...born}
          />
          <br />
          height:
          <input
            // type="text"
            // value={height}
            // onChange={(event) => setHeight(event.target.value)}

            // type={height.type}
            // value={height.value}
            // onChange={height.onChange}

            {...height}
          />
        </form>
        <div>
          {name.value} {born.value} {height.value}
        </div>
      </div>
    </>
  );
};

export default App;
