import React, { useState } from "react";

import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import InputIcons from "./form/Icons";

import Input from "./form/Input";

export default function ContactUs({ color, bgColor, btnColor, number }) {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handler = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // border-pink
  // bg-pink-50
  return (
    <section className={`flex-center border-8 ${color} mx-96 border-dashed`}>
      <section className={`grid grid-cols-2 py-32  w-full px-28 ${bgColor}`}>
        <section className="">
          <h4>
            <span
              className={`border-b-4 ${color} pb-1 text-2xl font-semibold rounded-sm `}
            >
              Свържи се с нас!
            </span>
          </h4>
          <p className="pt-3 max-w-[15rem]">
            Очакваме с нетърпение нашите общи проекти!
          </p>
          <form action="" className="mt-12 flex flex-col ">
            <Input
              placeholder="Вашето име"
              id="name"
              val={inputs.name}
              onChange={handler}
              iconType="name"
            />
            <Input
              placeholder="Вашият и-мейл"
              id="email"
              val={inputs.email}
              onChange={handler}
              iconType="email"
            />
            <div className="relative mb-5">
              <div className="absolute left-0 z-10 top-2.5 text-lg">
                <InputIcons iconType="message" />
              </div>
              {/* className="w-full bg-transparent h-2 border-b border-white px-4 pt-2 scrollbar scrollbar-thumb-pink-100 scrollbar-track-pink-200 focus:outline-none" */}

              <textarea
                className="w-full px-6 py-2 leading-tight h-10 placeholder-transparent border-b appearance-none placeholder:pl-10 peer text-gray-darker focus:outline-none focus:shadow-outline bg-transparent scrollbar scrollbar-thumb-pink-100 scrollbar-track-pink-200"
                id="comment"
                placeholder="Вашият коментар"
                name="comment"
                value={inputs.comment}
                onChange={handler}
              />
              <label
                className="absolute   -top-3.5 left-0 block mb-2 text-sm  text-gray-darker peer-placeholder-shown:text-base peer-placeholder-shown:px-6  peer-placeholder-shown:top-1.5 transition-all duration-300"
                htmlFor="comment"
              >
                Вашият коментар
              </label>
            </div>
            <button className={`${btnColor} px-10 py-1 mt-4`}>Изпрати</button>
          </form>
        </section>
        <section className="flex space-y-3 mt-7 mx-auto flex-col focus:border-transparent">
          <div className="flex items-center">
            <div className="text-2xl ">
              <HiOutlineMail />
            </div>
            <div className="pl-1">contact@strover.bg</div>
          </div>
          <div className="flex items-center">
            <div className="text-xl ">
              <FiPhoneCall />
            </div>
            <div className="pl-1">{number}</div>
          </div>
        </section>
      </section>
    </section>
  );
}
