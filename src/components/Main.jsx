import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
        <div className="absolute w-full h-full ">
          {trendingMovies.map((movie) => (
            <div key={movie.id}>
              <img
                className="w-full h-screen object-cover"
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                alt={movie?.title}
              />
              <div className="absolute w-full top-[35%] p-4 md:p-8">
                <h1 className="text-4xl md:text-6xl font-bold text-red-600">
                  {movie?.title}
                </h1>
                
                <div className="my-4">
                  <p className="w-full md:max-w-[50%] lg:max-w-[40%] xl:max-w-[50%] text-gray-200 font-medium text-2xl">
                    {truncateString(movie?.overview)}
                  </p>
                  <button className="mt-4 bg-red-600 text-white text-2xl border-gray-300 py-4 px-8 rounded-2xl">
                    <Link as={Link} to={`/trailers/${movie.id}`}>
                      Watch Trailer
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    // <div className="w-full h-screen text-black">
    //   <div className="w-full h-full">
    //     <div className="absolute w-full h-full">
    //       {trendingMovies.map((movie) => (
    //         <div key={movie.id}>
    //           <img
    //             className="w-full h-screen object-cover"
    //             src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
    //             alt={movie?.title}
    //           />
    //           <div className="absolute w-full top-[30%] p-4 md:p-8">
    //             <h1 className="text-4xl md:text-5xl font-bold text-red-600 w-11/12 md:w-1/2 lg:w-1/3 xl:w-1/4">
    //               {movie?.title}
    //             </h1>
    //             <div className="my-4">
    //               <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 ">
    //                 {truncateString(movie?.overview)}
    //               </p>

    //               <p className="text-white font-poppins font">Released: {movie?.release_date}</p>
    //               <button className="bg-red-600 text-white border-gray-300 py-2 px-5 rounded-xl">
    //                 <Link as={Link} to={`/trailers/${movie.id}`}>
    //                   Watch Trailer
    //                 </Link>
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

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Main = () => {
//   const [trendingMovies, setTrendingMovies] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const getTrendingMovies = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_API_URL}/3/trending/movie/day?language=en-US`,
//           {
//             headers: {
//               Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
//             },
//           }
//         );
//         const { data } = response;

//         setTrendingMovies(data.results.slice(0, 5));
//       } catch (error) {
//         console.log("Error fetching data: ", error);
//       }
//     };
//     getTrendingMovies();
//   }, []);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === trendingMovies.length - 1 ? 0 : prevIndex + 1));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? trendingMovies.length - 1 : prevIndex - 1));
//   };

//   const truncateString = (str, num) => {
//     if (str?.length > num) {
//       return str.slice(0, num) + "...";
//     } else {
//       return str;
//     }
//   };

//   return (
//     <div className="w-full h-screen text-black relative">
//       {trendingMovies.length > 0 && (
//         <div className="w-full h-full overflow-hidden">
//           <div className="absolute w-full h-full bg-gradient-to-r from-black">
//             <div
//               className="w-full h-screen object-cover transition-transform duration-300 transform"
//               style={{
//                 transform: `translateX(-${currentIndex * 100}%)`,
//               }}
//             >
//               {trendingMovies.map((movie, index) => (
//                 <div
//                   key={movie.id}
//                   className={`w-full h-screen ${
//                     index === currentIndex ? "opacity-100" : "opacity-0"
//                   }`}
//                 >
//                   <img
//                     className="w-full h-screen object-cover"
//                     src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
//                     alt={movie?.title}
//                   />
//                   <div className="absolute w-full top-[30%] p-4 md:p-8">
//                     <h1 className="text-4xl md:text-5xl font-bold text-red-600 w-1/2">
//                       {movie?.title}
//                     </h1>
//                     <div className="my-4">
//                       <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
//                         {truncateString(movie?.overview, 150)}
//                       </p>
//                       <p className="text-white font-poppins font">
//                         Released: {movie?.release_date}
//                       </p>
//                       <button className="bg-red-600 text-white border-gray-300 py-2 px-5 rounded-xl">
//                         <Link as={Link} to={`/trailers/${movie.id}`}>
//                           Watch Trailer
//                         </Link>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//             <button
//               className="absolute top-1/2 left-4 bg-gray-800 text-white py-2 px-3 rounded-full transform -translate-y-1/2"
//               onClick={prevSlide}
//             >
//               &lt;
//             </button>
//             <button
//               className="absolute top-1/2 right-4 bg-gray-800 text-white py-2 px-3 rounded-full transform -translate-y-1/2"
//               onClick={nextSlide}
//             >
//               &gt;
//             </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Main;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Link } from "react-router-dom";

// const Main = () => {
//   const [trendingMovies, setTrendingMovies] = useState([]);

//   useEffect(() => {
//     const getTrendingMovies = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_API_URL}/3/trending/movie/day?language=en-US`,
//           {
//             headers: {
//               Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
//             },
//           }
//         );
//         const { data } = response;

//         setTrendingMovies(data.results.slice(0, 5));
//       } catch (error) {
//         console.log("Error fetching data: ", error);
//       }
//     };
//     getTrendingMovies();
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false, // Tidak menampilkan tombol panah
//   };

//   const truncateString = (str, num) => {
//     if (str?.length > num) {
//       return str.slice(0, num) + "...";
//     } else {
//       return str;
//     }
//   };

//   return (
//     <div className="w-full h-screen text-black">
//       <div className="w-full h-full">
//         <div className="absolute w-full h-full bg-gradient-to-r from-black">
//           <Slider {...settings}>
//             {trendingMovies.map((movie) => (
//               <div key={movie.id}>
//                 <img
//                   className="w-full h-screen object-cover"
//                   src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
//                   alt={movie?.title}
//                 />
//                 <div className="absolute w-full top-[30%] p-4 md:p-8">
//                   <h1 className="text-4xl md:text-5xl font-bold text-red-600 w-1/2">
//                     {movie?.title}
//                   </h1>
//                   <div className="my-4">
//                     <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 ">
//                       {truncateString(movie?.overview)}
//                     </p>

//                     <p className="text-white font-poppins font">Released: {movie?.release_date}</p>
//                     <button className="bg-red-600 text-white border-gray-300 py-2 px-5 rounded-xl">
//                       <Link as={Link} to={`/trailers/${movie.id}`}>
//                         Watch Trailer
//                       </Link>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;
