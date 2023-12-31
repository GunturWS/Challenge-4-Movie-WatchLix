// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.search.value;

    if (searchQuery.trim() === "") {
      return;
    }

    navigate();
  };

  return (
    <header className="p-4 fixed w-full z-50">
      <nav className="flex flex-col justify-between items-center md:flex-row">
        <Link as={Link} to={`/`}>
        <a href="#" className="text-4xl font-bold text-red-600 mb-2">
          Movielist
        </a>
        </Link>
        
        <div className="w-full relative mb-3 md:w-1/2 md:mb-0">
          <form action="search" onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              placeholder="What do you want to watch?"
              className="outline-none font-semibold text-md bg-transparent border-none ring-2 ring-red-600 rounded-full border-red-600 w-[100%] px-4 py-2"
            />

            <div className="absolute top-0 right-0 transform translate-y-2 -translate-x-4">
              <BsSearch size={20} />
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center gap-2">
          <a
            href="/"
            className="px-6 py-2 bg-transparent border-2 border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            Login
          </a>
          <a
            href="/"
            className="px-6 py-2 bg-red-600 border-2 border-red-600 text-white rounded-full hover:bg-transparent hover:text-red-600 transition-all duration-300"
          >
            Register
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
