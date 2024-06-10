import React from "react";
import { FaArrowLeft, FaEllipsisV } from "react-icons/fa";
import meme from "../assets/meme.png";

const NotificationPage = () => {
  const Groups = [
    {
      Image: meme,
      h1tag: "Group 1",
      date: "1:01 AM",
    },
    {
      Image: meme,
      h1tag: "Group 1",
      date: "1:01 AM",
    },
    {
      Image: meme,
      h1tag: "Group 1",
      date: "1:01 AM",
    },
    {
      Image: meme,
      h1tag: "Group 1",
      date: "1:01 AM",
    },
    {
      Image: meme,
      h1tag: "Group 1",
      date: "1:01 AM",
    },
    {
      Image: meme,
      h1tag: "Group 1",
      date: "1:01 AM",
    },
  ];
  return (
    <div className="px-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <FaArrowLeft />
          <span>Notifications</span>
        </div>
        <FaEllipsisV />
      </div>
      <h1>Notifications</h1>
      {Groups.map((groupList, index) => (
        <div key={index} className="flex items-center justify-between">
                                                           <div className="flex items-center gap-4">
                                                           <img src={groupList.Image} className="w-[48px] h-[48px] rounded-full"/>
                                                            <h1>{groupList.h1tag}</h1>
                                                           </div>
                                                           <span>{groupList.date}</span>
        </div>
      ))}
    </div>
  );
};
export default NotificationPage;
