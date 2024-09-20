import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <>
      <div className="fixed top-[6%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex pt-16 items-center justify-center flex-row w-full z-50">
        <hr className="h-[1px] w-1/2 md:w-1/4 bg-slate-300" />
        <nav className="relative flex md:flex-row justify-center gap-4 md:gap-24 rounded-full border-2 border-slate-400 bg-transparent bg-opacity-50 shadow-2xl py-4 px-6 md:py-7 md:px-7 lg:mx-4 mx-0 md:w-auto text-slate-100 text-xl md:text-2xl w-fit font-medium backdrop-blur-xl z-10">
          <Link
            to="home"
            smooth
            duration={500}
            className='text-lg md:text-lg hover:scale-110 transition-transform ease-in whitespace-nowrap cursor-pointer'
            aria-label="Home"
          >
            HOME
          </Link>
          <Link
            to="about_us"
            smooth
            duration={500}
            className='text-lg md:text-lg hover:scale-110 transition-transform ease-in whitespace-nowrap cursor-pointer'
            aria-label="About Us"
          >
            ABOUT US
          </Link>
          <Link
            to="events"
            smooth
            duration={500}
            className='text-lg md:text-lg hover:scale-110 transition-transform ease-in whitespace-nowrap cursor-pointer'
            aria-label="Events"
          >
            EVENTS
          </Link>
          <Link
            to="faqs"
            smooth
            duration={500}
            className='text-lg md:text-lg hover:scale-110 transition-transform ease-in whitespace-nowrap cursor-pointer'
            aria-label="FAQs"
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
