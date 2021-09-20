import React from "react";
import imgFile from "../../../../public/Icons/imgfile.svg";
import video from "../../../../public/Icons/video.svg";
import documentFile from "../../../../public/Icons/documentfile.svg";
import zip from "../../../../public/Icons/zip.svg";

const RecentlyViewed = () => {
  return (
    <div className="w-full px-10 py-12">
      <h3 className=" mb-8 text-[20px] text-center text-gray-600 sm:text-left">
        Recently Viewed
      </h3>
      <div className="w-full flex flex-wrap justify-between">
        <div className="flex flex-col">
          <div className="w-48 h-40 sm:w-32 sm:h-32 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-56 xl:h-52 flex justify-around bg-blue-100 rounded-md transition-all duration-150 shadow-md">
            <img
              className="icon"
              src={imgFile}
              alt="image icon"
              className="icon w-1/3"
            />
          </div>
          <div className="mt-5">
            <p className="name text-[18px]">Images</p>
            <p className="date text-[14px] text-gray-400">Viewed 20 Jul 2020</p>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="w-48 h-40 sm:w-32 sm:h-32 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-56 xl:h-52 flex justify-around bg-pink-100 rounded-md transition-all duration-500 shadow-md ">
            <img
              className="icon"
              src={video}
              alt="video icon"
              className="icon w-1/3"
            />
          </div>
          <div className="mt-5">
            <p className="name text-[18px]">Videos</p>
            <p className="date text-[14px] text-gray-400">Viewed 20 Jul 2020</p>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="w-48 h-40 sm:w-32 sm:h-32 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-56 xl:h-52 flex justify-around bg-green-200 rounded-md transition-all duration-500  shadow-md">
            <img className="icon w-1/3" src={documentFile} alt="video icon" />
          </div>
          <div className="mt-5">
            <p className="name text-[18px]">Document</p>
            <p className="date text-[14px] text-gray-400">Viewed 20 Jul 2020</p>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="w-48 h-40 sm:w-32 sm:h-32 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-56 xl:h-52 flex justify-around bg-pink-200 rounded-md transition-all duration-500  shadow-md">
            <img
              className="icon"
              src={zip}
              alt="pdf ion"
              className="icon w-1/3"
            />
          </div>
          <div className="mt-5">
            <p className="name text-[18px]">Compressed</p>
            <p className="date text-[14px] text-gray-400">Viewed 20 Jul 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewed;
