import "./App.css";
import ReuseForm from "./components/ReuseableForm/ReuseForm";
import CustomHookForm from "./components/SimpleForm/CustomHookForm";
import CustomHookForm2 from "./components/SimpleForm/CustomHookForm2";
import RefForm from "./components/SimpleForm/refForm";
import SimpleForm from "./components/SimpleForm/SimpleForm1";
import SimpleForm2 from "./components/SimpleForm/SimpleForm2";
import SimpleForm3 from "./components/SimpleForm/SimpleForm3";

import SimpleForm4 from "./components/SimpleForm/SimpleForm4";

function App() {
  const handleSignUp = (data) => {
    console.log("Sign Up ->", data.email, data.password);
  };
  const handleUpdateProfile = ({ email, password }) => {
    console.log("Profile update ->", email, password);
  };
  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <SimpleForm2></SimpleForm2> */}

      {/* <SimpleForm3></SimpleForm3> */}
      {/* <SimpleForm4></SimpleForm4> */}

      {/* <RefForm></RefForm> */}
      {/* <CustomHookForm></CustomHookForm> */}
      {/* <CustomHookForm2></CustomHookForm2> */}
      <ReuseForm formTitle={"Sign Up"} handleForm={handleSignUp}></ReuseForm>
      <ReuseForm
        formTitle={"Profile Update"}
        submitBtnText={"Update"}
        handleForm={handleUpdateProfile}
      ></ReuseForm>
    </>
  );
}

export default App;
