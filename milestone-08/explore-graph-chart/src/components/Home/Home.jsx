import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import UserCard from "../common/UserCard";

const Home = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-6">
        All Infomation of Persons
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 md:mx-10">
        {data.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </section>
    </div>
  );
};

export default Home;
