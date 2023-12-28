import { Listbox, Transition } from '@headlessui/react';
import { useEffect } from 'react';
import { Fragment, useState } from 'react';
import { HiCheck, HiChevronUpDown } from 'react-icons/hi2';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';

const types = [
  { id: 1, name: 'show' },
  { id: 2, name: 'people' },
];

const SearchBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(types[0]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    if (location.search) {
      let params = new URLSearchParams(location.search);
      let term = params.get('term');
      setTerm(term);
      const filtered = types.filter(item => item.name === params.get('type'));
      setSelectedType(filtered[0]);
    }

    return () => {
      setTerm('');
    };
  }, [location]);

  const handleSearch = e => {
    if (e.keyCode === 13 && e.target.value.length) {
      navigate({
        pathname: '/search',
        search: createSearchParams({
          type: selectedType.name,
          term: e.target.value,
        }).toString(),
      });
    }
  };

  return (
    <div className="relative flex">
      <div className="relative flex items-center">
        <span className="absolute ml-4 leading-none -translate-y-1/2 top-1/2 text-muted">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </span>
        <input
          className="block w-full min-w-[70px] py-2 pl-12 pr-4 text-base font-normal leading-normal bg-white border border-solid outline-none appearance-none placeholder:text-gray-400 peer text-gray-900 border-stone-200 bg-clip-padding rounded"
          placeholder="Search..."
          type="search"
          value={term}
          onChange={e => setTerm(e.target.value)}
          onKeyDown={e => handleSearch(e)}
        />
      </div>

      <Listbox value={selectedType} onChange={setSelectedType}>
        <div className="absolute -translate-y-1/2 right-1 top-1/2">
          <Listbox.Button className="relative w-full py-1 pl-2 pr-6 text-left bg-white border rounded shadow-md cursor-pointer focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selectedType.name}</span>

            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <HiChevronUpDown
                className="w-4 h-4 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute right-0 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg w-52 max-h-60 ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {types.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <HiCheck className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default SearchBar;
