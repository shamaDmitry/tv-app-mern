import classNames from 'classnames';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const PersonCard = ({ data }) => {
  return (
    <Link
      to={`/people/${data.id}`}
      className={classNames(
        'w-full transition border-2 border-teal-600 hover:shadow-xl flex flex-col'
      )}
    >
      <figure className="min-h-[50px] flex-1 flex flex-col">
        <div>
          <LazyLoadImage
            className="w-full h-auto"
            src={data.image?.medium || 'https://placehold.co/300x300'}
            alt={data.name}
          />
        </div>

        <figcaption className="flex-1 p-3 text-white bg-teal-600">
          <h2 className="flex items-start gap-2 mb-2 font-semibold">
            <div className="flex-1">{data.name}</div>
          </h2>
        </figcaption>
      </figure>
    </Link>
  );
};

export default PersonCard;
