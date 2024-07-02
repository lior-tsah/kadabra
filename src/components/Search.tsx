import React from "react";
import SearchIcon from "../assets/top-bar-icons/search.svg";
import "./styles.css";
const Search: React.FC = () => {
  return (
    <div className="search-input">
      <input className="input-btn-txt" placeholder="Search" />
      <img className="input-svg" src={SearchIcon} alt="icon" />
    </div>
  );
};
export default Search;
