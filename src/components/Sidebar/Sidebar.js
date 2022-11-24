import React from "react";
import { useSelector } from "react-redux";
import "./Sidebar.css";

const Sidebar = ({ isOpen }) => {
  const { letters } = useSelector((store) => store.countries);
  return (
    <aside className={`sidebar ${isOpen ? "active" : ""}`}>
      <p>Filter by alphabet</p>
      <ul className="alphabet-list">
        <li>
          <button>All</button>
        </li>
        {letters.map((alphabet, index) => (
          <li key={index}>
            <button>{alphabet}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
