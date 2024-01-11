import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ShowCard = ({ data, className }) => {
  return (
    <div
      className={classNames(
        'w-full transition border-2 border-teal-600 hover:shadow-xl flex flex-col'
      )}
    >
      <figure className="min-h-[50px] flex-1 flex flex-col">
        <Link to={`/shows/${data.id}`}>
          <LazyLoadImage
            className="w-full"
            src={data.image?.medium || 'https://placehold.co/300x300'}
            alt={data.name}
          />
        </Link>

        <figcaption className="flex-1 p-3 text-white bg-teal-600">
          <h2 className="flex items-start gap-2 mb-2 font-semibold">
            <Link to={`/shows/${data.id}`} className="flex-1 hover:underline">
              {data.name}
            </Link>

            <p className="flex items-center gap-1 text-sm font-medium text-yellow-300">
              <FaStar />
              {data.rating.average}
            </p>
          </h2>
        </figcaption>
      </figure>
    </div>
  );
};

export default ShowCard;
