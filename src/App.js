import Grid from "./components/Grid";
import {data} from "./components/Helper";
import Bingo from "./components/Bingo";

const App =()=> {

  return (
      <>
          <div className="App" style={{height:"100vh", background: "linear-gradient(90deg, rgba(98,173,230,1) 0%, rgba(71,117,115,1) 100%)"}}>
              <Bingo/>
              <Grid data={data}/>
          </div>
      </>
  );
}

export default App;
