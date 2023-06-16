const loadCards = (offset, setCoins, setLoading) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token':
        'coinranking641b8e03c6689a09d436e7dce199f6a971f309426c50efb3',
    },
  };
  fetch(
    `https://api.coinranking.com/v2/coins?limit=10&offset=${offset}`,
    options
  )
    .then((response) => response.json())
    .then((result) => {
      setCoins(result.data.coins);
      setLoading(false);
    });
};

export { loadCards };
