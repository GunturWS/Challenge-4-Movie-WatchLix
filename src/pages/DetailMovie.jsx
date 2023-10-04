import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div className="w-full h-screen text-black">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px]">
          <img
            className="w-full h-auto block"
            src={`https://image.tmdb.org/t/p/original/${detailMovie?.backdrop_path}`}
            alt={detailMovie.title}
          />
          <div className="absolute w-full top-[50%] p-4 md:p-8">
            <h1 className="text-red-600 text-3xl md:text-5xl font-bold">{detailMovie.title}</h1>
            <p className="text-red-600 text-3xl">{detailMovie.genre_ids}</p>
            <p className="text-white w-1/3 text-">{detailMovie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
