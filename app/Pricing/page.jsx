"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Scroll_to_top from "../components/Scroll_to_top";
import Footer from "../components/Footer";
import { Container, Table } from "@radix-ui/themes";
import Link from "next/link";
import Whatsapp from "../components/Whatsapp";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <Scroll_to_top />
      <Whatsapp />
      <div className="py-5">
        <div className="flex flex-col text-center justify-center bg-sky-50 pt-24 pb-12">
          <p className="text-2xl/snug md:text-3xl/loose font-semibold">
            Bookkeeping Pricing
          </p>
          <p className="text-lg/snug font-normal text-gray-500 px-7">
            We make our bookkeeping services transparent and fair. You decide
            how many hours and when you need us.
          </p>
          <div className="flex justify-center text-center pt-5">
            <Link
              className="px-5 text-sm font-medium leading-none border-sky-700 border-solid border rounded-full text-white bg-sky-700 hover:text-sky-700 hover:bg-white h-10 flex items-center"
              href="/Contact"
            >
              Get In Touch
            </Link>
          </div>
        </div>
        <Container>
          <div className="grid grid-rows-11">
            <div className="border border-black text-center bg-sky-700 text-white text-base md:text-lg font-normal md:text-base md:font-bold mx-10">
              IF TOTALS MORE THAN 8 HOURS PER MONTH
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-bold text-sky-700">
              <p className="border-r border-black">Weekly Hours</p>
              <p>Bookkeeping Hourly Rate</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-normal text-gray-800 bg-gray-100">
              <p className="border-r border-black">40</p>
              <p>$55.00</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-normal text-gray-800 bg-gray-300">
              <p className="border-r border-black">30 and up</p>
              <p>$58.00</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-normal text-gray-800 bg-gray-100">
              <p className="border-r border-black">25 and up</p>
              <p>$60.00</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-normal text-gray-800 bg-gray-300">
              <p className="border-r border-black">20 and up</p>
              <p>$65.00</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-normal text-gray-800 bg-gray-100">
              <p className="border-r border-black">15 and up</p>
              <p>$70.00</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-normal text-gray-800 bg-gray-300">
              <p className="border-r border-black">11 and up</p>
              <p>$75.00</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-normal text-gray-800 bg-gray-100">
              <p className="border-r border-black">6 and up</p>
              <p>$80.00</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-normal text-gray-800 bg-gray-300">
              <p className="border-r border-black">0 and up</p>
              <p>$85.00</p>
            </div>
          </div>

          <div className="grid grid-rows-11 pt-2">
            <div className="border border-black text-center bg-sky-700 text-white text-base md:text-lg font-normal md:text-base md:font-bold mx-10">
              IF TOTALS LESS THAN 8 HOURS PER MONTH
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-bold text-sky-700">
              <p className="border-r border-black">Weekly Hours</p>
              <p>Bookkeeping Hourly Rate</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-normal text-gray-800 bg-gray-100">
              <p className="border-r border-black">7</p>
              <p>$90.00</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-normal text-gray-800 bg-gray-300">
              <p className="border-r border-black">6</p>
              <p>$95.00</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-normal text-gray-800 bg-gray-100">
              <p className="border-r border-black">5</p>
              <p>$100.00</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-normal text-gray-800 bg-gray-300">
              <p className="border-r border-black">4</p>
              <p>$105.00</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-normal text-gray-800 bg-gray-100">
              <p className="border-r border-black">3</p>
              <p>$110.00</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-normal text-gray-800 bg-gray-300">
              <p className="border-r border-black">2</p>
              <p>$115.00</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-normal text-gray-800 bg-gray-100">
              <p className="border-r border-black">1</p>
              <p>$120.00</p>
            </div>
          </div>

          <div className="flex flex-col text-center justify-center">
            <p className="text-2xl/snug md:text-3xl/loose font-semibold">
              Business Service Pricing
            </p>
          </div>

          <div className="grid grid-rows-11 pt-2">
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border border-black text-base md:text-lg font-bold text-white bg-sky-700">
              <p className="border-r border-black">Business Service</p>
              <p>Pricing</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-normal text-gray-800 bg-gray-100">
              <p className="border-r border-black text-start pl-5">
                Individual / Sole Trader Income Tax Return - starts at
              </p>
              <p>$145.00</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-normal text-gray-800 bg-gray-300">
              <p className="border-r border-black text-start pl-5">
                Partnership Income Tax Return - starts at
              </p>
              <p>$450.00</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-normal text-gray-800 bg-gray-100">
              <p className="border-r border-black text-start pl-5">
                Company / Trust Income Tax Return - starts at
              </p>
              <p>$750.00</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-normal text-gray-800 bg-gray-300">
              <p className="border-r border-black text-start pl-5">
                Sole Trader / Company BAS - starts at
              </p>
              <p>$150.00</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-normal text-gray-800 bg-gray-100">
              <p className="border-r border-black text-start pl-5">
                Consultation - 1st Hour
              </p>
              <p>$170.00</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-normal text-gray-800 bg-gray-300">
              <p className="border-r border-black text-start pl-5">
                Consultation - Additional Hour
              </p>
              <p>$200.00</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-normal text-gray-800 bg-gray-100">
              <p className="border-r border-black text-start pl-5">
                Company Registeration - starts at
              </p>
              <p>$475.00</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-normal text-gray-800 bg-gray-300">
              <p className="border-r border-black text-start pl-5">
                ABN / TFN Registeration
              </p>
              <p>$125.00</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-normal text-gray-800 bg-gray-100">
              <p className="border-r border-black text-start pl-5">
                ACNC Applications{" "}
              </p>
              <p>$1,500.00</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-normal text-gray-800 bg-gray-300">
              <p className="border-r border-black text-start pl-5">
                Government Grants Application
              </p>
              <p>$1,450.00</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-normal text-gray-800 bg-gray-100">
              <p className="border-r border-black text-start pl-5">
                Court Representations - Per Hour
              </p>
              <p>$150.00</p>
            </div>
            <div className="grid grid-cols-2 text-center gap-0 mx-10 border-l border-r border-b border-black text-base md:text-lg font-normal text-gray-800 bg-gray-300">
              <p className="border-r border-black text-start pl-5">
                Income Confirmation Letter
              </p>
              <p>$125.00</p>
            </div>
          </div>

          <div className="md:flex justify-center text-center py-10 px-7">
            <p className="text-lg/snug font-normal md:text-xl/snug md:font-normal mr-1 ">
              Didn’t find what you were looking for?
            </p>
            <span> </span>
            <Link
              className="text-lg/snug font-normal md:text-xl/snug md:font-normal text-sky-700"
              href="/Contact"
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
