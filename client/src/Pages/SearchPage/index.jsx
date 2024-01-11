import { Link, useLocation } from 'react-router-dom';
import Title from '../../Components/atoms/Title';
import searchApi from '../../api/modules/search.api';
import { useState } from 'react';
import { useEffect } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { TbError404 } from 'react-icons/tb';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const EmptyResult = () => <p>Nothing is here</p>;

const Index = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [type, setType] = useState('');

  useEffect(() => {
    if (location.search) {
      const params = new URLSearchParams(location.search);
      const term = params.get('term');
      const type = params.get('type');

      setType(type);

      switch (type) {
        case 'show':
          setData([]);
          searchApi.getShowSearch({ q: term }).then(res => {
            setData(res);
          });
          break;

        case 'people':
          setData([]);
          searchApi.getPeopleSearch({ q: term }).then(res => {
            setData(res);
          });
          break;
      }
    }

    return () => {};
  }, [location]);

  return (
    <div className="container mb-10">
      <Title>{`Search ${type}`}</Title>

      {!location.search && <EmptyResult></EmptyResult>}

      {type === 'people' && (
        <>
          {!data.length && <EmptyResult></EmptyResult>}

          <div className="grid grid-cols-5 gap-4">
            {data &&
              data.map(item => {
                return (
                  <Link
                    to={`/people/${item.person.id}`}
                    key={item.person?.id}
                    className="flex flex-col"
                  >
                    {item.person?.image ? (
                      <LazyLoadImage
                        className="w-full min-h-[100px]"
                        src={item.person.image.medium}
                        alt={item.person.name}
                      />
                    ) : (
                      <div className="flex items-center justify-center flex-1 border">
                        <RxAvatar className="w-20 h-20 text-gray-400" />
                      </div>
                    )}

                    <div className="mt-2 text-lg font-medium text-center">
                      {item.person.name}
                    </div>
                  </Link>
                );
              })}
          </div>
        </>
      )}

      {type === 'show' && (
        <>
          {!data.length && <EmptyResult></EmptyResult>}

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {data &&
              data.map(item => {
                return (
                  <Link
                    key={item.show.id}
                    to={`/shows/${item.show.id}`}
                    className="flex flex-col"
                  >
                    {item.show?.image ? (
                      <LazyLoadImage
                        src={item.show.image.medium}
                        alt={item.show.name}
                      />
                    ) : (
                      <div className="flex items-center justify-center flex-1 border">
                        <TbError404 className="w-20 h-20 text-gray-400" />
                      </div>
                    )}

                    <div className="mt-2 text-lg font-medium text-center">
                      {item.show.name}
                    </div>
                  </Link>
                );
              })}
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
