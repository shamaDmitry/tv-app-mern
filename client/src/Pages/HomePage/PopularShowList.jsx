import Spinner from '../../Components/atoms/Spinner';
import ShowCard from '../../Components/Content/ShowCard';
import { Link } from 'react-router-dom';

const PopularShowList = ({ popular }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-2 gap-4 mb-8 sm:grid-cols-3 xl:grid-cols-4">
        {!popular && <Spinner className="m-4 mx-auto border-blue-500" />}

        {popular &&
          popular.map((item, index) => {
            return <ShowCard key={index} data={item} />;
          })}
      </div>

      <Link
        to="/shows"
        className="inline-flex px-4 py-2 text-teal-600 transition border border-teal-600 hover:bg-teal-600 hover:text-white"
      >
        More shows
      </Link>
    </div>
  );
};

export default PopularShowList;
