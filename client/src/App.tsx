import React from 'react';
import './styling/App.css';
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import WeBelieve from "./Components/WeBelieve";
import FindMusic from "./Components/FindMusic";

function App() {
  return (
    <div className="App">
        <Header/>
        <Banner/>
        <WeBelieve/>
        <FindMusic/>
    </div>
  );
}

export default App;
