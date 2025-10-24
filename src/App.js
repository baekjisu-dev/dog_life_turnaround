import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/main/Main";
import Info from "./pages/info/Info";
import Loading from "./pages/loading/Loading";
import Completed from "./pages/completed/Completed";
import Result from "./pages/result/Result";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <div className="main__container">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/info" element={<Info />} />
              <Route path="/loading" element={<Loading />} />
              <Route path="/completed" element={<Completed />} />
              <Route path="/result" element={<Result />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
