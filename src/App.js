import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Calculator from "./components/Calculator";
import History from "./components/History";
function App() {
  return (
    <div>
     <Router>
    <Routes>
      <Route exact path="/" element={<Calculator />} />
      <Route exact path="/history" element={<History />} />
    </Routes>
</Router>
    </div>
  );
}

export default App;
