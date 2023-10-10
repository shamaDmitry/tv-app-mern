import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <h1 className="mb-4 tracking-widest text-red-500 uppercase">
        404 | Not Found
      </h1>

      <Link to="/" className="px-3 py-2 text-sm font-bold text-center text-black uppercase border">
        go home
      </Link>
    </div>
  );
};

export default Page404;
