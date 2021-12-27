import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />}></Route>
        <Route path="done" element={<Container />}></Route>
        <Route path="active" element={<Container />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
