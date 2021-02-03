const Header = ({ onsubmit, searchText, onchange }) => {
  return (
    <header className="App-header">
      <h2 className="title-header">Movies</h2>
      <div className="search-header">
        <form onSubmit={onsubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={searchText}
            onChange={onchange}
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
