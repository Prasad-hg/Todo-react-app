import { useState } from "react";

function ColorBox() {
  let styles = [
    { backgroundColor: "red", color: "white" },
    { backgroundColor: "green", color: "white" },
    { backgroundColor: "orange", color: "white" },
    { backgroundColor: "pink", color: "black" },
  ];

  let [moves, setMoves] = useState({ red: 0, green: 0, orange: 0, pink: 0 });

  let updateRed = () => {
    setMoves((prevmoves) => ({
      ...prevmoves,
      red: prevmoves.red + 1,
    }));
  };

  let updateGreen = () => {
    setMoves((prevmoves) => ({
      ...prevmoves,
      green: prevmoves.green + 1,
    }));
  };

  let updateOrange = () => {
    setMoves((prevmoves) => ({
      ...prevmoves,
      orange: prevmoves.orange + 1,
    }));
  };

  let updatePink = () => {
    setMoves((prevmoves) => ({
      ...prevmoves,
      pink: prevmoves.pink + 1,
    }));
  };

  return (
    <>
      <h3>Run the colors!</h3>
      <div>
        <p>red moves = {moves.red}</p>
        <button style={styles[0]} onClick={updateRed}>+1</button>
      </div>
      <div>
        <p>green moves = {moves.green}</p>
        <button style={styles[1]} onClick={updateGreen}>+1</button>
      </div>
      <div>
        <p>orange moves = {moves.orange}</p>
        <button style={styles[2]} onClick={updateOrange}>+1</button>
      </div>
      <div>
        <p>pink moves = {moves.pink}</p>
        <button style={styles[3]} onClick={updatePink}>+1</button>
      </div>
    </>
  );
}

export default ColorBox;
