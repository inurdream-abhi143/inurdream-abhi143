import { useContext } from "react";

import { AppContext } from "./components/usercontext/userContext.jsx";

const Child = () => {
  const userData = useContext(AppContext);

  return (
    <>
      <h2>
        child = hey My Name is {userData.name} & I am {userData.Age} years old.
      </h2>
    </>
  );
};

export default Child;
