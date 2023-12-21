import { getInitials } from '../../helpers/helpers';

const Avatar = ({ name }) => {
  return (
    <div className="flex items-center justify-center w-10 h-10 font-medium bg-blue-300 border border-blue-300 rounded-full shadow-md">
      {getInitials(name)}
    </div>
  );
};

export default Avatar;
