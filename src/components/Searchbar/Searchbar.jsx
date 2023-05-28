import { useState } from 'react';
import './Searchbar.css';
import debounce from 'lodash.debounce';

const Searchbar = ({ sortElements }) => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);

  const handleQuery = (e) => {
    setQuery(e?.target?.value);
    sortElements(e?.target?.value);
  };

  const debounceChange = debounce(handleQuery, 300);
  const ar = ['tt', 'tt', 'aa', 'yy', 'tt', 'tt', 'aa', 'yy'];
  return (
    <div className="search-wrapper">
      <div className="search-bar">
        <input
          type="text"
          className="searchinp"
          placeholder="BTC.."
          onChange={debounceChange}
        />
        <input type="submit" value={'search'} className="searchbtn" />
      </div>
    </div>
  );
};

export default Searchbar;

// TODO
/*
1 - proper way to pass comps as props

*/
