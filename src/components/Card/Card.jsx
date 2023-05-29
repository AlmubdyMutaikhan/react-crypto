import { useNavigate } from 'react-router-dom';
import './Card.css';

const Card = ({ uuid, name, img, price, cap }) => {
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
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={() => {
        navigate('/coin/' + uuid);
      }}
    >
      <div className="card-title">
        <div className="image-holder">
          <img src={img} alt={name} />
        </div>

        <p style={{ fontSize: '10px' }}>{uuid}</p>
      </div>
      <div className="card-body">
        <h3>{name}</h3>
        <p>Market cap: {formatNumber(cap)}$</p>
        <p>Price: {formatNumber(price)}$</p>
      </div>
    </div>
  );
};

export default Card;
