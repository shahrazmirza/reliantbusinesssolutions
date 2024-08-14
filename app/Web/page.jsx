"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Scroll_to_top from "../components/Scroll_to_top";
import Footer from "../components/Footer";
import { Container } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Whatsapp from "../components/Whatsapp";

const Web = () => {
  return (
    <div>
      <Navbar />
      <Scroll_to_top />
      <Whatsapp />
      <div className="py-5">
        <div className="flex flex-col text-center justify-center bg-sky-50 md:pt-24 py-10 md:pb-12 px-7">
          <p className="text-2xl/snug md:text-3xl/loose font-semibold">
            Welcome to Reliant Business Solutions
          </p>
          <p className="text-lg/snug font-normal text-gray-500">
            Your Trusted Partner for Web Development
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 items-center bg-gray-100">
          <motion.div
            variants={{
              initial: { x: 150, opacity: 0 },
              animate: {
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.5 },
              },
            }}
            initial="initial"
            animate="animate"
            className="flex justify-center items-center"
          >
            <Image
              src="/assets/images/web1.jpg"
              height="600"
              width="1000"
            ></Image>
          </motion.div>
          <motion.div
            variants={{
              initial: { y: 50, opacity: 0 },
              animate: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0 },
              },
            }}
            initial="initial"
            animate="animate"
            className="md:px-20 md:pr-40 p-7"
          >
            <p className="text-base/relaxed font-normal text-gray-500 text-center md:drop-shadow-sm">
              Our Services
            </p>
            <p className="text-2xl/relaxed md:text-2xl/relaxed md:text-3xl/relaxed font-semibold md:drop-shadow-sm">
              Website Development––
            </p>
            <p className="text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm">
              Our website development services will guide your business through
              the digital landscape, ensuring online success
            </p>

            <div className="flex px-4 pt-4">
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg
                  class="w-6 h-6 text-stone-600 opacity-60 p-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <div className="pl-4">
                <p className="text-base/relaxed font-medium md:drop-shadow-sm">
                  Business Web Assessment
                </p>
                <p className="text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm">
                  In-depth analysis of your current online presence and future
                  digital goals.
                </p>
              </div>
            </div>

            <div className="flex px-4 pt-4">
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg
                  class="w-6 h-6 text-stone-600 opacity-60 p-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <div className="pl-4">
                <p className="text-base/relaxed font-medium md:drop-shadow-sm">
                  Customised Web Strategies
                </p>
                <p className="text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm">
                  Tailored development plans to optimise your website’s
                  performance and enhance user experience.
                </p>
              </div>
            </div>

            <div className="flex px-4 pt-4">
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg
                  class="w-6 h-6 text-stone-600 opacity-60 p-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <div className="pl-4">
                <p className="text-base/relaxed font-medium md:drop-shadow-sm">
                  Security Management
                </p>
                <p className="text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm">
                  Identification and mitigation of potential online security
                  risks to safeguard your business website.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="md:grid md:grid-cols-2 flex flex-col-reverse items-center bg-sky-100">
          <div className="md:px-20 md:pl-28 p-7">
            <p className="text-base/relaxed font-normal text-gray-500 text-center md:drop-shadow-sm">
              Our Services
            </p>
            <p className="text-2xl/relaxed md:text-2xl/relaxed md:text-3xl/relaxed font-semibold md:drop-shadow-sm">
              Mobile App Development––
            </p>
            <p className="text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm">
              Our mobile app development services will secure your business’s
              future in the mobile-first world
            </p>
            <div className="flex px-4 pt-4">
              <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                <svg
                  class="w-6 h-6 text-stone-600 opacity-60 p-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <div className="pl-4">
                <p className="text-base/relaxed font-medium md:drop-shadow-sm">
                  Personalised App Solutions
                </p>
                <p className="text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm">
                  Custom strategies to create a mobile app that meets the unique
                  needs of your business and enhances user engagement.
                </p>
              </div>
            </div>

            <div className="flex px-4 pt-4">
              <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                <svg
                  class="w-6 h-6 text-stone-600 opacity-60 p-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <div className="pl-4">
                <p className="text-base/relaxed font-medium md:drop-shadow-sm">
                  Platform-Specific Expertise
                </p>
                <p className="text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm">
                  Expert guidance on developing and optimising apps for iOS,
                  Android, and cross-platform use.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/assets/images/web2.jpg"
              height="600"
              width="1000"
            ></Image>
          </div>
        </div>

        <div className="flex flex-col text-center justify-center bg-sky-50 py-12">
          <p className="text-2xl/snug font-semibold md:text-3xl/snug font-semibold">
            Why Choose Reliant Business Solutions?
          </p>
        </div>
        <Container>
          <div className="md:grid md:grid-cols-2 flex flex-col-reverse items-center">
            <div className="md:p-10 px-7 pb-10">
              <div className="flex px-4 pt-4">
                <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                  <svg
                    class="w-6 h-6 text-stone-600 opacity-60 p-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div className="pl-4">
                  <p className="text-base/relaxed font-medium md:drop-shadow-sm">
                    Industry Expertise
                  </p>
                  <p className="text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm">
                    Our team has extensive experience in web and mobile app
                    development across diverse industries.
                  </p>
                </div>
              </div>

              <div className="flex px-4 pt-4">
                <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                  <svg
                    class="w-6 h-6 text-stone-600 opacity-60 p-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div className="pl-4">
                  <p className="text-base/relaxed font-medium md:drop-shadow-sm">
                    Personalised Service
                  </p>
                  <p className="text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm">
                    We understand that every business is unique. Our digital
                    solutions are tailored to meet your specific needs.
                  </p>
                </div>
              </div>

              <div className="flex px-4 pt-4">
                <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                  <svg
                    class="w-6 h-6 text-stone-600 opacity-60 p-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div className="pl-4">
                  <p className="text-base/relaxed font-medium md:drop-shadow-sm">
                    Commitment to Success
                  </p>
                  <p className="text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm">
                    We are dedicated to driving the success and digital
                    transformation of your business, ensuring your online
                    presence and mobile platforms thrive.
                  </p>
                </div>
              </div>

              <div className="justify-center text-center pt-5 w-fit">
                <Link
                  className="px-5 text-sm font-medium leading-none border-pink-200 border-solid border-2 rounded-full text-stone-600 bg-pink-200 hover:bg-white h-10 flex items-center"
                  href="/Contact"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center px-7">
              <Image
                src="/assets/images/service.jpg"
                height="450"
                width="1000"
              ></Image>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Web;
