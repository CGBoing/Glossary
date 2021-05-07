import React from 'react';
import Tabs from "./components/Tabs";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Glossaries of Stuff</h1>
      <Tabs>
        <div label="Statistics">
          <h2>Basic statistical concepts</h2>
          {/* <br />
          <br /> */}
          <i>Coming soon.</i>
        </div>
        <div label="Fallacies">
          <h2>Logical fallacies in argumentation</h2>
          These are the most common fallacius arguments you should <i>usually</i> avoid.
          <br />
          <br />
          <i>Coming soon.</i>
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
