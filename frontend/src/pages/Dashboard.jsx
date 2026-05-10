import {
  useContext,
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import { AuthContext }
from "../context/AuthContext";

import KpiCard
from "../components/KpiCard";

import RiskChart
from "../components/RiskChart";

import API from "../api/riskApi";

const Dashboard = () => {

  const { logout } =
    useContext(AuthContext);

  const navigate =
    useNavigate();

  const [risks, setRisks] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchRisks();

  }, []);

  const fetchRisks = async () => {

    try {

      console.log(
        "Fetching risks..."
      );

      const response =
        await API.get(
          "/risk-registers/all"
        );

      console.log(response.data);

      setRisks(
        response.data?.content ||
        response.data ||
        []
      );

    } catch (error) {

      console.error(
        "Error fetching risks:",
        error
      );

    } finally {

      setLoading(false);
    }
  };

  const handleLogout = () => {

    logout();

    navigate("/login");
  };

  const highRisks =
    risks.filter(
      risk =>
        risk.priority === "HIGH"
    ).length;

  const mediumRisks =
    risks.filter(
      risk =>
        risk.priority === "MEDIUM"
    ).length;

  const lowRisks =
    risks.filter(
      risk =>
        risk.priority === "LOW"
    ).length;

  const chartData = [

    {
      name: "High",
      value: highRisks,
    },

    {
      name: "Medium",
      value: mediumRisks,
    },

    {
      name: "Low",
      value: lowRisks,
    },

  ];

  if (loading) {

    return (

      <div
        className="
          flex
          justify-center
          items-center
          h-screen
        "
      >

        <h1
          className="
            text-3xl
            font-bold
          "
        >
          Loading Dashboard...
        </h1>

      </div>
    );
  }

  return (

    <div className="p-4 md:p-6">

      <div
        className="
          flex
          flex-col
          md:flex-row
          justify-between
          md:items-center
          gap-4
          mb-6
        "
      >

        <div>

          <h1
            className="
              text-3xl
              font-bold
            "
          >
            Dashboard
          </h1>

          <div
            className="
              mt-4
              flex
              flex-wrap
              gap-2
            "
          >

            <Link
              to="/risks"
              className="
                bg-blue-500
                text-white
                px-4
                py-2
                rounded
              "
            >
              View Risks
            </Link>

            <Link
              to="/analytics"
              className="
                bg-green-500
                text-white
                px-4
                py-2
                rounded
              "
            >
              Analytics
            </Link>

          </div>

        </div>

        <button
          onClick={handleLogout}
          className="
            bg-red-500
            text-white
            px-4
            py-2
            rounded
            w-full
            md:w-auto
          "
        >
          Logout
        </button>

      </div>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-4
        "
      >

        <KpiCard
          title="Total Risks"
          value={risks.length}
        />

        <KpiCard
          title="High Risks"
          value={highRisks}
        />

        <KpiCard
          title="Medium Risks"
          value={mediumRisks}
        />

        <KpiCard
          title="Low Risks"
          value={lowRisks}
        />

      </div>

      <div
        className="
          mt-10
          overflow-x-auto
        "
      >

        <RiskChart
          data={chartData}
        />

      </div>

    </div>
  );
};

export default Dashboard;