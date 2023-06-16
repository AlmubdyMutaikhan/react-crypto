import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Coin.css';
import Skel from '../Skel/Skel';
import CoinTable from '../CoinTable/CoinTable';
const Coin = ({}) => {
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState({});
  const params = useParams();

  const options = {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token':
        'coinranking641b8e03c6689a09d436e7dce199f6a971f309426c50efb3',
    },
  };
  const loadCoin = () => {
    fetch('https://api.coinranking.com/v2/coin/' + params.uuid, options)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result.data.coin);
        setCoin(result.data.coin);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadCoin();
  }, []);

  return (
    <div className="coin-container">
      <div className="coin-stats">
        <div className="coin-table">
          <h1>{coin.name} statistics</h1>
          <CoinTable coin={coin} style={{ width: '50%' }} />
        </div>
        <div className="coin-graph">
          <h1>Graph</h1>
        </div>
      </div>

      <div className="coin-info">
        <h1>Description: </h1>
        <p>
          {coin.description !== undefined
            ? coin.description
            : 'Loading, please wait'}
        </p>
      </div>
    </div>
  );
};

export default Coin;
