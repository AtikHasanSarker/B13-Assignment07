import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { TimelineContext } from '../context/ContextProvider';



const Stats = () => {
    const { timeline} = useContext(TimelineContext);
    const call = timeline.filter(i => i.action == "Call")
    const text = timeline.filter(i => i.action == "Text")
    const video = timeline.filter(i => i.action == "Video")

    const data = [
      { name: "Call", value: call.length, fill: "#244d3f" },
      { name: "Text", value: text.length, fill: "#7f37f5" },
      { name: "Video", value: video.length, fill: "#37a163" },
    ];
    return (
      <div className="bg-gray-100">
        <div className="max-w-275 px-5 mx-auto py-10 md:py-20">
          <h3 className="font-bold mb-10 text-left text-4xl md:text-5xl">
            Friendship Analytics
          </h3>
          <div>
            <div className="bg-white py-20 rounded-2xl flex justify-center">
              <PieChart
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  maxHeight: "80vh",
                  aspectRatio: 1,
                }}
                responsive
              >
                <Pie
                  data={data}
                  innerRadius="80%"
                  outerRadius="100%"
                  cornerRadius="50%"
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  isAnimationActive={true}
                />
                <Legend wrapperStyle={{ fontSize: "24px" }} iconSize={24} />
                <Tooltip />
              </PieChart>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Stats;