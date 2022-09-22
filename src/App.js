import './styles/global.scss';
import Timer from './components/Timer/Timer';
import Container from './components/Container/Container';
import { useState, useEffect } from 'react';
import Button from './components/Button/Button';


function App() {

  const [time, setTime] = useState(0);
  const [active, setActive] = useState(null)

  useEffect(() => {
    let interval;
    if (active) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!active) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
    }, [active]);

  const startRunning = () => {
    setActive(true)
  }

  const stopRunning = () => {
    setActive(false)
  }

  const resetRunning = () => {
    setTime(0);
    setActive(false)
  }

  return (
    <Container>
      <Timer time={time}/>
      <div className="button">
        <Button onClick={()=>startRunning()}>Start</Button>
        <Button onClick={()=>stopRunning()}>Stop</Button>
        <Button onClick={()=>resetRunning()}>Reset</Button>
      </div>
    </Container>
  );
}

export default App;
