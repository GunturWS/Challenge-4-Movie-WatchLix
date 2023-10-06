import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const SeePopular = () => {
  const { movieId } = useParams();
  const [seePopularMovies, setSeePopularMovies] = useState([]);
  const [like] = useState(false);

  useEffect(() => {
    const getSeePopularMovies = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}3/movie/popular?language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
            },
          }
        );
        const { data } = response;
        console.log(response.data);

        setSeePopularMovies(data.results(0, 10));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getSeePopularMovies();
  }, []);
  return (
    <div>{movieId}</div>
    // <div>
    //   <div className="container mx-auto px-4">
    //     <h1 className="text-white font-bold md:text-xl p-4">Popular Movies</h1>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    //       {seePopularMovies.map((movie) => (
    //         <div key={movie.id} className="bg-white p-4 rounded-lg shadow">
    //           <img
    //             src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
    //             alt={movie.title}
    //             className="rounded-lg w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
    //           />
    //           <Link
    //             className="  absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white"
    //             as={Link}
    //             to={`/popular/${movie.id}`}
    //           >
    //             <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
    //               {movie.title}
    //             </p>
    //             <p>
    //               {like ? (
    //                 <FaHeart className="absolute top-4 left-4 text-gray-300" />
    //               ) : (
    //                 <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
    //               )}
    //             </p>
    //           </Link>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    //   );
    // };

    // <>
    //   <div className="container mx-auto px">
    //     <div className="flex flex-wrap justify-between">
    //       <h2 className="text-white font-bold md:text-xl p-4">Popular Movies</h2>
    //       <Link as={Link} to={`/popular/`}>
    //         <button className="text-red-600 font-bold md:text-xl p-4">See Popular Movie</button>
    //       </Link>
    //     </div>
    //     <div className="relative flex items-center group">
    //       <div
    //         className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
    //         id={"slider"}
    //       >
    //         <div>
    //           {seePopularMovies.map((movie) => (
    //             <div
    //               key={movie.id}
    //               className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
    //             >
    //               <img
    //                 className="w-full h-auto block"
    //                 src={`https://image.tmdb.org/t/p/original/${seePopularMovies?.poster_path}`}
    //                 alt={seePopularMovies.title}
    //               />

    //               <Link
    //                 className="  absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white"
    //                 as={Link}
    //                 to={`/details/${movie.id}`}
    //               >
    //                 <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
    //                   {movie.title}
    //                 </p>
    //                 <p>
    //                   {like ? (
    //                     <FaHeart className="absolute top-4 left-4 text-gray-300" />
    //                   ) : (
    //                     <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
    //                   )}
    //                 </p>
    //                 {/* <p className="text-gray-600">{movie.overview}</p> */}
    //               </Link>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default SeePopular;
