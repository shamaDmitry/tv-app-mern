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
import PopularShowList from './PopularShowList';

const Index = () => {
  const [popular, setPopular] = useState([]);
  const [country, setCountry] = useState('US');
  const [schedule, setSchedule] = useState([]);
  const [today] = useState(dayjs().format('DD MMMM YYYY'));

  useEffect(() => {
    showsApi.getAllShows({ embed: 'nextepisode' }).then(res => {
      setPopular(() =>
        sortBy(res, [
          function (o) {
            return -o.rating.average;
          },
        ]).slice(0, 8)
      );
    });
    return () => {};
  }, []);

  useEffect(() => {
    userApi.myInfo();

    sheduleApi
      .getSchedule({ country: country, date: dayjs().format('YYYY-MM-DD') })
      .then(res => {
        setSchedule(() => groupBy(res, 'airtime'));
      });
    return () => {};
  }, [country]);

  return (
    <div className="container mb-20">
      <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-3">
        <section className="order-2 md:order-1 md:col-span-2">
          <Title>Popular shows</Title>

          <PopularShowList popular={popular} />
        </section>

        <section className="order-1 md:order-2 md:col-span-1">
          <Title>{`Schedule for ${today}`}</Title>

          <CountrySelector
            value={country}
            onChange={e => {
              setCountry(e.target.value);
            }}
          />

          {!Object.keys(schedule).length && <p>nothing is here</p>}

          <div className="overflow-x-hidden overflow-y-auto max-h-96">
            {Object.keys(schedule).map(key => {
              return (
                <div className="border" key={key}>
                  <div className="px-3 py-2 font-bold text-center text-white bg-slate-950">
                    {key}
                  </div>

                  {schedule[key].map(episode => {
                    return (
                      <div
                        className="flex gap-4 p-2 leading-6 odd:bg-gray-100"
                        key={episode.id}
                      >
                        <div className="w-24 text-center shrink-0">
                          <div>{key}</div>
                          <div>
                            <div className="font-bold">
                              {episode.show.network?.name}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col max-w-xs text-teal-600">
                          <Link
                            to={`/episode/${episode.id}`}
                            state={{ showId: episode.show.id }}
                            className="w-full overflow-hidden font-bold whitespace-nowrap text-ellipsis"
                          >
                            {episode.name}
                          </Link>

                          <Link
                            to={`/shows/${episode.show.id}`}
                            className="text-sm"
                          >
                            {episode.show.name}
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
