import PropTypes from "prop-types";

const ReuseForm = ({ formTitle, submitBtnText = "submit", handleForm }) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    handleForm({ email, password });
  };

  return (
    <div>
      <h2> {formTitle} </h2>
      <form onSubmit={handleLocalSubmit}>
        <label>
          EmailId :
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Paswrd :
          <input type="password" name="password" />
        </label>
        <br />

        <input type="submit" value={submitBtnText} />
        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  );
};

ReuseForm.propTypes = {
  formTitle: PropTypes.string,
  submitBtnText: PropTypes.string,
  handleForm: PropTypes.func,
};

export default ReuseForm;
