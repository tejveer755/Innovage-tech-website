import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activePage, setActivePage] = useState(0);

  const handlePageChange = (pageIndex) => {
    setActivePage(pageIndex);
  };

  
  return (
    <>
      <div className="fixed top-[4%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex pt-16 items-center justify-center flex-row w-full z-50">
        <hr className="h-[1px] w-1/2 md:w-1/4 bg-slate-300" />
        <nav className="relative flex md:flex-row justify-center gap-4 md:gap-24 rounded-full border-2 border-slate-400 bg-transparent bg-opacity-50 shadow-2xl py-4 px-6 md:py-7 md:px-7 lg:mx-4 mx-0 md:w-auto text-slate-100 text-xl md:text-2xl w-fit font-medium backdrop-blur-xl z-10">
          <Link
            to="/"
            className={`text-lg  hover:scale-110 transition-transform ease-in whitespace-nowrap cursor-pointer ${
              activePage === 0 ? 'text-slate-100 scale-110 text-2xl' : ''
            }`}
            aria-label="Home"
            onClick={() => handlePageChange(0)}
          >
            HOME
          </Link>
          <Link
            to="/event"
            className={`text-lg  hover:scale-110 transition-transform ease-in whitespace-nowrap cursor-pointer ${
              activePage === 1 ? 'text-slate-100 scale-110 text-2xl' : ''
            }`}
            aria-label="Events"
            onClick={() => handlePageChange(1)}
          >
            Events
          </Link>
          <Link
            to="/team"
            className={`text-lg hover:scale-110 transition-transform ease-in whitespace-nowrap cursor-pointer ${
              activePage === 2 ? 'text-slate-100 scale-110 text-2xl' : ''
            }`}
            aria-label="Team"
            onClick={() => handlePageChange(2)}
          >
            Our Team
          </Link>
          <Link
            to="/faq"
            className={`text-lg  hover:scale-110 transition-transform ease-in whitespace-nowrap cursor-pointer ${
              activePage === 3 ? 'text-slate-100 scale-110 text-2xl' : ''
            }`}
            aria-label="FAQs"
            onClick={() => handlePageChange(3)}
          >
            FAQs
          </Link>

          
        </nav>
        <hr className="h-[1px] w-1/2 md:w-1/4 bg-slate-300 mt-4 md:mt-0" />
      </div>
    </>
  );
};

export default Navbar;
