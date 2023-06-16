import './CoinTable.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Skel from '../Skel/Skel';
const CoinTable = ({ style, coin }) => {
  const formatNumber = (number) => {
    if (Math.abs(number) >= 1e9) {
      return (number / 1e9).toFixed(2) + 'B';
    } else if (Math.abs(number) >= 1e6) {
      return (number / 1e6).toFixed(2) + 'M';
    } else if (Math.abs(number) >= 1e3) {
      return (number / 1e3).toFixed(2) + 'K';
    } else {
      return Math.ceil(number * 100) / 100;
    }
  };

  const coinInfo = [
    {
      icon: 'https://cdn0.iconfinder.com/data/icons/essential-pack-4/512/3-2-64.png',
      name: 'Current price',
      data: coin ? formatNumber(coin['price']) : 'null',
    },
    {
      icon: 'https://cdn0.iconfinder.com/data/icons/essential-pack-4/512/3-2-64.png',
      name: 'Market cpa',
      data: coin ? formatNumber(coin['marketCap']) : 'null',
    },
    {
      icon: 'https://cdn0.iconfinder.com/data/icons/essential-pack-4/512/3-2-64.png',
      name: 'Current coin rank',
      data: coin ? coin['rank'] : 'null',
    },
    {
      icon: 'https://cdn0.iconfinder.com/data/icons/essential-pack-4/512/3-2-64.png',
      name: 'The highest price',
      data:
        coin && coin['allTimeHigh']
          ? formatNumber(coin['allTimeHigh']['price'])
          : 'null',
    },
  ];

  const generateTable = () => {
    return coinInfo.map((i, key) => {
      return (
        <li key={key}>
          <img src={i.icon} width={'20'} height={'20'} />

          {(typeof i.data === 'number' && isNaN(i.data)) ||
          i.data === undefined ||
          i.data === 'null' ? (
            <Skel />
          ) : (
            <p>
              {i.name}: {i.data}
            </p>
          )}
        </li>
      );
    });
  };
  return <ul className="coin-ul">{generateTable()}</ul>;
};

export default CoinTable;
