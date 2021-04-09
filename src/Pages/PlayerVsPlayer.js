import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { socket } from "../Backend/client-code";

function PlayerVsPlayer() {
  const [playerTwoList, setPlayerTwoList] = useState("");
  const [playerList, setPlayerList] = useState("");
  const [playerCount, setPlayerCount] = useState(0);
  const [playerTwoCount, setPlayerTwoCount] = useState(0);
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");

  // Player Names from server
  socket.on("player one", (name) => setPlayerOneName(name));
  socket.on("player two", (name) => setPlayerTwoName(name));

  const handleClick = () => {};

  //count for points

  useEffect(() => {
    if (playerList === "✌️" && playerTwoList === "👊") {
      return setPlayerTwoCount(playerTwoCount + 1);
    }
    if (playerList === "✋" && playerTwoList === "✌️") {
      return setPlayerTwoCount(playerTwoCount + 1);
    }
    if (playerList === "👊" && playerTwoList === "✋") {
      return setPlayerTwoCount(playerTwoCount + 1);
    }
    if (playerList === "👊" && playerTwoList === "✌️") {
      setPlayerCount(playerCount + 1);
    }
    if (playerList === "✋" && playerTwoList === "👊") {
      setPlayerCount(playerCount + 1);
    }
    if (playerList === "✌️" && playerTwoList === "✋") {
      setPlayerCount(playerCount + 1);
    }
  }, [playerTwoList, playerList]);

  // winner code
  useEffect(() => {
    if (playerCount >= 3) {
      alert();
      setPlayerCount(0);
      setPlayerTwoCount(0);
      setPlayerList("");
      setPlayerTwoList("");
    }

    if (playerTwoCount >= 3) {
      alert();
      setPlayerCount(0);
      setPlayerTwoCount(0);
      setPlayerList("");
      setPlayerTwoList("");
    }
  }, [playerTwoCount, playerCount]);

  return (
    <div className="App">
      <button
        id="rock"
        type="button"
        className="selection"
        value="👊"
        onClick={(e) => {
          let playerValue = e.target.value;
          setPlayerList(playerValue);
        }}
      >
        👊
      </button>
      <button
        id="paper"
        type="button"
        className="selection"
        value="✋"
        onClick={(e) => {
          let playerValue = e.target.value;
          setPlayerList(playerValue);
          handleClick();
        }}
      >
        ✋
      </button>
      <button
        id="scissors"
        type="button"
        className="selection"
        value="✌️"
        onClick={(e) => {
          let playerValue = e.target.value;
          setPlayerList(playerValue);
          handleClick();
        }}
      >
        ✌️
      </button>
      <div className=" container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <h4 className="titles">
              {playerOneName}
              <span className="count">{playerCount}</span>
            </h4>
            <div>
              <ul>
                <li className="listItem">{playerList}</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6">
            <h4 className="titles">
              {playerTwoName}
              <span className="count">{playerTwoCount}</span>
            </h4>
            <div id="computerPlayer">
              <ul>
                <li className="listItem">{playerTwoList}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerVsPlayer;
