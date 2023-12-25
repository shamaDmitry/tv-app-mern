import { useEffect, useState } from 'react';
import showsApi from '../../api/modules/shows.api';
import Title from '../../Components/atoms/Title';
import ShowCard from '../../Components/Content/ShowCard';
import Spinner from '../../Components/atoms/Spinner';

const Index = () => {
  const [shows, setShows] = useState(null);

  useEffect(() => {
    showsApi.getAllShows().then(response => {
      setShows(response);
    });

    return () => {};
  }, []);

  return (
    <div className="container mb-10">
      <Title>ShowsPage</Title>
      {!shows && <Spinner className="m-4 mx-auto border-blue-500"></Spinner>}

      {shows && (
        <div className="grid grid-cols-5 gap-4">
          {shows.map(show => (
            <ShowCard key={show.id} data={show} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;
