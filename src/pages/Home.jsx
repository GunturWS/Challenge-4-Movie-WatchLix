
import Main from "../components/Main";
import PopularMovie from "../components/PopularMovie";
// import TrendingMovie from "../components/TrendingMovie"
// import requests from "../Request";
// import Row from "../components/Row";

const Home = () => {
  return (
    <div>
      <Main />
      <PopularMovie />
      {/* <TrendingMovie/> */}
      
      {/* <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="Trending" fetchURL={requests.requestUpcoming} /> */}
    </div>
  );
}

export default Home
// const Home = () => {
  //   const [popularMovies, setPopularMovies] = useState([]);

  //   useEffect(() => {
  //     const getPopularMovies = async () => {
  //       try {
  //         const response = await axios.get(
  //           `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
  //           {
  //             headers: {
  //               Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmUxODkxMjdmNWIyZDY3MDViYjM2MmVjYjk3YTU1NyIsInN1YiI6IjY1MTQyMzVkOWI4NjE2MDBhY2FkYjQwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SfwBqd7kyXNB4e02yfbT1yUdDmcCzef5ASU5bfuTQro`,
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

  //     getPopularMovies();
  //   }, []);

  //   if (popularMovies.length === 0) {
  //     return <h1>Loading....</h1>;
  //   }

  //   return (
  //     <>
  //       <Main />
  //       <div className="">
  //         {popularMovies.map((movie) => (
  //           <div key={movie?.id}>
  //             <h1 className="text-4xl font-semibold">{movie?.title}</h1>
  //             <p className="text-1xl">{movie?.overview}</p>
  //             <div className="">
  //               <div key={movie?.id}>
  //                 <img
  //                   className="w-full h-full"
  //                   src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
  //                   alt={movie?.title}
  //                 />
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </>
  //   );
  // };
//   const [popularMovies, setPopularMovies] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_API_URL}/3/movie/popular?language=en-US&page=1`,
//           {
//             headers: {
//               Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
//             },
//           }
//         );
//         const { data } = response;

//         setPopularMovies(data.results);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-3xl font-semibold my-4">Popular Movies</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {popularMovies.map((movie) => (
//           <div key={movie.id} className="bg-white p-4 rounded-lg shadow">
//             <img
//               src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//               alt={movie.title}
//               className="w-full h-auto rounded-lg"
//             />
//             <h2 className="text-lg font-semibold my-2">{movie.title}</h2>
//             <p className="text-gray-600">{movie.overview}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
//   const [popularMovies, setPopularMovies] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getPopularMovies = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_API_URL}/3/movie/popular?language=en-US&page=1`,
//           {
//             headers: {
//               Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
//             },
//           }
//         );
//         const { data } = response;

//         setPopularMovies(data?.results || []);
//         setLoading(false);
//       } catch (error) {
//         if (axios.isAxiosError(error)) {
//           alert(error?.response?.data?.status_message);
//         }
//         setLoading(false);
//       }
//     };

//     getPopularMovies();
//   }, []);

//   if (loading) {
//     return <h1>Loading....</h1>;
//   }

//   return (
//     <>
//       {/* <Navbar /> */}
//       {popularMovies.map((movie) => (
//         <div key={movie?.id}>
//           <h1>{movie?.title}</h1>
//           <p>{movie?.overview}</p>
//         </div>
//       ))}
//     </>
//   );
// };
// return (
//   <div>
//     <Navbar />
//     <Popular />
//   </div>
// );

// export default Home;
