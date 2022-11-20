import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Image from "next/image";

const CustomizedDot = (props) => {
  const { cx, cy, stroke, payload, value } = props;
  return (
    <svg
      x={cx - 10}
      y={cy - 10}
      width={20}
      height={20}
      fill="red"
      viewBox="0 0 1024 1024"
    >
      <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
    </svg>
  );
};

const Classification = ({ data }) => {
  console.log(data);

  return (
    <div className="classification-wrapper">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="dudu"
            stroke="red"
            dot={<CustomizedDot />}
          />
          <Line
            type="monotone"
            dataKey="cabu"
            stroke="#82ca9d"
            dot={<CustomizedDot />}
          />
          <Line
            type="monotone"
            dataKey="zamur"
            stroke="#8884d8"
            dot={<CustomizedDot />}
          />
          <Line
            type="monotone"
            dataKey="pato"
            stroke="blue"
            dot={<CustomizedDot />}
          />
          <Line
            type="monotone"
            dataKey="zamur"
            stroke="pink"
            dot={<CustomizedDot />}
          />
          <Line
            type="monotone"
            dataKey="tata"
            stroke="brown"
            dot={<CustomizedDot />}
          />
          <Line
            type="monotone"
            dataKey="thomaz"
            stroke="purple"
            dot={<CustomizedDot />}
          />
          <Line
            type="monotone"
            dataKey="luquete"
            stroke="black"
            dot={<CustomizedDot />}
          />
          <Line
            type="monotone"
            dataKey="saulo"
            stroke="orange"
            dot={<CustomizedDot />}
          />
          <Line
            type="monotone"
            dataKey="andre"
            stroke="grey"
            dot={<CustomizedDot />}
          />
          <Line
            type="monotone"
            dataKey="reinaldo"
            stroke="salmon"
            dot={<CustomizedDot />}
          />
          <Line
            type="monotone"
            dataKey="gober"
            stroke="indigo"
            dot={<CustomizedDot />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Classification;
