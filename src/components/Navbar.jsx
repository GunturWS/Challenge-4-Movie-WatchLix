// import { useEffect, useState } from "react";

// const Navbar = () => {
//   return (
//     <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
//       <h1 className="text-red-600 text-4xl font-bold cursor-pointer">WATCHLIX</h1>
//       <div>
//         <button className="text-white pr-4">Login</button>
//         <button
//           className="bg-red-600 px-6 py-2 rounded
//          cursor-pointer text-white"
//         >
//           Register
//         </button>
//       </div>
//     </div>
//     // </header>
//   );
// };

// export default Navbar;

import { useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State untuk input pencarian

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-transparant text-white p-4 flex items-center justify-between z-50 w-full fixed">
      <h1 className="text-red-600 text-2xl md:text-4xl font-bold cursor-pointer">WATCHLIX</h1>
      <div className="flex items-center">
        <div className="">
          <button className="bg-red-600 px-4 py-1 rounded-l-md cursor-pointer">Search</button>
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 rounded-r-md outline-none"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <button className="text-white ml-4">Login</button>
        <button className="bg-red-600 px-4 py-1 rounded cursor-pointer ml-2">Register</button>
      </div>
    </div>
  );
};

export default Navbar;
