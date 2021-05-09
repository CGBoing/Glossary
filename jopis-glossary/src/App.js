import React from 'react';
import Tabs from "./components/Tabs";
import "./App.css";
import Accordion from './components/Accordion';
// import appealtoauthority from './img/appealtoauthority.png';
import appealtoauthority from './img/appealtoauthority.jpg';
import bandwagon from './img/bandwagon.jpg';
import strawman from './img/strawman.jpg';
import adhominem from './img/adhominem.jpg';
import appealtonature from './img/appealtonature.jpg';

function App() {
  return (
    <div>
      <h1>Glossaries of Stuff</h1>
      <Tabs>
        <div label="Statistics">
          <h2>Basic statistical concepts</h2>
          <Accordion>
            <div label="Student's t test">
              <p>
                <i>Coming soon.</i>
              </p>
            </div>
            <div label='Analysis of Variance'>
              <p>
                <i>Coming soon.</i>
              </p>
            </div>
          </Accordion>
        </div>
        <div label="Fallacies">
          <h2>Logical fallacies in argumentation</h2>
          These are the most common fallacious arguments you should <i>usually</i> avoid. These are adapted from <a href="https://yourlogicalfallacyis.com">YourLogicalFallacyIs.com</a>.
          <br />
          <br />
          <Accordion>
            <div label="Appeal to Authority">
              <p>
                <img src={appealtoauthority} alt="Appeal to Authority" />
              </p>
            </div>
            <div label='Argument from Popularity / Bandwagon'>
              <p>
                <img src={bandwagon} alt="Bandwagon" />

              </p>
            </div>
            <div label='Ad Hominem'>
              <p>
                <img src={adhominem} alt="Ad Hominem" />

              </p>
            </div>
            <div label='Strawman'>
              <p>
                <img src={strawman} alt="Strawman" />

              </p>
            </div>
            <div label='Appeal to Nature'>
              <p>
                <img src={appealtonature} alt="Appeal to Nature" />

              </p>
            </div>
          </Accordion>
        </div>
        <div label="About">
          <h2>What am I looking at?</h2>
          The motivations for creating this site are manifold: mainly to learn and revise Web app development techniques, React specifically.
          <br />
          Secondly, act as a glossary of things that might interest me at any given time - a so-called personal learning platform or reference, if you will.
          <br />
          Thirdly, it is sort of a UI/UX "test lab", so expect drastic changes and other whimsiness.
          <br />
          <br />
          <i>Jopi Mikkonen</i>
        </div>
      </Tabs>
    </div>
  );
}

export default App;
