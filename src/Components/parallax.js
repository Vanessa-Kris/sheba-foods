import { useRef } from "react";
import "../App.css";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { Avatar, Typography } from "@mui/material";
import { FaStar } from "react-icons/fa6";

function ParallaxText({ reviews, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-0, -99, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        {reviews.map((review, index) => (
          <span key={index}>{review}</span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Parallax() {
  const reviews = [
    <Typography
      variant="p"
      sx={{ lineHeight: 1, display: "flex", alignItems: "center" }}
    >
      {" "}
      <Avatar src="ND.jpeg" /> <br />I and my baby really love Tom Brown Whole
      meal <br style={{ paddingTop: 4 }} />
      <span style={{ paddingTop: 15 }}>
        {" "}
        <FaStar style={{ color: "green" }} />{" "}
        <FaStar style={{ color: "green" }} />{" "}
        <FaStar style={{ color: "green" }} />{" "}
        <FaStar style={{ color: "green" }} />{" "}
        <FaStar style={{ color: "green" }} />{" "}
      </span>{" "}
      <br />
      <span style={{ paddingTop: 10 }}> Mr Kizz</span>
    </Typography>,
    // Add more reviews as needed
    <Typography
      variant="p"
      sx={{ lineHeight: 1, display: "flex", alignItems: "center" }}
    >
      {" "}
      <Avatar src="ND.jpeg" /> <br />
      Tom Brown is such a unique whole meal <br /> different from others and the
      taste is <br /> out of this world, but I think you need to <br /> work on
      the quantity. <br />{" "}
      <span style={{ paddingTop: 15 }}>
        {" "}
        <FaStar style={{ color: "green" }} />{" "}
        <FaStar style={{ color: "green" }} />{" "}
        <FaStar style={{ color: "green" }} />{" "}
        <FaStar style={{ color: "green" }} /> <FaStar />{" "}
      </span>{" "}
      <br /> <span style={{ paddingTop: 10 }}> Benny Boy </span>
    </Typography>,
    // Add more reviews as needed
    <Typography
      variant="p"
      sx={{ lineHeight: 1, display: "flex", alignItems: "center" }}
    >
      {" "}
      <Avatar src="ND.jpeg" /> <br />
      Person no fit believe say na <br /> 2k I buy am. E goess.
      <br />{" "}
      <span style={{ paddingTop: 15 }}>
        {" "}
        <FaStar style={{ color: "green" }} />{" "}
        <FaStar style={{ color: "green" }} />{" "}
        <FaStar style={{ color: "green" }} />{" "}
        <FaStar style={{ color: "green" }} />{" "}
        <FaStar style={{ color: "green" }} />{" "}
      </span>{" "}
      <br /> <span style={{ paddingTop: 10 }}> OG Successful </span>
    </Typography>,
    // Add more reviews as needed
    <Typography
      variant="p"
      sx={{ lineHeight: 1, display: "flex", alignItems: "center" }}
    >
      {" "}
      <Avatar src="ND.jpeg" /> <br />
      It's really good, I like the taste
      <br /> no dislikes
      <br />{" "}
      <span style={{ paddingTop: 15 }}>
        {" "}
        <FaStar style={{ color: "green" }} />{" "}
        <FaStar style={{ color: "green" }} />{" "}
        <FaStar style={{ color: "green" }} />{" "}
        <FaStar style={{ color: "green" }} />{" "}
        <FaStar style={{ color: "green" }} />{" "}
      </span>{" "}
      <br /> <span style={{ paddingTop: 10 }}> Danino </span>
    </Typography>,
    // Add more reviews as needed
    <Typography
      variant="p"
      sx={{ lineHeight: 1, display: "flex", alignItems: "center" }}
    >
      {" "}
      <Avatar src="ND.jpeg" /> <br />
      Tom Brown is my life saver, I eat it everyday <br /> and I'm looking fresh
      because of Tom Brown
      <br />{" "}
      <span style={{ paddingTop: 15 }}>
        {" "}
        <FaStar style={{ color: "green" }} />{" "}
        <FaStar style={{ color: "green" }} />{" "}
        <FaStar style={{ color: "green" }} />{" "}
        <FaStar style={{ color: "green" }} />{" "}
        <FaStar style={{ color: "green" }} />{" "}
      </span>{" "}
      <br /> <span style={{ paddingTop: 10 }}> Michelle </span>
    </Typography>,
    // Add more reviews as needed
  ];

  return (
    <section>
      <ParallaxText reviews={reviews} baseVelocity={5} />
    </section>
  );
}
