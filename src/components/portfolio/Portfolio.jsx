import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import timesaver from "/timesaver.png";
import seekarmi from "/seekarmi.png";
import tmonkeys from "/tmonkeys.png";
import saver from "/saver.png";

const items = [
  {
    id: 1,
    title: "TimeSaverPlus",
    img: timesaver,
    link: "http://timesaverplus.co.uk/",
    desc: " TimeSaver Plus Appointment and queuing software streamline scheduling and reduce wait times, enhancing customer satisfaction. Automated reminders minimize no-shows, and analytics tools provide insights for efficient resource allocation. Integration with other systems creates a seamless experience, saving time and improving productivity.",
  },
  {
    id: 2,
    title: "Seekarmi ",
    link: "https://www.seekarmi.com/",
    img: seekarmi,
    desc: " E-commerce website specializes in selling high-quality furniture, curated to elevate any space. From sleek modern designs to timeless classics, we offer a wide range of options to suit every style and budget. Explore our collection today and transform your home into a haven of comfort and style!",
  },
  {
    id: 3,
    title: "Tech Monkeys",
    link: "http://tmonkeys.com/",
    img: tmonkeys,
    desc: " tech company is dedicated to innovation, pushing boundaries to create cutting-edge solutions that shape the future. With a focus on advanced technologies like artificial intelligence, machine learning, and blockchain, we're at the forefront of digital transformation. Join us as we revolutionize industries and empower businesses worldwide.",
  },
  {
    id: 4,
    title: "TimeSaver Portal",
    link: "http://portal.timesaverplus.co.uk/",
    img: saver,
    desc: "TimeSaver Plus Appointment and queuing software streamline scheduling and reduce wait times, enhancing customer satisfaction. Automated reminders minimize no-shows, and analytics tools provide insights for efficient resource allocation. Integration with other systems creates a seamless experience, saving time and improving productivity.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const NavTimeSaver = () => {};

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
