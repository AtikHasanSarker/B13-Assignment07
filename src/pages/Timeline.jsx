import React, { useContext } from 'react';
import { TimelineContext } from '../context/ContextProvider';
import call from "../assets/icons/call.png";
import text from "../assets/icons/text.png";
import video from "../assets/icons/video.png";

const Timeline = () => {
    const { timeline} = useContext(TimelineContext);
    console.log(timeline)
    return (
      <div className="max-w-285 mx-auto my-20">
        <h3 className="font-semibold text-5xl">Timeline</h3>
        <div className="my-6">Filter Timeline</div>
        <div className="space-y-6">
          {timeline.map((item, ind) => (
            <div
              key={ind}
              className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200 hover:bg-gray-300 hover:cursor-grab transition duration-300"
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
                  <span className='text-lg'> with {item.name}</span>
                </h4>
                <p>{new Date().toDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Timeline;