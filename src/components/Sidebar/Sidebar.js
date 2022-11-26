import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterBy } from "../../store/slices/country";
import "./Sidebar.css";

const Sidebar = ({ isOpen }) => {
  const { letters } = useSelector((store) => store.countries);
  const dispatch = useDispatch();
  const getFilterBy = (e) => {
    dispatch(changeFilterBy(e.target.innerText));
  };
  return (
    <aside className={`sidebar ${isOpen ? "active" : ""}`}>
      <p>Filter by alphabet</p>
      <ul className="alphabet-list">
        <li>
          <button onClick={getFilterBy}>All</button>
        </li>
        {letters.map((alphabet, index) => (
          <li key={index}>
            <button onClick={getFilterBy}>{alphabet}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
