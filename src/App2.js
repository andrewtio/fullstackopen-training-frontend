import React, { useState } from "react";

const Display = ({ text, value }) => (
  <div>
    {text} {value}
  </div>
);

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => (
  <table>
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  </table>
);

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return <div>No Feedback Given</div>;
  }
  return (
    <>
      <Display text="Statistics" />
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="All" value={all} />
      <StatisticLine text="Average" value={average} />
      <StatisticLine text="Positive" value={positive} />
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <Display text="Give Feedback" />

      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={good + neutral + bad}
        average={(good - bad) / (good + neutral + bad)}
        positive={(good / (good + neutral + bad)) * 100}
      />
      <div>{anecdotes[selected]}</div>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
    </>
  );
};

export default App;
