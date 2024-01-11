import { useEffect, useState } from 'react';
import showsApi from '../../api/modules/shows.api';
import Title from '../../Components/atoms/Title';
import ShowCard from '../../Components/Content/ShowCard';
import Spinner from '../../Components/atoms/Spinner';
import Paginate from '../../Components/Content/Paginate';
import { GrNext, GrPrevious } from 'react-icons/gr';

const Index = () => {
  const [shows, setShows] = useState([]);
  const [page, setPage] = useState(0);

  const [index, setIndex] = useState(1);
  const [itemsPerPage] = useState(15);

  const indexOfLast = index * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentData = shows.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(shows.length / itemsPerPage);

  const previousPage = () => {
    if (index !== 1) {
      setIndex(prevState => prevState - 1);
    }
  };

  const nextPage = () => {
    if (index !== Math.ceil(shows.length / itemsPerPage)) {
      setIndex(prevState => prevState + 1);
    }
  };

  const paginate = pageNumber => {
    setIndex(pageNumber);
  };

  useEffect(() => {
    showsApi.getAllShows({ page }).then(response => {
      setShows(response);
    });

    return () => {};
  }, [page]);

  return (
    <div className="container mb-10">
      <Title>ShowsPage</Title>
      {!shows && <Spinner className="m-4 mx-auto border-blue-500"></Spinner>}

      <div className="sticky top-0 z-10 flex flex-wrap items-center justify-center w-full py-2 mb-2 bg-white drop-shadow-md gap-x-4">
        <button
          onClick={() => {
            setIndex(1);
            if (page !== 0) {
              setPage(prevState => prevState - 1);
            }
          }}
          className="flex items-center px-3 py-1 text-sm capitalize border gap-x-2"
        >
          <GrPrevious />
          prev
        </button>
        <button
          onClick={() => {
            setIndex(1);
            setPage(prevState => prevState + 1);
          }}
          className="flex items-center px-3 py-1 text-sm capitalize border gap-x-2"
        >
          next
          <GrNext />
        </button>

        <div className="flex flex-col justify-center w-full max-w-full">
          <div className="flex justify-center gap-x-4">
            <div className="py-2 text-center">
              <span>Current page:</span> {page + 1}
            </div>

            <div className="py-2 text-center">
              {index} / {totalPages}
            </div>
          </div>

          <Paginate
            index={index}
            itemsPerPage={itemsPerPage}
            totalData={shows.length}
            paginate={paginate}
            previousPage={previousPage}
            nextPage={nextPage}
          />
        </div>
      </div>

      {shows && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {currentData.map(show => (
            <ShowCard key={show.id} data={show} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;
