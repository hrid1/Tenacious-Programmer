import  { useState } from "react";

const SimpleForm4 = () => {
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone } = formData;
    console.log(name, phone);
  };

  return (
    <div>
      <h2>Form - 4</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone No: </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm4;
