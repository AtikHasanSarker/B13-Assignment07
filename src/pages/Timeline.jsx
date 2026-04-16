import React, { useContext, useState } from 'react';
import { TimelineContext } from '../context/ContextProvider';
import call from "../assets/icons/call.png";
import text from "../assets/icons/text.png";
import video from "../assets/icons/video.png";
import { RiArrowDropDownLine } from 'react-icons/ri';
import { GridLoader } from 'react-spinners';

const Timeline = () => {
    const { timeline} = useContext(TimelineContext);
    const [data, setData] = useState()
    const [sortingType, setSortingType] = useState("Default")
    const handleSorting = (sort) => {
      setSortingType(sort);
      const newData = timeline.filter(item => item.action == sort)
      setData(newData);
    }

    return (
      <div className="bg-gray-100">
        <div className="max-w-285 mx-auto px-5 py-10 md:py-20">
          <h3 className="font-semibold text-4xl md:text-5xl">Timeline</h3>
          <div className="dropdown dropdown-bottom my-6">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 text-gray-500 text-xl py-8"
            >
              Filter By {sortingType}
              <RiArrowDropDownLine className="text-3xl" />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a onClick={() => handleSorting("Call")}>Call</a>
              </li>
              <li>
                <a onClick={() => handleSorting("Text")}>Text</a>
              </li>
              <li>
                <a onClick={() => handleSorting("Video")}>Video</a>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            {(sortingType == "Default" ? timeline : data).map((item, ind) => (
              <div
                key={ind}
                className="flex items-center bg-white gap-4 p-4 rounded-2xl border border-gray-200 hover:bg-amber-50 hover:cursor-grab transition duration-300"
              >
                <img
                  src={
                    item.action == "Call"
                      ? call
                      : item.action == "Text"
                        ? text
                        : item.action == "Video"
                          ? video
                          : ""
                  }
                  alt=""
                  className="w-10"
                />
                <div>
                  <h4>
                    <span className="text-xl text-success-content font-semibold">
                      {item.action}
                    </span>
                    <span className="text-lg"> with {item.name}</span>
                  </h4>
                  <p>{new Date().toDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Timeline;