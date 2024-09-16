import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="relative flex pt-16 items-center justify-center flex-row ">
      <hr className="h-[1px] w-1/2 md:w-1/4  bg-slate-300" />

      <nav className="relative flex  md:flex-row justify-center gap-4 md:gap-24 rounded-full border-2 border-transparent bg-gray-200 bg-opacity-50 shadow-2xl dark:border-slate-600 dark:bg-transparent py-4 px-6 md:py-7 md:px-7 lg:mx-4 mx-0 md:w-auto text-slate-100 text-xl md:text-2xl w-fit font-medium backdrop-blur-xl">
        <Link to="home" smooth duration={500} className='text-lg md:text-lg hover:scale-110 transition-transform ease-in whitespace-nowrap cursor-pointer'>
          HOME
        </Link>
        <Link to="about_us" smooth duration={500} className='text-lg md:text-lg hover:scale-110 transition-transform ease-in whitespace-nowrap cursor-pointer'>
          ABOUT US
        </Link>
        <Link to="events" smooth duration={500} className='text-lg md:text-lg hover:scale-110 transition-transform ease-in whitespace-nowrap cursor-pointer'>
          EVENTS
        </Link>
        <Link to="faqs" smooth duration={500} className='text-lg md:text-lg hover:scale-110 transition-transform ease-in whitespace-nowrap cursor-pointer'>
          FAQs
        </Link>
      </nav>

      <hr className="h-[1px] w-1/2 md:w-1/4 bg-slate-300 mt-4 md:mt-0" />
    </div>
  );
};

export default Navbar;