import Skeleton from 'react-loading-skeleton';
import Card from '../Card/Card';
import './Grid.css';
import { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import CardSkelton from '../CardSkeleton/CardSkeleton';

const Grid = ({ coins, loading }) => {
  return (
    <>
      <div className="grid">
        {coins.length !== 0 ? (
          coins.map((coin, key) => {
            return loading ? (
              <CardSkelton
                name={coin.name}
                uuid={coin.uuid}
                img={coin.iconUrl}
                cap={coin.marketCap}
                price={coin.price}
              />
            ) : (
              <Card
                name={coin.name}
                uuid={coin.uuid}
                img={coin.iconUrl}
                cap={coin.marketCap}
                price={coin.price}
              />
            );
          })
        ) : (
          <h1>No coins available with this name</h1>
        )}
      </div>
    </>
  );
};

export default Grid;
