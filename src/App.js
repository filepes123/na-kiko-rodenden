import React, { useEffect, useState, useMemo } from "react";
import "./App.css";
import chestitki from "./consts/congrats";
import { Card, Button } from "react-bootstrap";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

function App() {
  const { width, height } = useWindowSize();
  const [playing, setPlaying] = useState(false);
  const [start, setStart] = useState(false);
  const audio = useMemo(() => {
    const audio1 = new Audio("audio/uck");
    return audio1;
  }, []);

  useEffect(() => {
    if (!playing && start) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [playing, start, audio]);
  const handleAudio = (zvuk) => {
    const audio = new Audio(zvuk);
    setPlaying(true);
    audio.play();
    audio.onended = function () {
      setPlaying(false);
    };
  };
  return (
    <div className="wrapper">
      <div className="cards">
        {!start ? (
          <Button onClick={() => setStart(true)} size="lg" variant="primary">
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
