import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const DetailMovie = () => {
  const { movieId } = useParams();
  const [detailMovie, setDetailMovie] = useState(null);

  useEffect(() => {
    const getDetailMovie = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/3/movie/${movieId}?language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
            },
          }
        );
        console.log(response.data);

        if (response.data) {
          setDetailMovie(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getDetailMovie();
  }, [movieId]);

  if (!detailMovie) {
    return <div>Loading...</div>;
  }

  return (
    // <div className="w-full h-screen text-black">
    //   <div className="bg-cover bg-center h-screen bg-fixed relative w-full">
    //     <div className="absolute w-full h-screen bg-gradient-to-r from-blac">
    //       <img
    //         className="w-full h-screen object-cover"
    //         src={`https://image.tmdb.org/t/p/original/${detailMovie?.backdrop_path}`}
    //         alt={detailMovie.title}
    //       />
    //       <div className="absolute w-full top-[30%] p-4 md:p-8">
    //         <h1 className="text-3xl md:text-5xl font-bold text-red-600 w-1/2">
    //           {detailMovie.title}
    //         </h1>
    //         <div className="flex flex-wrap">
    //           {detailMovie.genres.map((genre, key) => (
    //             <p
    //               key={key}
    //               type="none"
    //               className="text-white font-italic mr-2 mb-2 text-xl outline-black"
    //             >
    //               {detailMovie.genres[key].name}
    //             </p>
    //           ))}
    //         </div>
    //         <p className="w-full md:max-w-[50%] lg:max-w-[40%] xl:max-w-[50%] text-gray-200 font-medium text-xl">
    //           {detailMovie.overview}
    //         </p>
    //         <div></div>
    //         <div className="text-white mt-2 text-1xl">Released: {detailMovie.release_date}</div>

    //         <p className="mt-2  text-white font-light flex">
    //           <AiFillStar size={20} />
    //           {detailMovie.vote_average}
    //         </p>

    //         <button className="mt-4 bg-red-600 text-white text-xl border-gray-300 py-3 px-8 rounded-2xl">
    //           <Link as={Link} to={`/trailers/${detailMovie.id}`}>
    //             Watch Trailer
    //           </Link>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full h-screen text-black">
      <div className="bg-cover bg-center h-screen bg-fixed relative w-full">
        <div className="absolute w-full h-screen bg-gradient-to-r from-black">
          <img
            className="w-full h-screen object-cover"
            src={`https://image.tmdb.org/t/p/original/${detailMovie?.backdrop_path}`}
            alt={detailMovie.title}
          />
          <div className="absolute w-full top-[30%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold text-red-600 w-full md:w-1/2">
              {detailMovie.title}
            </h1>
            <div className="flex flex-wrap">
              {detailMovie.genres.map((genre, key) => (
                <p
                  key={key}
                  type="none"
                  className="text-white font-italic mr-2 mb-2 text-xl outline-black"
                >
                  {detailMovie.genres[key].name}
                </p>
              ))}
            </div>
            <p className="w-full md:max-w-[50%] lg:max-w-[40%] xl:max-w-[50%] text-gray-200 font-medium text-xl">
              {detailMovie.overview}
            </p>
            <div></div>
            <div className="text-white mt-2 text-1xl">Released: {detailMovie.release_date}</div>

            <p className="mt-2  text-white font-light flex">
              <AiFillStar size={20} />
              {detailMovie.vote_average}
            </p>

            <button className="mt-4 bg-red-600 text-white text-xl border-gray-300 py-3 px-8 rounded-2xl">
              <Link as={Link} to={`/trailers/${detailMovie.id}`}>
                Watch Trailer
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
