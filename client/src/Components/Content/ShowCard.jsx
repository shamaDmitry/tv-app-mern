import classNames from 'classnames';
import { Link } from 'react-router-dom';

const ShowCard = ({ data, className }) => {
  return (
    <div className={classNames("w-full transition border-2 border-teal-600 hover:shadow-xl")}>
      <figure className="min-h-[50px]">
        <Link to="/show/${id}">
          <img
            className="w-full"
            src="https://static.tvmaze.com/uploads/images/medium_portrait/476/1190697.jpg"
            alt="The Voice"
          />
        </Link>

        <figcaption className="p-3 text-white bg-teal-600">
          <h2 className="mb-2 font-semibold">
            <Link to="/show/${id}" className="hover:underline">
              The Voice
            </Link>
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
