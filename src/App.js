import './css/App.scss';
import Home from "./home";
import {
  BrowserRouter, Routes,
  Route,
} from "react-router-dom";



function App() {
  /**Renders different components depending on path */
  return <div className="app">
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    
  </div>;
}

export default App;