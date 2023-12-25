import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

const PersonCard = ({ data }) => {
  return (
    <div
      className={classNames(
        'w-full transition border-2 border-teal-600 hover:shadow-xl flex flex-col'
      )}
    >
      <figure className="min-h-[50px] flex-1 flex flex-col">
        <Link to={`/people/${data.id}`} className='min-h-[400px]'>
          <img className="w-full" src={data.image?.medium || ""} alt="The Voice" />
        </Link>

        <figcaption className="flex-1 p-3 text-white bg-teal-600">
          <h2 className="flex items-start gap-2 mb-2 font-semibold">
            <Link to={`/people/${data.id}`} className="flex-1 hover:underline">
              {data.name}
            </Link>
          </h2>
        </figcaption>
      </figure>
    </div>
  );
};

export default PersonCard;
