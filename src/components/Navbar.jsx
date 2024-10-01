import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [activePage, setActivePage] = useState(0);
  const location = useLocation();

  // Function to handle navigation back to the home page and scroll
  const handleHomeClick = () => {
    if (location.pathname !== "/") {
      // setActivePage(0); // Set active page to Home
    }
  };

  return (
    <div className="fixed top-[4%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex pt-16 items-center justify-center flex-row w-full z-50">
      <hr className="h-[1px] w-1/2 md:w-1/4 bg-slate-300" />
      <nav className="relative flex md:flex-row justify-center gap-4 md:gap-24 rounded-3xl border-2 border-slate-400 bg-transparent bg-opacity-50 shadow-2xl py-4 px-6 md:py-7 md:px-7 lg:mx-4 mx-0 md:w-auto text-slate-100 text-xl md:text-xl w-fit font-medium backdrop-blur-xl z-10">

        {location.pathname === "/" ? (
          <>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className={` font-bold relative hover:scale-110 transition-transform ease-in whitespace-nowrap cursor-pointer ${activePage === 0 ? 'text-zinc-200 scale-110 underline-animation' : 'bg-gradient-to-tr from-zinc-200 via-gray-400 to-slate-200 bg-clip-text text-transparent '
                }`}
              aria-label="Home"
              onClick={() => setActivePage(0)}
            >
              HOME
            </ScrollLink>

            <ScrollLink
              to="events"
              smooth={true}
              duration={500}
              className={` font-bold relative hover:scale-110 transition-transform ease-in whitespace-nowrap cursor-pointer ${activePage === 1 ? 'text-zinc-200 scale-110 underline-animation' : 'bg-gradient-to-tr from-zinc-200 via-gray-400 to-slate-300 bg-clip-text text-transparent '
                }`}
              aria-label="Events"
              onClick={() => setActivePage(1)}
            >
              Events
            </ScrollLink>

            <ScrollLink
              to="faqs"
              smooth={true}
              duration={500}
              className={` font-bold relative hover:scale-110 transition-transform ease-in whitespace-nowrap cursor-pointer ${activePage === 2 ? 'text-zinc-200 scale-110 underline-animation' : 'bg-gradient-to-tr from-zinc-200 via-gray-400 to-slate-300 bg-clip-text text-transparent '
                }`}
              aria-label="FAQs"
              onClick={() => setActivePage(2)}
            >
              FAQs
            </ScrollLink>
          </>
        ) : (
          <>
            <RouterLink
              to="/"
              className={` font-bold relative hover:scale-110 transition-transform ease-in whitespace-nowrap cursor-pointer ${activePage === 0 ? 'text-zinc-200 scale-110 underline-animation' : 'bg-gradient-to-tr from-zinc-200 via-gray-400 to-slate-300 bg-clip-text text-transparent '
                }`}
              aria-label="Home"
              onClick={() => {
                setActivePage(0);
                handleHomeClick();
              }
              }
            >
              HOME
            </RouterLink>

            <RouterLink
              to="/"
              className={` font-bold relative hover:scale-110 transition-transform ease-in whitespace-nowrap cursor-pointer ${activePage === 1 ? 'text-zinc-200 scale-110 underline-animation' : 'bg-gradient-to-tr from-zinc-200 via-gray-400 to-slate-300 bg-clip-text text-transparent '
                }`}
              aria-label="Events"
              onClick={() => {
                setActivePage(1);
                handleHomeClick();
              }}
            >
              Events
            </RouterLink>

            <RouterLink
              to="/"
              className={` font-bold relative hover:scale-110 transition-transform ease-in whitespace-nowrap cursor-pointer ${activePage === 2 ? 'text-zinc-200 scale-110 underline-animation' : 'bg-gradient-to-tr from-zinc-200 via-gray-400 to-slate-300 bg-clip-text text-transparent '
                }`}
              aria-label="FAQs"
              onClick={() => {
                setActivePage(2);
                handleHomeClick();
              }}
            >
              FAQs
            </RouterLink>
          </>
        )}

        <RouterLink
          to="/team"
          className={` font-bold relative hover:scale-110 transition-transform ease-in whitespace-nowrap cursor-pointer ${activePage === 3 ? 'text-zinc-200 scale-110 underline-animation' : 'bg-gradient-to-tr from-zinc-200 via-gray-400 to-slate-300 bg-clip-text text-transparent '
            }`}
          aria-label="Team"
          onClick={() => setActivePage(3)}
        >
          Our Team
        </RouterLink>
      </nav>
      <hr className="h-[1px] w-1/2 md:w-1/4 bg-slate-300 mt-4 md:mt-0" />
    </div>
  );
};

export default Navbar;
