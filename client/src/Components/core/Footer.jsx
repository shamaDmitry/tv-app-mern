import { useState } from 'react';
import Logo from '../../assets/icons/Logo';

const Footer = () => {
  const [date] = useState(new Date());

  return (
    <footer className="mt-auto bg-gray-50">
      <div className="container py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start">
            <Logo />
          </div>

          <p className="mt-4 text-sm text-center text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; {date.getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
