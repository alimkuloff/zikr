import React, { useState, useEffect } from 'react';
import './App.css';
import beepSound from './audios/beep.mp3'; 

function App() {
  const [count, setCount] = useState(0);

  const beep = new Audio(beepSound);

  useEffect(() => {
    if (count > 0 && count % 33 === 0) {
      beep.play();
    }
  }, [count]);

  

  const handleIncrement = () => {
    setCount((prevCount) => (prevCount + 1) % 100);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Zikr qiling</h1>
        <p>يَا أَيُّهَا الَّذِينَ آَمَنُوا اذْكُرُوا اللَّهَ ذِكْرًا كَثِيرًا  وَسَبِّحُوهُ بُكْرَةً وَأَصِيلًا</p>
        <p>ya'ni: “Ey, imon keltirganlar! Allohni ko‘p zikr qilingiz va ertayu kech Unga tasbeh aytingiz!” (Ahzob surasi 41-42-oyatlar).</p>
        <div className="counter-display">
          {count}
        </div>
        <button onClick={handleIncrement} className="counter-button">
          Count
        </button>
        <button onClick={handleReset} className="reset-button">
          Reset
        </button>
      </header>
    </div>
  );
}

export default App;
