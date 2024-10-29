import useInputState from "../../Hooks/useInputState";

const CustomHookForm = () => {
  const [name, handleNameChange] = useInputState("Rafi");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mr.", name);
  };
  return (
    <div>
      <h2>Hook Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        />
        <br />
        <input type="text" name="email" />
        <br />
        <input type="text" name="password" />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CustomHookForm;
