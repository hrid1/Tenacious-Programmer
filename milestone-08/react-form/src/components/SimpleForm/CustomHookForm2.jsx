import useInputState2 from "../../Hooks/useInputState2";

const CustomHookForm2 = () => {
  // declar custom hook
  const nameState = useInputState2('Hero')
  const emailState = useInputState2("hero@gmail.com");
  

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameState.value+' - '+emailState.value);
  };

  return (
    <div>
      <h2>Hook Form - 2 </h2>
      <form onSubmit={handleSubmit}>
        <input
            value={nameState.value}
            onChange={nameState.onChange}
          type="text"
          name="name"
        />
        <br />
        <input {...emailState} type="text" name="email" />
        <br />
        <input type="text" name="password" />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CustomHookForm2;
