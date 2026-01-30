
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Fri", amount: 200 },
  { day: "Sat", amount: 5200 },
  { day: "Sun", amount: 300 },
  { day: "Mon", amount: 200 },
  { day: "Tue", amount: 3200 },
  { day: "Wed", amount: 400 },
  { day: "Thu", amount: 1200 },
];

const BookingChart = () => {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={data}>
        <XAxis dataKey="day" />
        <YAxis
          tickFormatter={(value) => `$${value}`}
          domain={[0, 10000]}
        />
        <Tooltip formatter={(value) => `$${value}`} />
        <Line
          type="monotone"
          dataKey="amount"
          stroke="#1d4ed8"
          strokeWidth={3}
          dot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BookingChart;
