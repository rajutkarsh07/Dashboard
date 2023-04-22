import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard/Dashboard";
// import Signin from "./pages/Signin/Signin";
import Whole from "./pages/Whole/Whole";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Whole />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
