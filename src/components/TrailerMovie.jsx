import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TrailerMovie = () => {
  const { movieId } = useParams();
  const [trailerMovie, setTrailerMovie] = useState(null);

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
    <div className="w-full h-full">
      <div className="px-30 py-30">
        <iframe
          className="w-full h-screen px-52 py-20"
          src={`https://www.youtube.com/embed/${trailerMovie}`}
          title="Trailer"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default TrailerMovie;
