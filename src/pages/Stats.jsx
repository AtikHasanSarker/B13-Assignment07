import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { TimelineContext } from '../context/ContextProvider';



const Stats = () => {
    const { timeline} = useContext(TimelineContext);
    const call = timeline.filter(i => i.action == "Call")
    const text = timeline.filter(i => i.action == "Text")
    const video = timeline.filter(i => i.action == "Video")

    const data = [
      { name: "Call", value: call.length, fill: "#0088FE" },
      { name: "Text", value: text.length, fill: "#00C49F" },
      { name: "Video", value: video.length, fill: "#FFBB28" },
    ];
    return (
      <div className="my-20 flex justify-center">
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
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend wrapperStyle={{ fontSize: "24px" }} iconSize={24} />
          <Tooltip />
        </PieChart>
      </div>
    );
};

export default Stats;