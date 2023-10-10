import PropTypes from 'prop-types';

const Title = ({ children }) => {
  return (
    <h1 className="py-3 mb-6 text-xl font-semibold border-b text-slate-800 border-b-teal-600">
      {children}
    </h1>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
