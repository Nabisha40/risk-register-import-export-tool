import { useEffect, useState } from "react";
import api from "../services/api";

const Dashboard = () => {

  const [risks, setRisks] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchRisks(page);
  }, [page]);

  const fetchRisks = async (pageNumber) => {

    try {

      const response = await api.get(
        `/all?page=${pageNumber}&size=5`
      );

      console.log("API RESPONSE:", response.data);

      const responseData = response.data;

      setRisks(responseData.content || []);
      setTotalPages(responseData.totalPages || 1);

    } catch (error) {

      console.log("ERROR:", error);

    }
  };

  return (

    <div style={{ padding: "20px" }}>

      <h1>Risk Register Dashboard</h1>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>ID</th>
            <th>Risk Code</th>
            <th>Title</th>
            <th>Status</th>
            <th>Priority</th>
          </tr>
        </thead>

        <tbody>

          {risks.length > 0 ? (

            risks.map((risk) => (

              <tr key={risk.id}>

                <td>{risk.id}</td>
                <td>{risk.riskCode}</td>
                <td>{risk.title}</td>
                <td>{risk.status}</td>
                <td>{risk.priority}</td>

              </tr>
            ))

          ) : (

            <tr>
              <td colSpan="5">
                No Risks Found
              </td>
            </tr>

          )}

        </tbody>

      </table>

      <br />

      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 0}
      >
        Prev
      </button>

      <span style={{ margin: "0 20px" }}>
        Page {page + 1} of {totalPages}
      </span>

      <button
        onClick={() => setPage(page + 1)}
        disabled={page + 1 >= totalPages}
      >
        Next
      </button>

    </div>
  );
};

export default Dashboard;