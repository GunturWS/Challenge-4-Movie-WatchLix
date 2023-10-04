import { useEffect, useState } from "react";
import axios from "axios";
// import requests from "../Request";

// import React from "react";
// import { data } from "autoprefixer";

const Main = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/3/trending/movie/day?language=en-US`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
            },
          }
        );
        const { data } = response;

        setTrendingMovies(data.results.slice(0, 1));
      } catch (error) {
        console.log("Error feching data: ", error);
      }
    };
    getTrendingMovies();
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-screen text-black">
      <div className="w-full h-full">
        <div className="absolute w-full h-full bg-gradient-to-r from-black">
          {trendingMovies.map((movie) => (
            <div key={movie.id}>
              <img
                className="w-full h-screen object-cover"
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                alt={movie?.title}
              />
              <div className="absolute w-full top-[20%] p-4 md:p-8">
                <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
                <div className="my-4">
                  <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
                    Play
                  </button>
                  <button className="border text-white border-gray-300 py-2 px-5 ml-4">
                    Watch Trailer
                  </button>
                </div>
                <p className="text-gray-400">Released: {movie?.release_date}</p>
                <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
                  {truncateString(movie?.overview, 150)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    // <div className="w-full h-screen text-black">
    //   <div className="w-full h-full">
    //     <div className="absolute w-full h-[550px] bg-gradient-to-r from-black">
    //       {trendingMovies.map((movie) => (
    //         <div key={movie.id}>
    //           <img
    //             className="w-full h-screen object-cover"
    //             src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
    //             alt={movie?.title}
    //           />
    //           <div className="absolute w-full top-[20%] p-4 md:p-8">
    //             <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
    //             <div className="my-4">
    //               <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
    //                 Play
    //               </button>
    //               <button className="border text-white border-gray-300 py-2 px-5 ml-4">
    //                 Watch Trailer
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Main;

//   return (
//     <div className="w-full h-[600px] text-white">
//       <div className="w-full h-full">
//         <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
//         {movies.length > 0 ? (
//           <img
//             className="w-full h-full object-cover"
//             src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
//             alt={movie?.title}
//           />
//         ) : (
//           <p>Loading...</p>
//         )}

//         {/* <img
//           className="w-full h-full object-cover"
//           src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
//           alt={movie?.title}
//         /> */}
//         <div className="absolute w-full top-[20%] p-4 md:p-8">
//           <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
//           <div className="my-4">
//             <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
//               Play
//             </button>
//             <button className="border text-white border-gray-300 py-2 px-5 ml-4">
//               Watch Later
//             </button>
//           </div>
//           <p className="text-gray-400 text-sm">Released: {movie?.release_date}</p>
//           <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
//             {truncateString(movie?.overview, 150)}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Main = () => {
//   const [movies, setMovies] = useState([]);

//   const movie = movies[Math.floor(Math.random() * movies.length)];

//   useEffect(() => {
//     axios.get(requests.requestTrending).then((response) => {
//       setMovies(response.data.results);
//     });
//   }, []);
//     console.log(movie);

//   const truncateString = (str, num) => {
//     if (str?.length > num) {
//       return str.slice(0, num) + "...";
//     } else {
//       return str;
//     }
//   };

//   return (
//     <div className="w-full h-[600px] text-white">
//       <div className="w-full h-full">
//         <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
//         {movies.length > 0 ? (
//   <img
//     className="w-full h-full object-cover"
//     src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
//     alt={movie?.title}
//   />
// ) : (
//   <p>Loading...</p>
// )}

//         {/* <img
//           className="w-full h-full object-cover"
//           src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
//           alt={movie?.title}
//         /> */}
//         <div className="absolute w-full top-[20%] p-4 md:p-8">
//           <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
//           <div className="my-4">
//             <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
//               Play
//             </button>
//             <button className="border text-white border-gray-300 py-2 px-5 ml-4">
//               Watch Later
//             </button>
//           </div>
//           <p className="text-gray-400 text-sm">Released: {movie?.release_date}</p>
//           <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
//             {truncateString(movie?.overview, 150)}
//           </p>
//         </div>
//       </div>
//     </div>

// const [upMovies, setUpMovies] = useState([]);

// const movie = upMovies[Math.floor(Math.random() * upMovies.length)];

// useEffect(() => {
//   const getUpMovies = async () => {
//     try {
//       const response = await axios.get(
//         `${import.meta.env.VITE_API_URL}/3/movie/upcoming?language=en-US&page=1`,
//         {
//           headers: {
//             Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
//           },
//         }
//       );
//       const { data } = response;

//       setUpMovies(data.results);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
//   getUpMovies();
// }, []);
// console.log(movie);

// return (
//   <div className="w-full h-[550px] text-white">
//     <div className="w-full h-full">
//       <div className="absolute w-full h-[550px] bg-gradient-to-r from-black">
//         {upMovies.map((movie) => (
//           // <div key={movie.id} className="'w-full h-full object-cover">
//           <img
//             className=""
//             src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
//             alt=""
//           />
//           // </div>
//         ))}
//       </div>
//     </div>
//   </div>
// <div className="w-full h-[550px] text-white">
//   <div className="w-full h-full">
//     <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
//     <div>
//       <img className="w-full h-full object-cover" src="" alt="" />
//     </div>
//   </div>
// </div>
//   );
// };

// export default Main;
// const Main = () => {
//   const [movies, setMovies] = useState([]);

//   const movie = movies[Math.floor(Math.random() * movies.length)];

//   useEffect(() => {
//     axios.get(requests.requestPopular).then((response) => {
//       setMovies(response.data.results);
//     });
//   }, []);
//   //   console.log(movie);

//   const truncateString = (str, num) => {
//     if (str?.length > num) {
//       return str.slice(0, num) + "...";
//     } else {
//       return str;
//     }
//   };

//   return (
//     <div className="w-full h-[600px] text-white">
//       <div className="w-full h-full">
//         <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
//         <img
//           className="w-full h-full object-cover"
//           src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
//           alt={movie?.title}
//         />
//         <div className="absolute w-full top-[20%] p-4 md:p-8">
//           <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
//           <div className="my-4">
//             <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
//               Play
//             </button>
//             <button className="border text-white border-gray-300 py-2 px-5 ml-4">
//               Watch Later
//             </button>
//           </div>
//           <p className="text-gray-400 text-sm">Released: {movie?.release_date}</p>
//           <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
//             {truncateString(movie?.overview, 150)}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
//   const [movies, setMovies] = useState([]);

//   const movie = movies[Math.floor(Math.random() * movies.length)];

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

//         setMovies(data?.results);
//       } catch (error) {
//         if (axios.isAxiosError(error)) {
//           alert(error?.response?.data?.status_message);
//           return;
//         }

//         alert(error?.message);
//       }
//     };

//     getPopularMovies();
//   }, []);
//   //   axios.get(requests.requestPopular).then((response) => {
//   //     setMovies(response.data.results);
//   //   });
//   // }, []);
//   // console.log(movie);

//   return (
//     <>
//       <div className="w-full h-[600px] text-white">
//         <div className="w-full h-full">
//           <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
//           <img
//             className="w-full h-full object-cover"
//             src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//             alt={movie?.title}
//           />
//           <div className="absolute w-full top-[20%] p-4 md:p-8">
//             <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
//             <div className="my-4">
//               <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
//                 Play
//               </button>
//               <button className="border text-white border-gray-300 py-2 px-5 ml-4">
//                 Watch Later
//               </button>
//             </div>
//             <p className="text-gray-400 text-sm">Released: {movie?.release_date}</p>
//             <h1>{movie?.title}</h1>
//             <p>{movie?.overview}</p>
//             {/* <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
//               {truncateString(movie?.overview, 150)}
//             </p> */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Main;
