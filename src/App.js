import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";

function App() {
  const [computerList, setComputerList] = useState("");
  const [playerList, setPlayerList] = useState("");
  const [playerCount, setPlayerCount] = useState(0);
  const [computerCount, setComputerCount] = useState(0);

  var rock = "👊";
  var paper = "✋";
  var scissors = "✌️";

  const computerSelectionArr = [rock, paper, scissors];

  // random computer choice code below
  const computerRandomChoice = () => {
    let randomArr =
      computerSelectionArr[
        Math.floor(Math.random() * computerSelectionArr.length)
      ];
    return randomArr;
  };
  const handleClick = () => {
    let computerValue = computerRandomChoice();
    setComputerList(computerValue);
    // setTimeout(function () {
    //   setPlayerList("");
    //   setComputerList("");
    // }, 3000);
  };

  //count for points

  useEffect(() => {
    if (playerList === "✌️" && computerList === "👊") {
      return setComputerCount(computerCount + 1);
    }
    if (playerList === "✋" && computerList === "✌️") {
      return setComputerCount(computerCount + 1);
    }
    if (playerList === "👊" && computerList === "✋") {
      return setComputerCount(computerCount + 1);
    }
    if (playerList === "👊" && computerList === "✌️") {
      setPlayerCount(playerCount + 1);
    }
    if (playerList === "✋" && computerList === "👊") {
      setPlayerCount(playerCount + 1);
    }
    if (playerList === "✌️" && computerList === "✋") {
      setPlayerCount(playerCount + 1);
    }
  }, [computerList, playerList]);

  // winner code
  useEffect(() => {
    if (playerCount >= 3) {
      alert("Player Wins!");
      setPlayerCount(0);
      setComputerCount(0);
      setPlayerList("");
      setComputerList("");
    }

    if (computerCount >= 3) {
      alert("Computer Wins!");
      setPlayerCount(0);
      setComputerCount(0);
      setPlayerList("");
      setComputerList("");
    }
  }, [computerCount, playerCount]);

  return (
    <div className="App">
      <button
        type="button"
        className="selection"
        value="👊"
        onClick={(e) => {
          let playerValue = e.target.value;
          setPlayerList(playerValue);
          handleClick();
        }}
      >
        👊
      </button>
      <button
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
              You <span className="count">{playerCount}</span>
            </h4>
            <div>
              <ul>
                <li className="listItem">{playerList}</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6">
            <h4 className="titles">
              Computer <span className="count">{computerCount}</span>
            </h4>
            <div id="computerPlayer">
              <ul>
                <li className="listItem">{computerList}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
