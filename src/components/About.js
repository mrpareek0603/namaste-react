import { useContext } from "react";
import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";

const About = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <h2>About Us</h2>
      <p className="font-bold">UserContext - {loggedInUser}</p>
      <UserClass name={"Rohan"} location={"Bhilwara"} />
    </div>
  );
};
export default About;
