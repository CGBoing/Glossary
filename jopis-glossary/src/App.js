import React from 'react';
import Tabs from "./components/Tabs";
import "./App.css";
import Accordion from './components/Accordion';

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
                <strong>Common Name:</strong> American Alligator
          </p>
              <p>
                <strong>Distribution:</strong> Texas to North Carolina, US
          </p>
              <p>
                <strong>Endangered Status:</strong> Currently Not Endangered
          </p>
            </div>
            <div label='Analysis of Variance'>
              <p>
                <i>Coming soon.</i>
                <strong>Common Name:</strong> Chinese Alligator
          </p>
              <p>
                <strong>Distribution:</strong> Eastern China
          </p>
              <p>
                <strong>Endangered Status:</strong> Critically Endangered
          </p>
            </div>
          </Accordion>
        </div>
        <div label="Fallacies">
          <h2>Logical fallacies in argumentation</h2>
          These are the most common fallacious arguments you should <i>usually</i> avoid.
          <br />
          <br />
          <i>Coming soon.</i>
          <br />
          <br />
          <Accordion>
            <div label="Student's t test">
              <p>
                <i>Coming soon.</i>
                <strong>Common Name:</strong> American Alligator
          </p>
              <p>
                <strong>Distribution:</strong> Texas to North Carolina, US
          </p>
              <p>
                <strong>Endangered Status:</strong> Currently Not Endangered
          </p>
            </div>
            <div label='Analysis of Variance'>
              <p>
                <i>Coming soon.</i>
                <strong>Common Name:</strong> Chinese Alligator
          </p>
              <p>
                <strong>Distribution:</strong> Eastern China
          </p>
              <p>
                <strong>Endangered Status:</strong> Critically Endangered
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
