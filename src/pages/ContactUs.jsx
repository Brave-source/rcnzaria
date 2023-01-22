import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import Map from "../components/Contact/Map";

const ContactUs = () => {
  useEffect(() => {
    document.querySelector("html").scrollTop = 0;
    document.title = "Contact Us";
  }, []);
  return (
    <section>
      <div className="wrapper">
        <h1 className="font-bold tracking-wider text-3xl md:text-4xl uppercase py-8 px-4">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 py-4 gap-3 px-4">
          <div className=" sm:text-lg tracking-wide">
            <p className="text-lg md:text-xl">
              We’d Love to Hear From You. <br /> You can contact us by sending
              an email or call us with these numbers:
            </p>
            <ul className="flex flex-col gap-2">
              <li className="flex gap-2 items-center">
                <span>
                  <EnvelopeIcon className="w-6 text-orange-500" />
                </span>
                contact@rcnsermons.org
              </li>
              <li className="flex gap-2 items-center">
                <span>
                  <PhoneIcon className="w-6 text-orange-500" />
                </span>
                +234 806 050 8888
              </li>
              <li className="flex gap-2 items-center">
                <span>
                  <PhoneIcon className="w-6 text-orange-500" />
                </span>
                +234 813 907 3081
              </li>
              <li className="flex gap-2 items-center">
                <span>
                  <PhoneIcon className="w-6 text-orange-500" />
                </span>
                +234 803 663 5894
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-orange-500 text-xl">Physical address:</p>
              <p>
                No 4, Remnant Avenue, opposite Benue State Library,
                Wurukum.Benue State, Nigeria.
              </p>
            </div>
          </div>
          <Map />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
