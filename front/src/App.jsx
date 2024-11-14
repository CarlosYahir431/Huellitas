import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Inicio from "./Screens/Inicio";
import Login from "./Screens/Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
