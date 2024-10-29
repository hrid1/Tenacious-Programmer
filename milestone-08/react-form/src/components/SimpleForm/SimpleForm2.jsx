import { useState } from "react";

const SimpleForm2 = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi", name);
  };

  return (
    <div>
        <h2>Form - 02</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Full Name : 
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="phone">
            Phone No :
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
        </div>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm2;
