import "./StyleFirstPage.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function FirstPage() {
  const [playerName, setPlayerName] = useState("");
  const handleClick = () => {
    var name = playerName;
    sessionStorage.setItem("name", name);
  };
  const playerHandleClick = () => {
    var name = playerName;
    function checkStorage() {
      if ("name" in sessionStorage) {
        sessionStorage.setItem("name2", name);
      } else sessionStorage.setItem("name", name);
    }
    checkStorage();
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
