import remove from "../assets/Img/icon-remove.svg"

const Header = ({ filter, clearFilters, removeFilter, searchTerm, onSearch, jobCount, loading }) => {
  return (
    <>
      <header>
        {filter.length > 0 && (
          <section className="flex">
            <div className="flex">
              {filter.map((filters, index) => (
                <p key={index} className="filter">
                  <span>{filters.value}</span>
                  <button onClick={() => removeFilter(filters)}>
                    <img src={remove} alt="remove" />
                  </button>
                </p>
              ))}
            </div>
            <button className="clear" onClick={clearFilters}>Clear</button>
          </section>
        )}
      </header>
      
      <div className="search-wrapper">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search jobs by title, company, or keyword..."
            value={searchTerm}
            onChange={onSearch}
            name="search-input"
            className="search-input"
          />
          <div className="job-count">
            {loading ? 'Loading...' : `${jobCount} jobs found`}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;