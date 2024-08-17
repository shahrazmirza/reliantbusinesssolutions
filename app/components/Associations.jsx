"use client";
import React, { useEffect, useRef } from "react";
import { Container } from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";

const Associations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const fadeControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      fadeControls.start("animate");
    }
  }, [isInView]);

  return (
    <div>
      <Container>
        <div className="pt-12 pb-12 grid justify-center md:h-72">
          <motion.p
            ref={ref}
            variants={{
              initial: { y: 30, opacity: 0 },
              animate: {
                y: 0,
                opacity: 1,
                transition: { duration: 1, delay: 0 },
              },
            }}
            initial="initial"
            animate={fadeControls}
            className="text-3xl/snug font-medium text-center pb-5"
          >
            Our Associations
          </motion.p>
          <div className="grid grid-rows-5 md:grid-cols-5 gap-5 md:items-center justify-center md:pt-2 md:pb-2">
            <motion.div
              ref={ref}
              variants={{
                initial: { y: 30, opacity: 0 },
                animate: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1, delay: 0.5 },
                },
              }}
              initial="initial"
              animate={fadeControls}
            >
              <Link
                href="https://myprofile.tpb.gov.au/public-register/"
                target="_blank"
                className="flex justify-center rounded-lg bg-sky-100 w-28 h-28"
              >
                <Image
                  src="/assets/images/TPB.png"
                  alt="TPB Logo"
                  width={150}
                  height={150}
                  className="object-contain p-3"
                />
              </Link>
            </motion.div>
            <motion.div
              ref={ref}
              variants={{
                initial: { y: 30, opacity: 0 },
                animate: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1, delay: 0.6 },
                },
              }}
              initial="initial"
              animate={fadeControls}
            >
              <Link
                href="https://www.publicaccountants.org.au/"
                target="_blank"
                className="flex justify-center rounded-lg bg-sky-100 w-28 h-28"
              >
                <Image
                  src="/assets/images/IPA.png"
                  alt="IPA Logo"
                  width={175}
                  height={150}
                  className="object-contain p-3"
                />
              </Link>
            </motion.div>
            <motion.div
              ref={ref}
              variants={{
                initial: { y: 30, opacity: 0 },
                animate: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1, delay: 0.7 },
                },
              }}
              initial="initial"
              animate={fadeControls}
            >
              <Link
                href="https://cmaaustralia.edu.au/"
                target="_blank"
                className="flex justify-center rounded-lg bg-sky-100 w-28 h-28"
              >
                <Image
                  src="/assets/images/CMA.png"
                  alt="CMA Logo"
                  width={175}
                  height={150}
                  className="object-contain p-3"
                />
              </Link>
            </motion.div>
            <motion.div
              ref={ref}
              variants={{
                initial: { y: 30, opacity: 0 },
                animate: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1, delay: 0.8 },
                },
              }}
              initial="initial"
              animate={fadeControls}
            >
              <Link
                href="https://www.xero.com/au/"
                target="_blank"
                className="flex justify-center rounded-lg bg-sky-100 w-28 h-28"
              >
                <Image
                  src="/assets/images/Xero.png"
                  alt="Xero Logo"
                  width={150}
                  height={150}
                  className="object-contain p-3"
                />
              </Link>
            </motion.div>
            <motion.div
              ref={ref}
              variants={{
                initial: { y: 30, opacity: 0 },
                animate: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1, delay: 0.9 },
                },
              }}
              initial="initial"
              animate={fadeControls}
            >
              <Link
                href="https://quickbooks.intuit.com/au/"
                target="_blank"
                className="flex justify-center rounded-lg bg-sky-100 w-28 h-28"
              >
                <Image
                  src="/assets/images/QB.png"
                  alt="QB Logo"
                  width={250}
                  height={30}
                  className="object-contain p-3"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Associations;
