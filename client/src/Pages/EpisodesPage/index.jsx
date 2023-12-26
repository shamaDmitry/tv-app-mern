import { useParams } from 'react-router-dom';
import Title from '../../Components/atoms/Title';

const Index = () => {
  const params = useParams();

  return (
    <section className="container">
      <Title>Episode page</Title>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </section>
  );
};

export default Index;
