import "./App.css";
import chestitki from "./consts/congrats";
import { Card, Button } from "react-bootstrap";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

function App() {
  const { width, height } = useWindowSize()
  const handleAudio = (zvuk) =>{
    const audio = new Audio(zvuk)
    audio.play();
  }
  return (
    <div className="wrapper">
      <div className="cards">
        {chestitki.map((data) => (
          <Card className="card" style={{ width: "18rem" }}>
            <Card.Img className="card-img" variant="top" src={data.slika} />
            <Card.Body className="card-body">
              <Card.Title>{data.ime}</Card.Title>
              <Button onClick={()=> handleAudio(data.audio)}variant="primary">Chestitka</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Confetti
      width={width}
      height={height}
    />
    </div>
  );
}

export default App;
