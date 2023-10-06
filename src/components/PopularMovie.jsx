import axios from "axios";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

const PopularMovie = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [like] = useState(false);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/3/movie/popular?language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
            },
          }
        );
        const { data } = response;

        setPopularMovies(data.results.slice());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getPopularMovies();
  }, []);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div className="container mx-auto px">
        <div className="flex flex-wrap justify-between">
          <h2 className="text-white font-bold md:text-xl p-4">Popular Movies</h2>
          <Link as={Link} to={`/seePopulars/`}>
            <button className="text-red-600 font-bold md:text-xl p-4">See Popular Movie</button>
          </Link>
        </div>
        <div className="relative flex items-center group">
          <MdChevronLeft
            onClick={slideLeft}
            className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            size={40}
          />
          <div
            className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
            id={"slider"}
          >
            <div>
              {popularMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
                >
                  <img
                    className="w-full h-auto block"
                    src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                    alt={movie.title}
                  />

                  <Link
                    className="  absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white"
                    as={Link}
                    to={`/details/${movie.id}`}
                  >
                    <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                      {movie.title}
                    </p>
                    <p>
                      {like ? (
                        <FaHeart className="absolute top-4 left-4 text-gray-300" />
                      ) : (
                        <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
                      )}
                    </p>
                    {/* <p className="text-gray-600">{movie.overview}</p> */}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <MdChevronRight
            onClick={slideRight}
            className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            size={40}
          />
        </div>
      </div>
    </>
  );
};

export default PopularMovie;
