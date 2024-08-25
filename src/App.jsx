import { Main } from "./pages/Main/Main";
import { Login } from "./pages/Login/Login";
import { AnimeProvider } from "./contexts/AnimeContext";

import "./App.css";

function App() {
  return (
    <AnimeProvider>
      <div className="appContainer">
        {/* <Login /> */}
        <Main />
      </div>
    </AnimeProvider>
  );
}

export default App;
