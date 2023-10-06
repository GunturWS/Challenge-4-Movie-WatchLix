// import { useEffect, useState } from "react";
// import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { FaHeart, FaRegHeart } from "react-icons/fa";

const SeePopular = ({popuMovies}) => {
  // const { movieId } = useParams();
  // const [seePopularMovies, setSeePopularMovies] = useState([]);
  // // const [like] = useState(false);

  // useEffect(() => {
  //   const getSeePopularMovies = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${import.meta.env.VITE_API_URL}3/movie/popular?language=en-US&page=1`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
  //           },
  //         }
  //       );
  //       const { data } = response;
  //       console.log(response.data);

  //       setSeePopularMovies(data.results(0, 10));
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   getSeePopularMovies();
  // }, []);
  return (
    // <div>{movieId}</div>
    <div>
      <div className="grid lg:grid-cols-4  grid-cols-3 gap-4 lg:gap-12 mb-4 px-4 sm:px-4 md:px-4 justify-center lg:mt-32 mt-16  lg:px-10 lg:mb-20">
        {popuMovies.map((movie) => (
          <div key={movie.id} className="bg-white p-4 rounded-lg shadow">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
            />
            <Link
              className="  absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white"
              as={Link}
              to={`/popular/${movie.id}`}
            >
              <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                {movie.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

SeePopular.propTypes = {
  popuMovies: PropTypes.array,
};

export default SeePopular;
