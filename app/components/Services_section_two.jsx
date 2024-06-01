"use client";
import { useState, useEffect, useRef } from "react";
import data from "../Data/Section_Two_Card_data.json";
import { Container } from "@radix-ui/themes";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";

function SectionTwoCard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("", data);

    if (data && data.length > 0) {
      setItems(data);
    } else {
      console.error("");
    }
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const fadeControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      fadeControls.start("animate");
    }
  }, [isInView]);

  return (
    <div className="md:pt-4 md:pb-16 pb-10 bg-sky-100">
      <Container>
        <motion.div
          ref={ref}
          variants={{
            initial: { y: 50, opacity: 0 },
            animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
          }}
          initial="initial"
          animate={fadeControls}
          className="grid gap-2 grid-rows-2 text-center px-7 -mb-10"
        >
          <p className="text-2xl/snug font-medium md:pt-16 pt-10">
            What makes us the preferred choice for trusted accounting services?
          </p>
          <p className="text-xl/snug font-normal text-gray-500">
            We're here to fulfill all your accounting requirements.
          </p>
        </motion.div>
        <div className="md:flex md:gap-1 md:justify-center md:items-center">
          <motion.ul
            ref={ref}
            variants={{
              initial: { y: 50, opacity: 0 },
              animate: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.5 },
              },
            }}
            initial="initial"
            animate={fadeControls}
            className="md:grid md:grid-cols-2 md:gap-1"
          >
            {items.map((item) => (
              <li key={item.id}>
                <div className="md:p-8 px-7 py-5">
                  <div
                    className="text-sky-700 pb-5"
                    dangerouslySetInnerHTML={{
                      __html: item.icon.replace(
                        "<svg",
                        `<svg width="40" height="40"`
                      ),
                    }}
                  />
                  <p className="text-2xl/snug font-medium">{item.title}</p>
                  <p className="text-l/snug font-normal text-gray-500 pt-5 md:pb-5">
                    {item.content}
                  </p>
                </div>
              </li>
            ))}
          </motion.ul>
          <div>
            <Image
              src="/assets/images/graph.png"
              alt="graph"
              width={2000}
              height={2000}
              className="py-10 px-7"
            />
          </div>
        </div>
        <button
          className="px-5 text-sm font-medium leading-none border-sky-700 border-solid border rounded text-white hover:text-sky-700 h-10 hover:bg-white bg-sky-700 mx-7"
          href="/"
        >
          Read More
        </button>
      </Container>
    </div>
  );
}

export default SectionTwoCard;
