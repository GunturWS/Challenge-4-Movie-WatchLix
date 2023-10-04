import { useEffect, useState } from "react";
import axios from "axios";
// import Navbar from "./Navbar";

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/3/movie/popular?language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer  ${import.meta.env.VITE_API_AUTH_TOKEN}`,
            },
          }
        );
        const { data } = response;

        setPopularMovies(data?.results);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error?.response?.data?.status_message);
          return;
        }

        alert(error?.message);
      }
    };

    getPopularMovies();
  }, []);

  if (popularMovies.length === 0) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      {/* <Navbar/> */}
      {popularMovies.map((movie) => (
        <div key={movie?.id}>
          <h1>{movie?.title}</h1>
          <p>{movie?.overview}</p>
        </div>
      ))}
    </>
  );
};
// const Popular = () => {
//   const [popularMovies, setPopularMovies] = useState([]);

//   useEffect(() => {
//     const getPopularMovies = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_API_URL}/3/movie/popular?language=en-US&page=1`,
//           {
//             headers: {
//               Authorization: `Bearer  ${import.meta.env.VITE_API_AUTH_TOKEN}`,
//             },
//           }
//         );
//         const { data } = response;

//         setPopularMovies(data?.results);
//       } catch (error) {
//         if (axios.isAxiosError(error)) {
//           alert(error?.response?.data?.status_message);
//           return;
//         }

//         alert(error?.message);
//       }
//     };

//   getPopularMovies();
// }, []);

// if (popularMovies.length === 0) {
//   return <h1>Loading....</h1>;
// }

//   return (
//     <>
//       <Navbar />
//       {popularMovies.map((movie) => (
//         <div key={movie?.id}>
//           <h1>{movie?.title}</h1>
//           <p>{movie?.overview}</p>
//         </div>
//       ))}
//     </>
//   );
// };

export default Popular;
