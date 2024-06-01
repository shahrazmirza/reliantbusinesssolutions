"use client";
import { useState, useEffect, useRef } from "react";
import data from "../Data/Section_One_Card_data.json";
import Link from "next/link";
import { Container } from "@radix-ui/themes";
import { motion, useInView, useAnimation } from "framer-motion";

function SectionOneCard() {
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
    <Container>
      <div className="md:flex md:flex-col md:items-center md:py-10 px-7">
        <motion.div
          ref={ref}
          variants={{
            initial: { y: 50, opacity: 0 },
            animate: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, delay: 0 },
            },
          }}
          initial="initial"
          animate={fadeControls}
          className="md:grid md:gap-2 md:grid-rows-2 text-center pb-5"
        >
          <p className="md:text-3xl/snug font-medium text-2xl/snug">
            Reliant Business Solutions
          </p>
          <p className="md:text-xl/snug font-normal text-gray-500 text-lg/snug">
            Accounting Services That Save You Time, Money and Frustration
          </p>
        </motion.div>
        <ul className="md:grid md:grid-cols-3 md:gap-10 md:py-10 grid gap-y-6 pb-10">
          {items.map((item) => (
            <li key={item.id}>
              <motion.div
                ref={ref}
                variants={{
                  initial: { y: 50, opacity: 0 },
                  animate: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, delay: 1 },
                  },
                }}
                initial="initial"
                animate={fadeControls}
              >
                <Link href={item.href}>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  )}
                </Link>
              </motion.div>
              <motion.div
                ref={ref}
                variants={{
                  initial: { y: 50, opacity: 0 },
                  animate: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, delay: 1.5 },
                  },
                }}
                initial="initial"
                animate={fadeControls}
                className="p-8 border-solid border"
              >
                <Link
                  href={item.href}
                  className="md:text-2xl/snug font-medium text-xl/snug"
                >
                  {item.title}
                </Link>
                <p className="text-l/snug font-normal text-gray-500 py-5">
                  {item.content}
                </p>
                <Link
                  href={item.href}
                  className="px-5 text-sm font-medium leading-none border-sky-700 border-solid border rounded text-white hover:text-sky-700 h-10 hover:bg-white bg-sky-700 flex items-center justify-center w-fit"
                >
                  Read More
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default SectionOneCard;
