import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase.js";

import { IoSend } from "react-icons/io5";

export default function ContactMe() {
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [formData, setFormData] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "messages"), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date(),
      });
      setSuccessMessage("Message sent successfully");
      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
      e.target.reset();
    } catch (error) {
      setErrorMessage("Something went Wrong");
      setTimeout(() => {
        setErrorMessage(null);
      }, 10000);
    }
  };

  const changeHandler = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };
  return (
    <div
      id="contactme"
      className=" py-8  sm:py-16 sm:mt-10 flex flex-col gap-10   sm:gap-20 "
    >
      <div className="flex flex-col  gap-2">
        <h1 className="text-center text-3xl font-semibold tracking-wide text-gray-800 dark:text-white">
          Contact Me
        </h1>
        <span className="text-center text-xs dark:text-gray-300">
          Feel free to connect with Me
        </span>
      </div>

      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-3 mx-2 sm:mx-20"
      >
        {successMessage && (
          <button className="text-sm hover:cursor-default bg-indigo-600 rounded-md  py-3 px-2 text-gray-200 font-medium">
            {successMessage}
          </button>
        )}
        {errorMessage && (
          <button className="text-sm bg-red-600 rounded-md  py-3 px-2 text-gray-200 font-medium">
            {errorMessage}
          </button>
        )}

        <div className="flex sm:flex-row flex-col gap-2">
          <input
            onChange={changeHandler}
            id="name"
            required
            className=" placeholder:text-gray-700 placeholder:dark:text-gray-300 dark:text-gray-400 grow bg-indigo-700 bg-opacity-20 px-2 pb-7 pt-1 rounded-md flex focus:outline-none focus:border-green-600 placeholder:font-medium   border-indigo-700 border-[2px] placeholder:text-sm plac"
            type="text"
            placeholder="Name"
          />
          <input
            onChange={changeHandler}
            required
            className=" placeholder:font-medium placeholder:dark:text-gray-300 placeholder:text-gray-700 dark:text-gray-400  grow bg-indigo-700 bg-opacity-20 px-2 pb-7 pt-1 rounded-md flex focus:outline-none focus:border-green-600   border-indigo-700 border-[2px]  placeholder:text-sm"
            type="email"
            placeholder="Email"
            name=""
            id="email"
          />
        </div>

        <input
          onChange={changeHandler}
          required
          className=" placeholder:font-medium placeholder:dark:text-gray-300 placeholder:text-gray-700 dark:text-gray-400   placeholder:text-sm bg-indigo-700 bg-opacity-20 px-2 pb-7 pt-1 rounded-md flex focus:outline-none focus:border-green-600   border-indigo-700 border-[2px]"
          type="text"
          placeholder="Subject"
          name=""
          id="subject"
        />

        <textarea
          onChange={changeHandler}
          required
          rows="6"
          id="message"
          className="placeholder:text-gray-700 placeholder:dark:text-gray-300  placeholder:font-medium  dark:text-gray-400  placeholder:text-sm bg-indigo-700 bg-opacity-20 px-2 pb-7 pt-1 rounded-md flex focus:outline-none focus:border-green-600   border-indigo-700 border-[2px]"
          type="text"
          placeholder="Message"
        />
        <button className=" self-start  text-xs text-white bg-indigo-700 py-3 px-3 flex items-center gap-2 rounded-md">
          Send Message <IoSend className="text-xs" />
        </button>
      </form>
    </div>
  );
}
