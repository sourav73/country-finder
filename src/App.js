import { useState } from "react";
import Countries from "./components/Countries/Countries";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="container">
        <Sidebar isOpen={isOpen} />
        <Countries />
      </div>
    </div>
  );
}

export default App;
