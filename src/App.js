import {Routes, Route } from "react-router-dom"
import Home from "./Home"
import Upload from "./Upload"
import Data from "./Data"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="upload" element={ <Upload/> } />
        <Route path="data" element={ <Data/> } />
      </Routes>
    </div>
  );
}

export default App;
