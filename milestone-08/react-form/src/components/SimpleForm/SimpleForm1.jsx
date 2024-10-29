import { useState } from "react";

const SimpleForm1 = () => {
  const [name, setName] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi", name);
  };

  return (
    <div>
      <h2>Form - 01</h2>

      <form>
        <div>
          <label htmlFor="name">Name: </label>
          <input onChange={(e) => setName(e.target.value)} type="text" />
        </div>
        <div>
          <label htmlFor="email">Email : </label>
          <input type="email" />
        </div>
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm1;
