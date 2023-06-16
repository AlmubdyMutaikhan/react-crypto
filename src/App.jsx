import './App.css';
import Grid from './components/Grid/Grid';
import Header from './components/Header/Header';
import PaginationButton from './components/PaginationButtons/PaginationButtons';
import Searchbar from './components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import { loadCards } from './services/Coins.services';
function App() {
  const [coins, setCoins] = useState(
    new Array(8).fill({
      name: '',
      img: '',
      uuid: '',
      cap: '',
      price: '',
    })
  );
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  const pagingNext = () => {
    updatePage('+');
  };

  const pagingPrev = () => {
    if (offset >= 10) {
      updatePage('-');
    }
  };

  const sortElements = (query) => {
    const coinsTmp = updatePage(0);
    if (query.length !== 0) {
      setCoins((coins) =>
        coinsTmp.filter((coin) => coin.name.toLowerCase().includes(query))
      );
    } else {
      setCoins(coinsTmp);
    }
  };

  const updatePage = (sign) => {
    const change = sign === '+' ? 10 : -10;
    loadCards(offset + change, setCoins, setLoading);
    setOffset((offset) => offset + change);
  };

  useEffect(() => {
    loadCards(offset, setCoins, setLoading);
  }, []);

  return (
    <>
      <Searchbar sortElements={sortElements} />
      <Grid coins={coins} loading={loading} />
      <PaginationButton pagingNext={pagingNext} pagingPrev={pagingPrev} />
    </>
  );
}

export default App;
