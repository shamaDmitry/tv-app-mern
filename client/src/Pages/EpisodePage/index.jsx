import { useParams } from 'react-router-dom';
import Title from '../../Components/atoms/Title';
import episodesApi from '../../api/modules/episodes.api';
import { useEffect, useState } from 'react';
import Spinner from '../../Components/atoms/Spinner';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Index = () => {
  const params = useParams();
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    episodesApi.getEpisode(params.id, { embed: ['show'] }).then(episode => {
      setEpisode(episode);
    });
    return () => {};
  }, [params]);

  if (!episode) return <Spinner className="m-auto"></Spinner>;

  return (
    <section className="container">
      <Title>Episode page</Title>
      {/* <pre>{JSON.stringify(episode, null, 2)}</pre> */}

      <div className="flex flex-col justify-start gap-4 mb-6">
        <LazyLoadImage
          src={episode.image?.original || 'https://placehold.co/300x300'}
          className="block object-cover w-full max-w-3xl mx-auto overflow-hidden border rounded"
          alt=""
        />

        <div className="flex-1 w-full max-w-3xl px-6 py-5 mx-auto border rounded shadow-md">
          <h1 className="mb-3 text-lg font-medium">Episode info</h1>
          <ul className="space-y-2">
            <li>
              <strong className="font-bold">Show</strong>:{' '}
              <span>{episode._embedded.show.name}</span>
            </li>

            <li>
              <strong className="font-bold">Episode name</strong>:{' '}
              <span>{episode.name}</span>
            </li>
            <li>
              <strong className="font-bold">Season</strong>:{' '}
              <span>{episode.season ? episode.season : '-'}</span>
            </li>
            <li>
              <strong className="font-bold">Number</strong>:{' '}
              <span>{episode.number ? episode.number : '-'}</span>
            </li>
          </ul>

          <div dangerouslySetInnerHTML={{ __html: episode.summary }}></div>
        </div>
      </div>
    </section>
  );
};

export default Index;
