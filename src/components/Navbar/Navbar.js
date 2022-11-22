import "./Navbar.css";

const Navbar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <nav>
        <button onClick={() => setIsOpen(!isOpen)}>
          <div className={`burger ${isOpen ? "active" : ""}`}>
            <div className="bar-1"></div>
            <div className="bar-2"></div>
            <div className="bar-3"></div>
          </div>
        </button>
      </nav>
      {/* <aside className={`sidebar ${isOpen ? "active" : ""}`}>
        <Sidebar />
      </aside> */}
    </>
  );
};

export default Navbar;
