import { Link } from 'react-router-dom';
import Title from '../../Components/atoms/Title';
import ShowCard from '../../Components/Content/ShowCard';
import { useEffect } from 'react';
import showsApi from '../../api/modules/shows.api';
import { groupBy, sortBy } from 'lodash';
import { useState } from 'react';
import Spinner from '../../Components/atoms/Spinner';
import sheduleApi from '../../api/modules/shedule.api';
import userApi from '../../api/modules/user.api';
import dayjs from 'dayjs';
import CountrySelector from '../../Components/atoms/CountrySelector';

const Index = () => {
  const [popular, setPopular] = useState([]);
  const [countryCode] = useState(() => localStorage.getItem('countryCode'));
  const [country, setCountry] = useState('US');
  const [schedule, setSchedule] = useState([]);
  const [today] = useState(dayjs().format('DD MMMM YYYY'));

  useEffect(() => {
    userApi.myInfo();

    sheduleApi
      .getSchedule({ country: country, date: dayjs().format('YYYY-MM-DD') })
      .then(res => {
        setSchedule(() => groupBy(res, 'airtime'));
      });

    showsApi.getAllShows().then(res => {
      setPopular(() =>
        sortBy(res, [
          function (o) {
            return -o.rating.average;
          },
        ]).slice(0, 8)
      );
    });
    return () => {};
  }, [country]);

  return (
    <div className="container mb-20">
      <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-3">
        <section className="md:col-span-2">
          <Title>Popular shows</Title>

          <div className="mb-10">
            <div className="grid grid-cols-2 gap-4 mb-8 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
              {!popular && (
                <Spinner className="m-4 mx-auto border-blue-500"></Spinner>
              )}

              {popular &&
                popular.map((item, index) => {
                  return <ShowCard key={index} data={item} />;
                })}
            </div>

            <Link
              to="/shows"
              className="inline-flex px-4 py-2 text-teal-600 transition border border-teal-600 hover:bg-teal-600 hover:text-white"
            >
              More shows
            </Link>
          </div>
        </section>

        <section className="md:col-span-1">
          <Title>{`Schedule for ${today}`}</Title>

          <CountrySelector
            value={country}
            onChange={e => {
              setCountry(e.target.value);
            }}
          />

          {!Object.keys(schedule).length && <p>nothing is here</p>}

          <div className="overflow-auto max-h-96">
            {Object.keys(schedule).map(key => {
              return (
                <div className="border" key={key}>
                  <div className="px-3 py-2 font-bold text-center text-white bg-slate-950">
                    {key}
                  </div>

                  {schedule[key].map(oneShow => {
                    return (
                      <div
                        className="grid grid-cols-2 gap-4 p-2 leading-6 odd:bg-gray-100"
                        key={oneShow.id}
                      >
                        <div className="text-center">
                          <div>{key}</div>
                          <div>
                            <div className="font-bold">
                              {oneShow.show.network?.name}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col text-teal-600">
                          <Link
                            to={`/shows/${oneShow.show.id}`}
                            className="overflow-hidden font-bold whitespace-nowrap text-ellipsis"
                          >
                            {oneShow.show.name}
                          </Link>

                          <Link
                            to={`/episodes/${oneShow.id}`}
                            className="text-sm"
                          >
                            {oneShow.name}
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
