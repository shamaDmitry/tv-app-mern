import { Link, useNavigate, useParams } from 'react-router-dom';
import Title from '../../Components/atoms/Title';
import showsApi from '../../api/modules/shows.api';
import { useEffect, useState } from 'react';
import Spinner from '../../Components/atoms/Spinner';
import { GrPrevious } from 'react-icons/gr';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Index = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(null);

  useEffect(() => {
    showsApi.getShow(params.id, { embed: ['episodes', 'cast'] }).then(show => {
      setShow(show);
    });
    return () => {};
  }, []);

  if (!show)
    return (
      <section className="container">
        <Spinner />
      </section>
    );

  return (
    <section className="container">
      <div className="mb-2">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-sm font-bold text-teal-600 uppercase transition hover:opacity-50 gap-x-1"
        >
          <GrPrevious />
          back
        </button>
      </div>

      <Title>{show.name}</Title>

      <div className="flex flex-col justify-start gap-4 mb-6 md:flex-row">
        <LazyLoadImage
          src={show.image?.medium || 'https://placehold.co/300x300'}
          className="block max-w-xs mx-auto overflow-hidden border rounded"
          alt=""
        />

        <div className="flex-1 px-6 py-5 border rounded shadow-md">
          <h1 className="mb-3 text-lg font-medium">Show Info</h1>
          <ul className="space-y-2">
            <li>
              <strong className="font-bold">Network</strong>:{' '}
              <span>{show.network ? show.network.name : '-'}</span>
            </li>
            <li>
              <strong className="font-bold">Status</strong>:{' '}
              <span>{show.status}</span>
            </li>
            <li>
              <strong className="font-bold">Schedule</strong>:{' '}
              <span>
                {show.schedule.days.join(', ')} at {show.schedule.time}{' '}
                {`(${show.runtime}min)`}
              </span>
            </li>
            <li>
              <strong className="font-bold">Show Type</strong>:{' '}
              <span>{show.type}</span>
            </li>
            <li>
              <strong className="font-bold">Genres</strong>:{' '}
              <span className="inline-flex items-center gap-2 ml-2">
                {show.genres.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="inline-flex items-center text-center px-2 py-0.5 text-xs font-medium border bg-teal-500 text-white border-teal-500 rounded"
                    >
                      {item}
                    </div>
                  );
                })}
              </span>
            </li>
            <li className="overflow-hidden text-ellipsis">
              <strong className="font-bold">Official site</strong>:{' '}
              <Link
                className="max-w-full text-teal-600 hover:underline text-ellipsis"
                to={show.officialSite}
                target="_blank"
              >
                {show.officialSite}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-4 leading-7">
        <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="mb-4">
          <h1 className="mb-3 text-lg font-medium">Episodes</h1>

          {show._embedded.episodes ? (
            <ol className="grid grid-cols-1 overflow-y-auto list-decimal list-inside h-96 md:grid-cols-2">
              {show._embedded.episodes.map(episode => {
                return (
                  <li key={episode.id}>
                    <Link to={`/episode/${episode.id}`}>{episode.name}</Link>
                  </li>
                );
              })}
            </ol>
          ) : (
            <p>nothing is here</p>
          )}
        </div>

        <div className="mb-4">
          <h1 className="mb-3 text-lg font-medium">Cast</h1>

          {show._embedded.cast.length ? (
            <div className="grid grid-cols-2 gap-4 overflow-y-auto h-96">
              {show._embedded.cast.map((castItem, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-center gap-4 p-4 border"
                  >
                    <div className="flex-1">
                      <p className="mb-1 text-sm text-gray-400">Character</p>
                      <LazyLoadImage
                        className="w-full"
                        src={
                          castItem.character?.image?.medium ||
                          'https://placehold.co/300x300'
                        }
                        alt={castItem.character.name}
                      />
                      <h5 className="mt-2 font-medium">
                        {castItem.character.name}
                      </h5>
                    </div>

                    <Link
                      to={`/people/${castItem.person.id}`}
                      className="flex-1"
                    >
                      <p className="mb-1 text-sm text-gray-400">Person</p>

                      <LazyLoadImage
                        className="w-full"
                        src={
                          castItem.person.image?.medium ||
                          'https://placehold.co/300x300'
                        }
                        alt={castItem.person.name}
                      />
                      <h5 className="mt-2 hover:text-teal-500">
                        {castItem.person.name}
                      </h5>
                    </Link>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>nothing is here</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Index;
