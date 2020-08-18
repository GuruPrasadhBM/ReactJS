import React from 'react';
import logo from './logo.svg';
import './App.css';
import GreetFnComp from './components/GreetFnComp';
import WelcomeClassCompo from './components/WelcomeClassCompo';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <GreetFnComp name="Bruce" heroName="Batman">
        Children Props
      </GreetFnComp>
      <GreetFnComp name="Mark" heroName="Superman">
        <button>Hi</button>
      </GreetFnComp>
      <GreetFnComp name="Diana" heroName="Wonderwoman" />
      <WelcomeClassCompo name="Bruce" heroName="Batman">
        Children Props
      </WelcomeClassCompo>
      <WelcomeClassCompo name="Mark" heroName="Superman">
        <button>Hi</button>
      </WelcomeClassCompo>
      <WelcomeClassCompo name="Diana" heroName="Wonderwoman" />
      <Message />
    </div>
  );
}

export default App;
