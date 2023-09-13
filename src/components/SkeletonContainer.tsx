import Skeleton from 'react-loading-skeleton';

const SkeletonContainer = () => {
  return (
    <div className="map skeleton-container">
      <Skeleton height={'100%'} width={'100%'} />
    </div>
  );
};

export default SkeletonContainer;
