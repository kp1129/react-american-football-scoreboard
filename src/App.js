import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  const [lionsScore, setLionsScore] = useState(0);
  const [tigersScore, setTigersScore] = useState(0);

  const lionsTouchdown = event => setLionsScore(lionsScore + 7);
  const lionsFieldgoal = event => setLionsScore(lionsScore + 3);

  const tigersTouchdown = event => setTigersScore(tigersScore + 7);
  const tigersFieldgoal = event => setTigersScore(tigersScore + 3);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{lionsScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button className="homeButtons__touchdown" onClick={lionsTouchdown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={lionsFieldgoal}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={tigersTouchdown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={tigersFieldgoal}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
