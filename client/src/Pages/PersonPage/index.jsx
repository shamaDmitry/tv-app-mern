import { Link, useParams } from 'react-router-dom';
import Title from '../../Components/atoms/Title';
import { useEffect } from 'react';
import peopleApi from '../../api/modules/people.api';
import { useState } from 'react';
import Spinner from '../../Components/atoms/Spinner';
import { GrPrevious } from 'react-icons/gr';
import dayjs from '../../utils/dayjs';

const Index = () => {
  const params = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    peopleApi.getPersonDetail(params.id).then(person => {
      setPerson(person);
    });
    return () => {};
  }, []);

  if (!person)
    return (
      <section className="container">
        <Spinner></Spinner>
      </section>
    );

  return (
    <section className="container max-w-5xl">
      <div className="mb-2">
        <Link
          to={'/people'}
          className="inline-flex items-center text-sm font-bold text-teal-600 uppercase transition hover:opacity-50 gap-x-1"
        >
          <GrPrevious></GrPrevious>
          back
        </Link>
      </div>

      <Title>Person page</Title>

      <div className="flex flex-col justify-start gap-4 mb-6 md:flex-row">
        <img
          src={person.image?.medium || 'https://placehold.co/300x300'}
          className="block max-w-xs mx-auto overflow-hidden border rounded"
          alt=""
        />

        <div className="flex-1 px-6 py-5 border rounded shadow-md">
          <h1 className="mb-3 text-lg font-medium">Person info</h1>
          <ul className="space-y-2">
            <li>
              <strong className="font-bold">Name</strong>:{' '}
              <span>{person.name}</span>
            </li>
            <li>
              <strong className="font-bold">Gender</strong>:{' '}
              <span>{person.gender ? person.gender : '-'}</span>
            </li>
            <li>
              <strong className="font-bold">Age</strong>:{' '}
              <span>{person.age ? person.age : '-'}</span>
            </li>
            <li>
              <strong className="font-bold">Birthday</strong>:{' '}
              <span>
                {person.birthday ? dayjs(person.birthday).format('LL') : '-'}
              </span>
            </li>

            {person.deathday && (
              <li>
                <strong className="font-bold">Deathday</strong>:{' '}
                <span>{dayjs(person.deathday).format('LL')}</span>
              </li>
            )}

            <li>
              <strong className="font-bold">Born in</strong>:{' '}
              <span>{person.country ? person.country.name : '-'}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Index;
