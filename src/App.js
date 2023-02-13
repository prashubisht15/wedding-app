import "./App.css";
import Home from "./Home";
import Details from "./Details";
import { SnackbarProvider } from "notistack";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <SnackbarProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </Router>
      </SnackbarProvider>
    </div>
  );
}

export default App;
