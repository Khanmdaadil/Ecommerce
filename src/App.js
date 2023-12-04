import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./component/Header";
import Main from "./component/Main";
import Scroll from "./component/Scroll";
function App() {
  return (
    <div className="App">
      <Header />
      <Scroll />
      <Main />
    </div>
  );
}

export default App;
