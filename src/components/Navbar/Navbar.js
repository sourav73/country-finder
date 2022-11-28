import Search from "../Search/Search";
import "./Navbar.css";

const Navbar = ({ isOpen, setIsOpen }) => {
  return (
    <nav>
      <button onClick={() => setIsOpen(!isOpen)}>
        <div className={`burger ${isOpen ? "active" : ""}`}>
          <div className="bar-1"></div>
          <div className="bar-2"></div>
          <div className="bar-3"></div>
        </div>
      </button>
      <Search />
    </nav>
  );
};

export default Navbar;
