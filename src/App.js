import "./App.css";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import Output from "./Components/output-list/Output";
import { options } from "./backgroundOptions";
import Searchbar from "./Components/search-bar/Searchbar";

function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <div className="App">

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />

        <Searchbar />
        <Output></Output>
    </div>
  );
}

export default App;
