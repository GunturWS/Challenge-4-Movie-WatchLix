import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TrailerMovie = () => {
  const { movieId } = useParams();
  const [trailerMovie, setTrailerMovie] = useState(null);
  const [poster, setPoster] = useState(null);

  useEffect(() => {
    const getPoster = async () => {
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
          setPoster(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getPoster();
  }, [movieId]);

  useEffect(() => {
    const getTrailerMovie = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/3/movie/${movieId}/videos?language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
            },
          }
        );

        if (response.data.results.length > 0) {
          // Ambil kunci video pertama dari respons API
          const videoKey = response.data.results[0].key;
          setTrailerMovie(videoKey);
        }
      } catch (error) {
        console.log("Error fetching movie data", error);
      }
    };
    getTrailerMovie();
  }, [movieId]);

  if (trailerMovie === null) {
    return <div>Loading...</div>;
  }

  // Gunakan komponen iframe untuk menampilkan trailer
  return (
    <div className=" realtive w-full">
      <img
        className="w-full h-screen"
        src={`https://image.tmdb.org/t/p/original/${poster?.backdrop_path}`}
      />

      <iframe
        className="absolute top-0 w-full h-screen px-10 py-72 2xl:px-52 2xl:py-20  flex items-center justify-center"
        src={`https://www.youtube.com/embed/${trailerMovie}`}
        title={trailerMovie?.name}
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default TrailerMovie;
