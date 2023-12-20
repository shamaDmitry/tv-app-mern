import { useEffect, useState } from 'react';
import showsApi from '../../api/modules/shows.api';
import Title from '../../Components/atoms/Title';

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
      {shows && (
        <ol className='grid grid-cols-5 list-decimal gap-x-4'>
          {shows.map(show => (
            <li key={show.id}>{show.name}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Index;
