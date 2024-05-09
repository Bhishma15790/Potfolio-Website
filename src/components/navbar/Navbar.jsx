import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Bhishma Niraula
        </motion.span>
        <div className="social">
          <a href="https://github.com/Bhishma15790">
            <img src="/github.png" alt="" />
          </a>
          <a href="www.linkedin.com/in/bhiss-ma-niraula">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://www.facebook.com/bhish2/">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/vissma_niraula/">
            <img src="/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
