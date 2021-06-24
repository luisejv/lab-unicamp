import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
