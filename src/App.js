import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FirstPage from "./Pages/FirstPage";
import ComputerVsPlayer from "./Pages/ComputervsPlayer";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={FirstPage} />
      <Route
        exact
        path="/Pages/ComputervsPlayer"
        component={ComputerVsPlayer}
      />
    </div>
  );
}

export default App;
