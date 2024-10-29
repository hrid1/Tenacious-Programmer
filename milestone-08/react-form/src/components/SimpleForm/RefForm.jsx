import { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hi", nameRef.current.value);
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Uncotrold Form</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Name :
          <input type="text" ref={nameRef} />
        </label>
        <br />
        <label>
          EmaiL :
          <input type="email" ref={emailRef} defaultValue={"rafi@gmail.com"} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RefForm;
