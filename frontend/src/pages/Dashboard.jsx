import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

import KpiCard from "../components/KpiCard";

import RiskChart from "../components/RiskChart";

const Dashboard = () => {

  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {

    logout();

    navigate("/login");

  };

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

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="
            bg-red-500
            text-white
            px-4
            py-2
            rounded
          "
        >
          Logout
        </button>

      </div>

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