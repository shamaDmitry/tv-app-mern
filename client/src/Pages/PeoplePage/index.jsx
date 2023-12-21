import { useState } from 'react';
import Title from '../../Components/atoms/Title';
import { useEffect } from 'react';
import peopleApi from '../../api/modules/people.api';

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
      {people && (
        <ol className="grid grid-cols-5 list-decimal gap-x-4">
          {people.map(person => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Index;
