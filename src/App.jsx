import './App.css';
import Grid from './components/Grid/Grid';
import Header from './components/Header/Header';
import PaginationButton from './components/PaginationButtons/PaginationButtons';
import Searchbar from './components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';

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

  const [allCoins, setAllCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token':
        'coinranking641b8e03c6689a09d436e7dce199f6a971f309426c50efb3',
    },
  };
  const loadCardsBasic = () => {
    fetch('https://api.coinranking.com/v2/coins?limit=10', options)
      .then((response) => response.json())
      .then((result) => {
        console.log('res');
        setCoins(result.data.coins);
        setLoading(false);
      });
  };

  const loadCards = () => {
    fetch('https://api.coinranking.com/v2/coins?limit=500', options)
      .then((response) => response.json())
      .then((result) => {
        console.log('res2');
        setAllCoins(result.data.coins);
      });
  };

  const pagingNext = () => {
    setCoins(updatePage(1));
  };

  const pagingPrev = () => {
    const page = parseInt(localStorage.getItem('page'));
    if (page > 1) {
      setCoins(updatePage(-1));
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

  const updatePage = (increment) => {
    let page = parseInt(localStorage.getItem('page')) + increment;
    let coins = allCoins.slice(page * 10 - 10, page * 10);
    localStorage.setItem('page', page);
    return coins;
  };

  useEffect(() => {
    loadCardsBasic();
    loadCards();
    localStorage.setItem('page', 1);
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
