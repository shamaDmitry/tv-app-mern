import classNames from 'classnames';

const Paginate = ({
  index,
  itemsPerPage,
  totalData,
  paginate,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="px-4 pb-4 overflow-hidden overflow-x-auto">
      <div className="flex gap-x-2">
        {/* <div onClick={previousPage} className="page-number">
          Prev
        </div> */}

        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={classNames(
              'px-2 border hover:bg-teal-500 hover:text-white hover:border-teal-500',
              {
                'bg-teal-500 text-white border-teal-500': number === index,
              }
            )}
          >
            {number}
          </button>
        ))}

        {/* <div onClick={nextPage} className="page-number">
          Next
        </div> */}
      </div>
    </div>
  );
};

export default Paginate;
