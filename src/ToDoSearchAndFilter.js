function TopSearch(props) {
  return (
    <div className="filter-search-box">
      <p>filter and Search</p>
      <p className="search">
        <input type="text" value={props.searchText} onChange={props.searchBoxChangeEvent} />
        <button className="todoPostButton" onClick={props.searchButClickEvent}>
          Search
        </button>
      </p>
      <p></p>
      <p className="search">
        <label>
          <input type="checkbox" id="highPriorityCheckMark" onChange={props.checkBoxChangeEvent} />
          Show High Priority Only
        </label>
        <button className="todoPostButton" onClick={props.filterButtonEvent}>
          Filter
        </button>
      </p>
    </div>
  );
}

export default TopSearch