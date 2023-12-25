import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const ShowCard = ({ data, className }) => {
  return (
    <div
      className={classNames(
        'w-full transition border-2 border-teal-600 hover:shadow-xl flex flex-col'
      )}
    >
      <figure className="min-h-[50px] flex-1 flex flex-col">
        <Link to={`/show/${data.id}`}>
          <img className="w-full" src={data.image.medium} alt="The Voice" />
        </Link>

        <figcaption className="flex-1 p-3 text-white bg-teal-600">
          <h2 className="flex items-start gap-2 mb-2 font-semibold">
            <Link to={`/show/${data.id}`} className="flex-1 hover:underline">
              {data.name}
            </Link>

            <p className="flex items-center gap-1 text-sm font-medium text-yellow-300">
              <FaStar></FaStar>
              {data.rating.average}
            </p>
          </h2>
          <h3 className="leading-5">
            <Link to="/next-episode" className="hover:underline">
              The Blind Auditions, Part 6
            </Link>
          </h3>
        </figcaption>
      </figure>
    </div>
  );
};

export default ShowCard;
