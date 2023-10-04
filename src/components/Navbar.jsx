// import { useEffect, useState } from "react";

const Navbar = () => {
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    // <header className={`${scrolled && 'bg-[#141414]' }`}>
      <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">WATCHLIX</h1>
        <div>
          <button className="text-white pr-4">Login</button>
          <button
            className="bg-red-600 px-6 py-2 rounded
         cursor-pointer text-white"
          >
            Register
          </button>
        </div>
      </div>
    // </header>
  );
};

export default Navbar;
