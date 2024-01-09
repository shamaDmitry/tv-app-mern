import { Link, useParams } from 'react-router-dom';
import Title from '../../Components/atoms/Title';
import showsApi from '../../api/modules/shows.api';
import { useEffect, useState } from 'react';
import Spinner from '../../Components/atoms/Spinner';
import { GrPrevious } from 'react-icons/gr';

const Index = () => {
  const params = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    showsApi.getShow(params.id, { embed: ['episodes', 'cast'] }).then(show => {
      console.log(show);
      setShow(show);
    });
    return () => {};
  }, []);

  return (
    <section className="container">
      <div className="mb-2">
        <Link
          to={'/home'}
          className="inline-flex items-center text-sm font-bold text-teal-600 uppercase transition hover:opacity-50 gap-x-1"
        >
          <GrPrevious></GrPrevious>
          back
        </Link>
      </div>

      {show ? <Title>{show.name}</Title> : <Spinner />}

      {show ? (
        <>
          <div className="flex flex-col justify-start gap-4 mb-6 md:flex-row">
            <img
              src={show.image.medium}
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
        </>
      ) : (
        <Spinner />
      )}

      {show ? (
        <section className="mb-4">
          <h1 className="mb-3 text-lg font-medium">Episodes</h1>
          <div className="grid grid-cols-3">
            {show._embedded.episodes.map(episode => {
              return <div key={episode.id}>{episode.name}</div>;
            })}
          </div>
        </section>
      ) : (
        <Spinner />
      )}

      {show ? (
        <section className="mb-4">
          <h1 className="mb-3 text-lg font-medium">Cast</h1>
          <div className="grid grid-cols-4 gap-4">
            {show._embedded.cast.map((castItem, index) => {
              return (
                <div key={index} className="flex justify-center gap-4 p-4 border">
                  <div>
                    <p>Character</p>
                    <img
                      className="w-32"
                      src={castItem.character?.image?.medium || 'https://placehold.co/300x300'}
                      alt=""
                    />
                    <h5>{castItem.character.name}</h5>
                  </div>

                  <div>
                    <p>Person</p>

                    <img
                      className="w-32"
                      src={castItem.person.image.medium || 'https://placehold.co/300x300'}
                      alt=""
                    />
                    <h5>{castItem.person.name}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ) : (
        <Spinner />
      )}
    </section>
  );
};

export default Index;
