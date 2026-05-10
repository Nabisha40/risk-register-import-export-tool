import { Link } from "react-router-dom";

import { useState } from "react";

const allRisks = [
  {
    id: 1,
    title: "Database Security Risk",
    severity: "HIGH",
  },
  {
    id: 2,
    title: "Network Vulnerability",
    severity: "MEDIUM",
  },
  {
    id: 3,
    title: "Cloud Misconfiguration",
    severity: "LOW",
  },
];

const RiskList = () => {

  const [search, setSearch] = useState("");

  const [severity, setSeverity] = useState("ALL");

  const filteredRisks = allRisks.filter((risk) => {

    const matchesSearch =
      risk.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesSeverity =
      severity === "ALL" ||
      risk.severity === severity;

    return matchesSearch && matchesSeverity;

  });

  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Risk List
      </h1>

      <div className="flex gap-4 mb-6">

        <input
          type="text"
          placeholder="Search risks..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="
            border
            p-2
            rounded
            w-full
          "
        />

        <select
          value={severity}
          onChange={(e) =>
            setSeverity(e.target.value)
          }
          className="
            border
            p-2
            rounded
          "
        >

          <option value="ALL">
            ALL
          </option>

          <option value="HIGH">
            HIGH
          </option>

          <option value="MEDIUM">
            MEDIUM
          </option>

          <option value="LOW">
            LOW
          </option>

        </select>

      </div>

      <div className="space-y-4">

        {filteredRisks.map((risk) => (

          <div
            key={risk.id}
            className="
              bg-white
              shadow-md
              rounded-lg
              p-4
              flex
              justify-between
              items-center
            "
          >

            <div>

              <h2 className="text-xl font-semibold">
                {risk.title}
              </h2>

              <p className="text-gray-600">
                Severity: {risk.severity}
              </p>

            </div>

            <Link
              to={`/risk/${risk.id}`}
              className="
                bg-blue-500
                text-white
                px-4
                py-2
                rounded
              "
            >
              View
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
};

export default RiskList;