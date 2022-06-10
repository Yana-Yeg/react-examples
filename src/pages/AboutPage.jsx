import { Link, Outlet } from "react-router-dom";
import Contacts from "../components/--about/Contacts/Contacts";
import Form from "../components/--about/Form/Form";

const AboutPage = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>About us</h1>
      {/* <ul
        style={{
          display: "flex",
          justifyContent: "center",
          listStyleType: "none",
        }}
      >
        <li style={{ marginLeft: "-20px" }}>
          <Link to="contacts">Our contacts</Link>
        </li>
        <li style={{ marginLeft: "20px" }}>
          <Link to="form">Form</Link>
        </li>
        <li style={{ marginLeft: "20px" }}>
          <Link to="team">Our team</Link>
        </li>
      </ul> */}
      {/* <Outlet /> */}
      <div>
        <Form />
        <Contacts />
      </div>
    </>
  );
};

export default AboutPage;
