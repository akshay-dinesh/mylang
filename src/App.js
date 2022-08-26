import "./App.css";
import Cards from "./components/cards/Cards";
import Ratings from "./components/rating/Ratings";

function App() {
  return (
    <div className="App">
      <Ratings />
      <Cards amount={4} />
    </div>
  );
}

export default App;
