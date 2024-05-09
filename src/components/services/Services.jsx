import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Ui/Ux Designing</h2>
          <p>
            As an experienced UI/UX designer, I seamlessly blend aesthetic
            finesse with user-centric functionality, crafting interfaces that
            not only captivate but also intuitively guide users towards their
            goals. My expertise lies in creating delightful experiences that
            resonate with audiences, ensuring every interaction leaves a lasting
            impression of seamless usability and visual elegance
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Developer</h2>
          <p>
            As a frontend developer, I harness cutting-edge technologies and
            best practices to craft engaging user interfaces that are both
            visually stunning and highly performant. My experience allows me to
            seamlessly integrate design concepts into functional code, creating
            dynamic and responsive web applications that deliver exceptional
            user experiences across devices.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Needed Devops </h2>
          <p>
            In the realm of DevOps, my expertise lies in orchestrating seamless
            workflows, automating processes, and optimizing infrastructure for
            maximum efficiency and reliability. With a keen eye for scalability
            and security, I architect robust systems that enable continuous
            integration and deployment, ensuring smooth and agile development
            cycles while maintaining top-notch performance and uptime.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
