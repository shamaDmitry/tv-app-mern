import { Link } from 'react-router-dom';
import Title from '../../Components/atoms/Title';
import ShowCard from '../../Components/Content/ShowCard';

const Index = () => {
  return (
    <div className="container mb-20">
      <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-3">
        <section className="md:col-span-2">
          <Title>Popular shows airing tonight</Title>

          <div className="mb-10">
            <div className="grid grid-cols-2 gap-4 mb-8 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
              {new Array(5).fill(1).map((item, index) => {
                return <ShowCard key={index} />;
              })}
            </div>

            <Link
              to="/shows"
              className="inline-flex px-4 py-2 text-teal-600 transition border border-teal-600 hover:bg-teal-600 hover:text-white"
            >
              More shows
            </Link>
          </div>

          <div className="mb-10">
            <div className="grid grid-cols-2 gap-4 mb-5 md:gap-5 md:grid-cols-3 lg:grid-cols-5">
              {new Array(5).fill(1).map((item, index) => {
                return <ShowCard key={index} />;
              })}
            </div>

            <Link
              to="/shows"
              className="inline-flex px-4 py-2 text-teal-600 transition border border-teal-600 hover:bg-teal-600 hover:text-white"
            >
              Countdown
            </Link>
          </div>
        </section>

        <section className="md:col-span-1">
          <Title>Schedule for Oct 10</Title>

          <div className="border">
            <div className="px-3 py-2 font-bold text-white bg-slate-950">
              20-00
            </div>
            <div className="flex gap-4 p-2 leading-6 odd:bg-gray-100">
              <div className="w-2/12 text-center">
                <div>20-00</div>
                <div>
                  <Link to="/" className="text-teal-600">
                    ESPN+
                  </Link>
                </div>
              </div>

              <div className="w-10/12 text-teal-600">
                <div className="overflow-hidden font-bold whitespace-nowrap text-ellipsis">
                  Dana White's Tuesday Night Contender Series Dana White's
                  Tuesday Night Contender Series
                </div>

                <div className="text-sm">Episode 29</div>
              </div>
            </div>

            <div className="flex gap-4 py-2 leading-6 odd:bg-gray-100">
              <div className="w-1/5 text-center">
                <div>20-00</div>
                <div>
                  <Link to="/" className="text-teal-600">
                    ESPN+
                  </Link>
                </div>
              </div>

              <div className="w-[80%] text-teal-600">
                <div className="overflow-hidden font-bold whitespace-nowrap text-ellipsis">
                  Dana White's Tuesday Night Contender Series Dana White's
                  Tuesday Night Contender Series
                </div>

                <div className="text-sm">Episode 29</div>
              </div>
            </div>
            <div className="px-3 py-2 font-bold text-white bg-slate-950">
              20-00
            </div>
            <div className="flex gap-4 py-2 leading-6 odd:bg-gray-100">
              <div className="w-1/5 text-center">
                <div>20-00</div>
                <div>
                  <Link to="/" className="text-teal-600">
                    ESPN+
                  </Link>
                </div>
              </div>

              <div className="w-[80%] text-teal-600">
                <div className="overflow-hidden font-bold whitespace-nowrap text-ellipsis">
                  Dana White's Tuesday Night Contender Series Dana White's
                  Tuesday Night Contender Series
                </div>

                <div className="text-sm">Episode 29</div>
              </div>
            </div>

            <div className="flex gap-4 py-2 leading-6 odd:bg-gray-100">
              <div className="w-1/5 text-center">
                <div>20-00</div>
                <div>
                  <Link to="/" className="text-teal-600">
                    ESPN+
                  </Link>
                </div>
              </div>

              <div className="w-[80%] text-teal-600">
                <div className="overflow-hidden font-bold whitespace-nowrap text-ellipsis">
                  Dana White's Tuesday Night Contender Series Dana White's
                  Tuesday Night Contender Series
                </div>

                <div className="text-sm">Episode 29</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
