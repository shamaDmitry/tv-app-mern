import { useState } from 'react';
import Title from '../../Components/atoms/Title';
import { useEffect } from 'react';
import peopleApi from '../../api/modules/people.api';
import PersonCard from '../../Components/Content/PersonCard';
import Spinner from '../../Components/atoms/Spinner';
import { GrNext, GrPrevious } from 'react-icons/gr';
import Paginate from '../../Components/Content/Paginate';

const Index = () => {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(0);

  const [index, setIndex] = useState(1);
  const [itemsPerPage] = useState(10);

  const indexOfLast = index * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentData = people.slice(indexOfFirst, indexOfLast);

  console.log('indexOfLast', indexOfLast);
  console.log('currentData', currentData);

  useEffect(() => {
    peopleApi.getAllPeople({ page }).then(response => {
      setPeople(response);
    });

    return () => {};
  }, [page]);

  const previousPage = () => {
    if (index !== 1) {
      setIndex(prevState => prevState - 1);
    }
  };

  const nextPage = () => {
    if (index !== Math.ceil(people.length / itemsPerPage)) {
      setIndex(prevState => prevState + 1);
    }
  };

  const paginate = pageNumber => {
    setIndex(pageNumber);
  };

  return (
    <div className="container mb-10">
      <Title>People</Title>
      {!people.length && (
        <Spinner className="m-4 mx-auto border-blue-500"></Spinner>
      )}

      {people && (
        <div className="relative">
          <div className="sticky top-0 flex flex-wrap items-center justify-center w-full py-2 mb-2 bg-white drop-shadow-md gap-x-4">
            <button
              onClick={() => {
                setIndex(1);
                setPage(prevState => prevState - 1);
              }}
              className="flex items-center px-3 py-1 text-sm capitalize border gap-x-2"
            >
              <GrPrevious></GrPrevious>
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

            <div className="flex flex-col justify-center max-w-full">
              <div className="py-2 text-center">
                <span>Current page:</span> {page + 1}
              </div>

              <div className="py-2 text-center">
                {index} / {people.length}
              </div>

              <Paginate
                index={index}
                itemsPerPage={itemsPerPage}
                totalData={people.length}
                paginate={paginate}
                previousPage={previousPage}
                nextPage={nextPage}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 list-decimal md:grid-cols-3 lg:grid-cols-5">
            {currentData.map(person => (
              <PersonCard key={person.id} data={person} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
