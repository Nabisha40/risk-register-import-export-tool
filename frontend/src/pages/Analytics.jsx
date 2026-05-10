import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [

  {
    name: "High",
    value: 3,
  },

  {
    name: "Medium",
    value: 4,
  },

  {
    name: "Low",
    value: 3,
  },

];

const Analytics = () => {

  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Analytics Dashboard
      </h1>

      <div className="bg-white p-6 rounded shadow">

        <ResponsiveContainer
          width="100%"
          height={400}
        >

          <BarChart data={data}>

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="value" />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default Analytics;