import { useState } from "react";
import { useSelector } from "react-redux";
import Countries from "./components/Countries/Countries";
import Modal from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { country } = useSelector((store) => store.countries);
  return (
    <div className="App">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="container">
        <Sidebar isOpen={isOpen} />
        <Countries />
      </main>
      <Modal country={country} />
    </div>
  );
}

export default App;
