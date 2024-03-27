import { BrowserRouter, Routes, Route } from "react-router-dom";
import Players from "./pages/players";
import AddPlayer from "./pages/addPlayer";
import UpdatePlayer from "./pages/updatePlayer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Players/>}/>
          <Route path="/addPlayer" element={<AddPlayer/>}/>
          <Route path="/updatePlayer" element={<UpdatePlayer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
