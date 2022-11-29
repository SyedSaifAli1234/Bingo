import Grid from "./components/Grid";
import Bingo from "./components/Bingo";
import './responsive.css';

const App =()=> {

  return (
      <>
          <div id={"mainDiv"} className="App">
              <Bingo/>
              <Grid/>
          </div>
      </>
  );
}

export default App;
