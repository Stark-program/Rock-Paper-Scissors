import "./StyleFirstPage.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { socket } from "../Backend/client-code";

function FirstPage() {
  const [playerName, setPlayerName] = useState("");
  const handleClick = () => {
    var name = playerName;
    console.log(1);
    socket.emit("name", name);

    console.log(2);
    console.log(playerName);
    console.log(3);
  };

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
                  onChange={(e) => {
                    setPlayerName(e.target.value);
                  }}
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
                onClick={handleClick}
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
