import AniImage from "../assets/logoimg.png"
import logo from "../assets/Vector (5).png"
import meme from "../assets/meme.png"
import { FaSearch } from "react-icons/fa"

const TrandingStory = () => {
  return (
    <div className="flex">
      <div className="flex absolute items-center w-full">
      <img src={AniImage} width={20} height={20} className="w-[80px] h-[85px]"/>
      <img src={logo} width={20} height={20} className="w-[80px] h-[25px] absolute left-10 top-4"/>
      </div>
      <div className="mt-14 px-4">
        <img src={meme}  className="rounded-full w-[55px] h-[55px]"/>
        <div>
                                                            <FaSearch />
        </div>
      </div>

    </div>
  )
}

export default TrandingStory;