import PropTypes from 'prop-types';
import { useState } from 'react';
import css from '../styles.module.css'
const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    const value = e.target.value.trimStart();
    setQuery(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (query.length === 0) return;
    onSubmit(query);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm}  onSubmit={handleSubmit}>
        <button type="submit" className={css.searchbutton}>
          <span className="searchForm-button-label"></span>
        </button>

        <input
          className={css.searchinput}
          type="text"
          autoComplete="off"
          autoFocus
          value={query}
          onChange={handleChange}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};