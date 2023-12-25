import { useState } from 'react';
import Title from '../../Components/atoms/Title';
import { useEffect } from 'react';
import peopleApi from '../../api/modules/people.api';
import PersonCard from '../../Components/Content/PersonCard';
import Spinner from '../../Components/atoms/Spinner';

const Index = () => {
  const [people, setPeople] = useState(null);

  useEffect(() => {
    peopleApi.getAllPeople({ page: 1 }).then(response => {
      setPeople(response);
    });

    return () => {};
  }, []);

  return (
    <div className="container mb-10">
      <Title>People</Title>
      {!people && <Spinner className="m-4 mx-auto border-blue-500"></Spinner>}

      {people && (
        <div className="grid grid-cols-5 gap-4 list-decimal">
          {people.map(person => (
            <PersonCard key={person.id} data={person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;
