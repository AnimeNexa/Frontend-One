import AniImage from "../assets/logoimg.png";
import logo from "../assets/Vector (5).png";
import meme from "../assets/meme.png";
import { FaSearch, FaEllipsisV, FaLink } from "react-icons/fa";

const TrandingStory = () => {
  return (
    <div className="">
      <div className="flex items-center w-full">
        <img
          src={AniImage}
          width={20}
          height={20}
          className="w-[80px] h-[85px]"
        />
        <img
          src={logo}
          width={20}
          height={20}
          className="w-[80px] h-[25px] absolute left-10 top-4"
        />
      </div>
      <div className="px-4 flex justify-between w-full items-center">
        <img src={meme} className="rounded-full w-[55px] h-[55px]" />
        <div>
          <FaSearch />
        </div>
      </div>
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={meme}
              className="relative rounded-full w-[55px] h-[55px]"
            />
            <span>DBZ CLUB 1h</span>
          </div>
          <FaEllipsisV />
        </div>
        <h3 className="text-[15px] font-roboto-condensed">
          We’re announcing a new club activity soon as requests have been piling  
          up.
        </h3>
      </div>
        <div>
          <img src={meme} className="w-full h-[200px]" />
          <FaLink />

        </div>
    </div>
  );
};

export default TrandingStory;
