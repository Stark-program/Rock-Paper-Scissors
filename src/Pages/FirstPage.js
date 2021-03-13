import "./StyleFirstPage.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { joinRoom } from "../Backend/client-code";

function FirstPage() {
  const [playerName, setPlayerName] = useState("");
  const handleClick = () => {
    var name = playerName;
    localStorage.setItem("Player One", name);
  };
  const playerHandleClick = () => {
    var name = playerName;
    function checkStorage() {
      if ("Player One" in localStorage) {
        localStorage.setItem("Player Two", name);
      } else localStorage.setItem("Player One", name);
    }
    checkStorage();
    joinRoom();
  };
  var storedValue = localStorage.getItem("name");

  return (
    <div className="firstPage">
      <div className="container-fluid">
        <h1 className="title">Rock Paper Scissors</h1>
        <div className="row">
          <div className="col-md-12 user">
            <form className="userForm">
              <label>
                Enter Name:
                <input
                  type="text"
                  name="name"
                  value={playerName}
                  className="userField"
                  onChange={(e) => setPlayerName(e.target.value)}
                />
              </label>

              <Link
                to="/Pages/ComputervsPlayer"
                className="computerBtn btn btn-outline-primary"
                onClick={handleClick}
              >
                Play the Computer
              </Link>
              <Link
                to="/Pages/PlayerVsPlayer"
                className="computerBtn btn btn-outline-primary"
                onClick={playerHandleClick}
              >
                Play a Human
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
