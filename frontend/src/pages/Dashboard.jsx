import KpiCard from "../components/KpiCard";
import RiskChart from "../components/RiskChart";

const Dashboard = () => {

  const chartData = [

    {
      name: "High",
      value: 5,
    },

    {
      name: "Medium",
      value: 12,
    },

    {
      name: "Low",
      value: 8,
    },

  ];

  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-4">

        <KpiCard
          title="Total Risks"
          value="25"
        />

        <KpiCard
          title="High Risks"
          value="5"
        />

        <KpiCard
          title="Medium Risks"
          value="12"
        />

        <KpiCard
          title="Low Risks"
          value="8"
        />

      </div>

      <div className="mt-10">

        <RiskChart data={chartData} />

      </div>

    </div>
  );
};

export default Dashboard;