"use client";
import { Container } from "@radix-ui/themes";
import React, { useState } from "react";
import { MdLocalPhone, MdLocationOn, MdEmail } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import AlertOverlay from "./Alert";

export const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [service, setService] = useState("Choose interested service");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);

  const [showAlert, setShowAlert] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setAlertMessage(null);

    if (!firstName || !email || !message) {
      setAlertMessage("Please fill in all required fields.");
      setShowAlert(true);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phoneNumber,
          service,
          message,
        }),
        headers: {
          "content-type": "application/json",
        },
      });

      if (res.ok) {
        setAlertMessage("Thank you! Your submission has been received!");
        setShowAlert(true);

        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setService("Choose interested service");
        setMessage("");
        setConsent("");
      } else {
        setAlertMessage(
          "Oops! Something went wrong while submitting the form."
        );
        setShowAlert(true);
      }
    } catch (err) {
      console.error("Err", err);
      setAlertMessage("An error occurred. Please try again later.");
      setShowAlert(true);
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <Container>
      <div className="flex flex-col-reverse md:flex md:flex-row w-full px-7">
        <div className="flex flex-col md:w-2/6">
          <p className="text-lg/loose font-normal md:text-xl/loose md:font-normal text-gray-500">
            Call us
          </p>
          <div className="flex items-center">
            <div className="text-sky-700 leading-10 pr-1">
              <MdLocalPhone />
            </div>
            <p className="text-l/snug font-normal text-sky-700 leading-10">
              0435 271 481
            </p>
          </div>

          <div className="flex items-center">
            <div className="text-sky-700 leading-10 pr-1">
              <MdLocalPhone />
            </div>
            <p className="text-l/snug font-normal text-sky-700 leading-10">
              0411 456 467
            </p>
          </div>
          <p className="text-lg/loose font-normal md:text-xl/loose md:font-normal text-gray-500">
            Email us
          </p>
          <a
            href={`mailto:info@reliantbusinesssolutions.com.au`}
            target="_blank"
            className="flex items-center"
          >
            <div className="text-sky-700 leading-10 pr-1">
              <MdEmail />
            </div>

            <p className="text-l/snug font-normal text-sky-700 leading-10">
              info@reliantbusinesssolutions.com.au
            </p>
          </a>
          {/* <p className='text-lg/loose font-normal md:text-xl/loose md:font-normal text-gray-500'>Visit us</p>
            <div className='flex items-center'>
              <div className='text-sky-700 leading-10 pr-1'>
                <MdLocationOn />
              </div>
              <p className='text-l/snug font-normal text-sky-700 leading-10 shrink-0'>56 Valencia Blvd, Doreen VIC 3754</p>
            </div> */}
          <p className="text-lg/loose font-normal md:text-xl/loose md:font-normal text-gray-500">
            Social
          </p>
          <div className="flex pt-5 pb-5">
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
              <div class="font-bold text-white rounded-full bg-sky-700 flex items-center justify-center font-mono h-7 w-7 px-2">
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
          </div>
        </div>

        <div className="flex flex-col md:w-4/6">
          {showAlert && (
            <AlertOverlay message={alertMessage} onClose={closeAlert} />
          )}

          <form onSubmit={onSubmit}>
            <div className="grid grid-cols-2 mb-4">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="Name*"
                required
                className="p-2 mr-3 border-b border-gray-400 hover:border-sky-700 focus:border-sky-700 focus:outline-none"
              />

              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last name"
                className="p-2 ml-3 border-b border-gray-400 hover:border-sky-700 focus:border-sky-700 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 mb-4">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email*"
                required
                className="p-2 mr-3 border-b border-gray-400 hover:border-sky-700 focus:border-sky-700 focus:outline-none"
              />

              <input
                value={phoneNumber}
                onChange={(e) =>
                  setPhoneNumber(e.target.value.replace(/\D/g, ""))
                }
                type="text"
                placeholder="Phone number"
                className="p-2 ml-3 border-b border-gray-400 hover:border-sky-700 focus:border-sky-700 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full p-2 my-4 text-sm font-medium text-gray-500 border border-gray-500 hover:border-sky-700 rounded-md bg-white"
              >
                <option value="Choose interested service" disabled>
                  Choose interested service
                </option>
                <option className="text-black" value="Accounting & Bookkeeping">
                  Accounting & Bookkeeping
                </option>
                <option className="text-black" value="Tax/Payroll Services">
                  Tax/Payroll Services
                </option>
                <option className="text-black" value="Other">
                  Other
                </option>
              </select>
            </div>

            <div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Type your message..."
                className="w-full p-2 mr-3 mb-8 border border-gray-500 hover:border-sky-700 focus:border-sky-700 focus:outline-none"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="flex items-center px-10 text-sm font-medium leading-none border-sky-700 border-solid border rounded text-white hover:text-sky-700 h-10 hover:bg-white bg-sky-700"
              >
                Submit
              </button>
            </div>

            <div className="flex items-start text-base/loose font-normal pt-5 mb-4">
              <label>
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                />
                <span className="pl-1">
                  By providing your phone number, you agree to receive text
                  messages from
                </span>{" "}
                <span className="font-bold">Reliant Business Solutions</span>{" "}
                subject to our{" "}
                <Link className="text-sky-700" href="/Privacy-Policy">
                  privacy policy
                </Link>
                .
              </label>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ContactForm;
