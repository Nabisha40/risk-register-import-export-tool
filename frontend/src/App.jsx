import { useState } from "react";
import "./App.css";

function App() {

 const [formData, setFormData] = useState({
  title: "",
  description: "",
  category: "",
  ownerEmail: "",
  ownerName: "",
  priority: "",
  impactLevel: "HIGH",
  likelihoodLevel: "MEDIUM",
  active: true,
  status: "OPEN",
  riskCode: riskCode: "RISK2000"
});

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const validate = () => {

    let tempErrors = {};

    if (!formData.title.trim()) {
      tempErrors.title = "Title is required";
    }

    if (!formData.description.trim()) {
      tempErrors.description = "Description is required";
    }

    if (!formData.category.trim()) {
      tempErrors.category = "Category is required";
    }

    if (!formData.ownerEmail.trim()) {
      tempErrors.ownerEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.ownerEmail)) {
      tempErrors.ownerEmail = "Invalid email";
    }

    if (!formData.priority.trim()) {
      tempErrors.priority = "Priority is required";
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validate()) {
      return;
    }

    try {

      const response = await fetch(
        "http://localhost:8080/api/risk-registers/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      if (response.ok) {

        alert("Risk Register Created Successfully");

        setFormData({
  title: "",
  description: "",
  category: "",
  ownerEmail: "",
  ownerName: "",
  priority: "",
  impactLevel: "HIGH",
  likelihoodLevel: "MEDIUM",
  active: true,
  status: "OPEN",
  riskCode: riskCode: "RISK2000"
});

      } else {

  const errorText = await response.text();
  console.log(errorText);

  alert("Failed: " + errorText);

}

    } catch (error) {

      console.error(error);
      alert("Server Error");

    }

  };

  return (

    <div className="container">

      <h1>Risk Register Form</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <p>{errors.title}</p>

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <p>{errors.description}</p>

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />
        <p>{errors.category}</p>

        <input
          type="email"
          name="ownerEmail"
          placeholder="Owner Email"
          value={formData.ownerEmail}
          onChange={handleChange}
        />
        <p>{errors.ownerEmail}</p>
        <input
  type="text"
  name="ownerName"
  placeholder="Owner Name"
  value={formData.ownerName}
  onChange={handleChange}
/>

        <input
          type="text"
          name="priority"
          placeholder="Priority"
          value={formData.priority}
          onChange={handleChange}
        />
        <p>{errors.priority}</p>

        <button type="submit">
          Submit
        </button>

      </form>

    </div>

  );

}

export default App;