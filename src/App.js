import React, { useState, useMemo } from "react";
import "./App.css";
import chestitki from "./consts/congrats";
import { Card, Button } from "react-bootstrap";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

function App() {
  const { width, height } = useWindowSize();
  const [start, setStart] = useState(false);
  const audio = useMemo(() => {
    const audio1 = new Audio("audio/uck");
    return audio1;
  }, []);

  const handleBackgroundAudio = (control) =>{
    setStart(true);
    if(control){
      audio.play();
    }else{
      audio.pause();
    }
  }
  const handleAudio = (zvuk) => {
    const audio = new Audio(zvuk);
    handleBackgroundAudio(false)
    audio.play();
    audio.onended = function () {
      handleBackgroundAudio(true)
    };
  };
  return (
    <div className="wrapper">
      <div className="cards">
        {!start ? (
          <Button onClick={() => handleBackgroundAudio(true)} size="lg" variant="primary">
            STISNI
          </Button>
        ) : (
          <>
            {chestitki.map((data) => (
              <Card className="card" style={{ width: "18rem" }}>
                <Card.Img className="card-img" variant="top" src={data.slika} />
                <Card.Body className="card-body">
                  <Card.Title>{data.ime}</Card.Title>
                  <Button
                    onClick={() => handleAudio(data.audio)}
                    variant="primary"
                  >
                    Chestitka
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </>
        )}
      </div>
      <Confetti width={width} height={height} numberOfPieces={25} />
    </div>
  );
}

export default App;
