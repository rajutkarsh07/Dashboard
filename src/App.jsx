import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Signin from "./pages/Signin/Signin";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
