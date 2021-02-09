import "./StyleFirstPage.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

import { Link } from "react-router-dom";

function FirstPage() {
  const [playerName, setPlayerName] = useState("");
  const handleClick = () => {
    var name = playerName;
    localStorage.setItem("name", name);

    console.log(playerName);
  };
  var storedValue = localStorage.getItem("name");
  console.log(storedValue);

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
              {/* <button
                
                type="button"
                className="computerBtn btn btn-outline-primary"
                onClick={handleClick}
              >
                Play The Computer
              </button> */}
              <Link
                to="/Pages/ComputervsPlayer"
                className="computerBtn btn btn-outline-primary"
                onClick={handleClick}
              >
                Play the Computer
              </Link>
              <button
                className="humanBtn btn btn-outline-primary"
                type="button"
                onClick={() => console.log(playerName)}
              >
                Play a Human
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
