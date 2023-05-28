import '../Card/Card.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CardSkelton = ({ uuid, name, img, price, cap }) => {
  return (
    <div className="card">
      <div className="card-title">
        <div className="image-holder">
          <Skeleton
            circle
            height={50}
            width={50}
            containerClassName="avatar-skeleton"
          />
        </div>

        <Skeleton width={150} />
      </div>
      <div className="card-body">
        <Skeleton
          highlightColor="#97a2b5"
          baseColor="white"
          className="cardImgLoading"
          count={3}
        />
      </div>
    </div>
  );
};

export default CardSkelton;
