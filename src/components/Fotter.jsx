import {
  FaLinkedinIn,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  return (
    //     <footer className="bg-gray-900 text-white">
    //       <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
    //         <h1
    //           className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
    //          md:w-2/5"
    //         >
    //           <span className="text-teal-400">Free</span> until you're ready to
    //           launch
    //         </h1>
    //         <div>
    //           <input
    //             type="text"
    //             placeholder="Enter Your ph.no"
    //             className="text-gray-800
    //            sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
    //           />
    //           <button
    //             className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
    //            rounded-md text-white md:w-auto w-full"
    //           >
    //             Request Code
    //           </button>
    //         </div>
    //       </div>
    //       <ItemsContainer />
    //       <div
    //         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
    //       text-center pt-2 text-gray-400 text-sm pb-8"
    //       >
    //         <span>© 2020 Appy. All rights reserved.</span>
    //         <span>Terms · Privacy Policy</span>
    //         <SocialIcons Icons={Icons} />
    //       </div>
    //     </footer>
    //   );
    // };
    <footer className=" text-white">
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-red-600">WATCHLIX</h1>
          <p className="py-4 text-1xl">
            WATCHLIX adalah layanan streaming over-the-top video on-demand berlangganan INDONESIA
            yang dimiliki dan dioperasikan oleh Guntur Wisnu Saputra (FEJS3-BINAR ACADEMY).
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <a href="https://www.facebook.com/guntur.wisnu.52/">
              <FaFacebookSquare size={30} />
            </a>

            <a href="https://www.instagram.com/6ntrwsnu_/">
              <FaInstagram src="" size={30} />
            </a>

            <a href="https://github.com/GunturWS">
              <FaGithubSquare size={30} />
            </a>

            <a href="https://www.linkedin.com/in/guntur-wisnu-167121222/">
              <FaLinkedinIn size={30} />
            </a>
            <a href="http://discordapp.com/users/567586186856759296">
              <FaDiscord size={30} />
            </a>
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-semibold text-xl text-gray-400">Company</h6>
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Press</li>
              <li className="py-2 text-sm">Career</li>
              <li className="py-2 text-sm">Contact</li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-xl text-gray-400">Support</h6>
            <ul>
              <li className="py-2 text-sm">API Status</li>
              <li className="py-2 text-sm">Postman</li>
              <li className="py-2 text-sm">TMDB API</li>
              <li className="py-2 text-sm">Visual Studio Code</li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-xl text-gray-400">Resource</h6>
            <ul>
              <li className="py-2 text-sm">Resource Center</li>
              <li className="py-2 text-sm">Testimonials</li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-xl text-gray-400">Legal</h6>
            <ul>
              <li className="py-2 text-sm">Claim</li>
              <li className="py-2 text-sm">Policy</li>
              <li className="py-2 text-sm">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
