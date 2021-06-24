import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "50vh" }}>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
