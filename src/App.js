import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import { Route } from "react-router-dom";
import FirstPage from "./Pages/FirstPage";
import ComputerVsPlayer from "./Pages/ComputervsPlayer";
import PlayerVsPlayer from "./Pages/PlayerVsPlayer";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={FirstPage} />
      <Route
        exact
        path="/Pages/ComputervsPlayer"
        component={ComputerVsPlayer}
      />
      <Route exact path="/Pages/PlayerVsPlayer" component={PlayerVsPlayer} />
    </div>
  );
}

export default App;
