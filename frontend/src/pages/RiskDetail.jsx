const RiskDetail = () => {

  const risk = {

    title: "Database Security Risk",

    description:
      "Potential unauthorized access detected",

    priority: "HIGH",

  };

  const handleEdit = () => {

    alert("Edit button clicked");

  };

  const handleDelete = () => {

    alert("Delete button clicked");

  };

  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-4">
        {risk.title}
      </h1>

      <p className="mb-4">
        {risk.description}
      </p>

      <span
        className="
          bg-red-500
          text-white
          px-4
          py-2
          rounded
        "
      >
        {risk.priority}
      </span>

      <div className="mt-6 flex gap-4">

        <button
          onClick={handleEdit}
          className="
            bg-blue-500
            text-white
            px-4
            py-2
            rounded
          "
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="
            bg-red-500
            text-white
            px-4
            py-2
            rounded
          "
        >
          Delete
        </button>

      </div>

    </div>
  );
};

export default RiskDetail;