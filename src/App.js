import { useEffect, useState } from "react";
import {checkWin} from './checkwin';
import "./App.css";
import logo from './images/logo192.png';

export default function App() {
  const [ut, setUt] = useState(true);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [winner, setWinner] = useState(-1);

  const [zx, setZx] = useState({
    d0: "",
    d1: "",
    d2: "",
    d3: "",
    d4: "",
    d5: "",
    d6: "",
    d7: "",
    d8: ""
  });
  const clr = () => {
    setZx({
      d0: "",
      d1: "",
      d2: "",
      d3: "",
      d4: "",
      d5: "",
      d6: "",
      d7: "",
      d8: ""
    });
  };

  const handleReplay = () => {
    setOScore(0);
    setXScore(0);
    setUt(true);
    clr();
  };

  const allFull = () => {
    for (let dt in zx) {
      console.log(`${dt} `);
      if (zx[dt] === "") return false;
    }
    return true;
  };

  useEffect(() => {
    let des = checkWin(zx);
    if (des === "x") {
      // setTimeout()
      setWinner(1);
      const se = () => {
        setWinner(-1);
      };
      setTimeout(se, 3000);
      setXScore(xScore + 1);
      clr();
      // console.log("x-win");
    }
    if (des === "o") {
      setWinner(0);
      const se = () => {
        setWinner(-1);
      };
      setTimeout(se, 3000);
      setOScore(oScore + 1);
      clr();
      // console.log("o-win");
    }

    if (des === "-1" && allFull()) {
      setWinner(11);
      const se = () => {
        setWinner(-1);
      };
      setTimeout(se, 3000);
      clr();
      // console.log("match-draw");
    }
  }, [zx]);

  // console.log(zx);

  const handleSet = (e) => {
    if (zx.d0 === "" && e.target.className === "d0") {
      if (ut) setZx({ ...zx, d0: "x" });
      else setZx({ ...zx, d0: "o" });
      setUt((pre) => !pre);
    } else if (zx.d1 === "" && e.target.className === "d1") {
      if (ut) setZx({ ...zx, d1: "x" });
      else setZx({ ...zx, d1: "o" });
      setUt((pre) => !pre);
    } else if (zx.d2 === "" && e.target.className === "d2") {
      if (ut) setZx({ ...zx, d2: "x" });
      else setZx({ ...zx, d2: "o" });
      setUt((pre) => !pre);
    } else if (zx.d3 === "" && e.target.className === "d3") {
      if (ut) setZx({ ...zx, d3: "x" });
      else setZx({ ...zx, d3: "o" });
      setUt((pre) => !pre);
    } else if (zx.d4 === "" && e.target.className === "d4") {
      if (ut) setZx({ ...zx, d4: "x" });
      else setZx({ ...zx, d4: "o" });
      setUt((pre) => !pre);
    } else if (zx.d5 === "" && e.target.className === "d5") {
      if (ut) setZx({ ...zx, d5: "x" });
      else setZx({ ...zx, d5: "o" });
      setUt((pre) => !pre);
    } else if (zx.d6 === "" && e.target.className === "d6") {
      if (ut) setZx({ ...zx, d6: "x" });
      else setZx({ ...zx, d6: "o" });
      setUt((pre) => !pre);
    } else if (zx.d7 === "" && e.target.className === "d7") {
      if (ut) setZx({ ...zx, d7: "x" });
      else setZx({ ...zx, d7: "o" });
      setUt((pre) => !pre);
    } else if (zx.d8 === "" && e.target.className === "d8") {
      if (ut) setZx({ ...zx, d8: "x" });
      else setZx({ ...zx, d8: "o" });
      setUt((pre) => !pre);
    }
    // console.log(e.target.className);
  };

  return (
    <div className="App">
      <div className='logo'>
        <img src={logo} alt='tic-tac-toe' className='logo-img' />
        <h1>Tic Tac Toe</h1>
      </div>
      <div className="o-x">
        <div
          className="d0"
          style={
            zx.d0 === "x"
              ? { color: "green"}
              : zx.d0 === "o"
              ? { color: "red" }
              : {}
          }
          onClick={handleSet}
        >
          {zx.d0}
        </div>
        <div
          className="d1"
          style={
            zx.d1 === "x"
              ? { color: "green" }
              : zx.d1 === "o"
              ? { color: "red" }
              : {}
          }
          onClick={handleSet}
        >
          {zx.d1}
        </div>
        <div
          className="d2"
          style={
            zx.d2 === "x"
              ? { color: "green" }
              : zx.d2 === "o"
              ? { color: "red" }
              : {}
          }
          onClick={handleSet}
        >
          {zx.d2}
        </div>
        <div
          className="d3"
          style={
            zx.d3 === "x"
              ? { color: "green" }
              : zx.d3 === "o"
              ? { color: "red" }
              : {}
          }
          onClick={handleSet}
        >
          {zx.d3}
        </div>
        <div
          className="d4"
          style={
            zx.d4 === "x"
              ? { color: "green" }
              : zx.d4 === "o"
              ? { color: "red" }
              : {}
          }
          onClick={handleSet}
        >
          {zx.d4}
        </div>
        <div
          className="d5"
          style={
            zx.d5 === "x"
              ? { color: "green" }
              : zx.d5 === "o"
              ? { color: "red" }
              : {}
          }
          onClick={handleSet}
        >
          {zx.d5}
        </div>
        <div
          className="d6"
          style={
            zx.d6 === "x"
              ? { color: "green" }
              : zx.d6 === "o"
              ? { color: "red" }
              : {}
          }
          onClick={handleSet}
        >
          {zx.d6}
        </div>
        <div
          className="d7"
          style={
            zx.d7 === "x"
              ? { color: "green" }
              : zx.d7 === "o"
              ? { color: "red" }
              : {}
          }
          onClick={handleSet}
        >
          {zx.d7}
        </div>
        <div
          className="d8"
          style={
            zx.d8 === "x"
              ? { color: "green" }
              : zx.d8 === "o"
              ? { color: "red" }
              : {}
          }
          onClick={handleSet}
        >
          {zx.d8}
        </div>
        {/* className={winner === (1 || 0) ? "win active" : "win"} */}
        <div
          className={
            winner === 1 || winner === 11 || winner === 0 ? "win active" : "win"
          }
        >
          {winner === 11 && (
            <div className="winner-draw">
              Opps Match
              <br />Draw !
            </div>
          )}
          {winner === 1 && (
            <div className="winner-x">
              Winner <br /> X !
            </div>
          )}

          {winner === 0 && (
            <div className="winner-o">
              Winner<br />O !
            </div>
          )}
        </div>
      </div>
      <div className="turn-score">
        <div
          className="turn"
          style={ut ? { color: "green" } : { color: "red" }}
        >
          {ut ? "X" : "O"}
        </div>
        <div className="o-x-score">
          <div className="x-score">X-score : {xScore}</div>
          <div className="o-score">O-score : {oScore}</div>
        </div>
      </div>
      <div onClick={handleReplay} className="replay">
        Replay
      </div>
    </div>
  );
}
