import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./components/pages/home/Home";

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Navigate to="/home" />} path="*" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
