import { Outlet, useNavigation } from "react-router-dom";
import Header from "../common/Header";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header> </Header>
      {navigation.state === "loading" ? (
        <div>
          {" "}
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <Outlet></Outlet>
      )}
    </div>
  );
};

export default Root;
