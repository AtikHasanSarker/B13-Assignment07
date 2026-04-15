import React, { useContext } from 'react';
import { TimelineContext } from '../context/ContextProvider';
import text from "../assets/icons/text.png"

const Timeline = () => {
    const { timeline} = useContext(TimelineContext);
    console.log(timeline)
    return (
      <div className="max-w-285 mx-auto my-20">
        <h3 className="font-semibold text-2xl">Timeline</h3>
        <div className="my-6">Filter Timeline</div>
        <div className='space-y-6'>
          <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:bg-gray-300 hover:cursor-grab transition duration-300">
            <img src={text} alt="" className="w-10" />
            <div>
              <h4>
                <span>Text</span> with Tom Holand
              </h4>
              <p>March 24, 2026</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Timeline;