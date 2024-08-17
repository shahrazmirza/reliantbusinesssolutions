"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@radix-ui/themes";
import {
  MdLocalPhone,
  MdLocationOn,
  MdEmail,
  MdCopyright,
} from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";
import { motion, useInView, useAnimation } from "framer-motion";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const fadeControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      fadeControls.start("animate");
    }
  }, [isInView]);

  return (
    <div className="pt- pt-10 pb-5 bg-sky-100 px-7">
      <Container>
        <div className="md:flex">
          <div>
            <motion.div
              ref={ref}
              variants={{
                initial: { y: 50, opacity: 0 },
                animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
              }}
              initial="initial"
              animate={fadeControls}
            >
              <Link href="/">
                <Image
                  src="/assets/images/logo.png"
                  alt="Reliant Logo"
                  width={250}
                  height={30}
                  className="object-contain pt-1 pb-5"
                />
              </Link>
            </motion.div>
            <motion.p
              ref={ref}
              variants={{
                initial: { y: 50, opacity: 0 },
                animate: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.25 },
                },
              }}
              initial="initial"
              animate={fadeControls}
              className="text-lg/snug font-medium leading-10"
            >
              About Us
            </motion.p>
            <motion.p
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
              className="text-l/snug font-normal leading-10"
            >
              Accurate bookkeeping, financial reports, taxes, and more, all done
              with a personal touch.
            </motion.p>
            <motion.div
              ref={ref}
              variants={{
                initial: { y: 50, opacity: 0 },
                animate: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.75 },
                },
              }}
              initial="initial"
              animate={fadeControls}
            >
              <Link
                className="text-l/snug font-normal text-gray-500 leading-10"
                href="/Contact"
              >
                Learn more
              </Link>
            </motion.div>
            <motion.div
              ref={ref}
              variants={{
                initial: { y: 50, opacity: 0 },
                animate: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 1.0 },
                },
              }}
              initial="initial"
              animate={fadeControls}
              className="flex pt-5"
            >
              <div className="pr-1">
                <Link
                  href="https://www.facebook.com/reliantaccountants?mibextid=ZbWKwL"
                  target="_blank"
                  className="font-bold text-white rounded-full bg-sky-700 flex items-center justify-center font-mono h-7 w-7 px-2"
                >
                  <FaFacebookF />
                </Link>
              </div>
              {/* <div className="pr-1">
                <div className="font-bold text-white rounded-full bg-sky-700 flex items-center justify-center font-mono h-7 w-7 px-2">
                  <FaTwitter />
                </div>
              </div> */}
              <div className="pr-1">
                <Link
                  href="https://www.instagram.com/reliantbusinesssolutions?igsh=MTV5Nm5tbTBuOHdwbA=="
                  target="_blank"
                  className="font-bold text-white rounded-full bg-sky-700 flex items-center justify-center font-mono h-7 w-7 px-2"
                >
                  <FaInstagram />
                </Link>
              </div>
              <div>
                <a
                  href={`mailto:info@reliantbusinesssolutions.com.au`}
                  target="_blank"
                >
                  <FaRegEnvelope className="font-bold text-white rounded-full bg-sky-700 flex items-center justify-center font-mono h-7 w-7 px-2" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            ref={ref}
            variants={{
              initial: { y: 50, opacity: 0 },
              animate: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 1.25 },
              },
            }}
            initial="initial"
            animate={fadeControls}
            className="flex flex-col md:px-40 md:shrink-0 text-center"
          >
            <p className="text-base/snug font-medium leading-10">Menu</p>
            <Link
              href="/"
              className="text-l/snug font-normal text-sky-700 leading-10"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-l/snug font-normal text-gray-500 leading-10"
            >
              Services
            </Link>
            {/* <Link href="/" className='text-l/snug font-normal text-gray-500 leading-10'>About</Link> */}
            <Link
              href="/Pricing"
              className="text-l/snug font-normal text-gray-500 leading-10"
            >
              Pricing
            </Link>
            <Link
              href="/FAQs"
              className="text-l/snug font-normal text-gray-500 leading-10"
            >
              FAQs
            </Link>
            <Link
              href="/Privacy-Policy"
              className="text-l/snug font-normal text-gray-500 leading-10"
            >
              Privacy Policy
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
            className="flex flex-col text-center"
          >
            <p className="text-base/snug font-medium leading-10">
              Get in Touch
            </p>
            <Link
              href="/Contact"
              className="text-l/snug font-normal text-sky-700 leading-10"
            >
              Contact us
            </Link>
            <div className="flex justify-center items-center">
              <div className="text-gray-500 leading-10 pr-1">
                <MdLocalPhone />
              </div>
              <p className="text-l/snug font-normal text-gray-500 leading-10">
                0435 271 481
              </p>
            </div>

            <div className="flex justify-center items-center">
              <div className="text-gray-500 leading-10 pr-1">
                <MdLocalPhone />
              </div>
              <p className="text-l/snug font-normal text-gray-500 leading-10">
                0411 456 467
              </p>
            </div>

            <a
              href={`mailto:info@reliantbusinesssolutions.com.au`}
              target="_blank"
              className="flex justify-center items-center"
            >
              <div className="text-gray-500 leading-10 pr-1">
                <MdEmail />
              </div>
              <p className="text-l/snug font-normal text-gray-500 leading-10">
                info@reliantbusinesssolutions.com.au
              </p>
            </a>

            {/* <div className='flex justify-center items-center'>
                <div className='text-gray-500 leading-10 pr-1'>
                  <MdLocationOn />
                </div>
                <p className='text-l/snug font-normal text-gray-500 leading-10 shrink-0'>56 Valencia Blvd, Doreen VIC 3754</p>
              </div> */}
          </motion.div>
        </div>
        <div className="md:text-base text-sm text-gray-800 pt-5 md:flex md:gap-1 md:justify-center md:items-center">
          <div className="flex gap-1 justify-center items-center">
            <MdCopyright />
            <p>2024 Reliant Business Solutions Pty Ltd</p>
          </div>
          <Link
            href="https://abr.business.gov.au/ABN/View?id=79661861294"
            target="_blank"
          >
            <p className="text-center">(ABN 79 661 861 294)</p>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
