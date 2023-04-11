import React from "react";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:ryhow99@gmail.com?subject=${formData.subject}&body=Hi My Name is ${formData.name}. ${formData.message} (${formData.email})`
  }

  return (
    <div
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl
    px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px]
         text-gray-500 text-2xl "
      >
        Contact
      </h3>

      <div className="h-[60%] flex flex-col space-y-10 ">
        <h4 className="text-2xl lg:text-4xl text-center font-semibold">
          I have got just what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50 ">{`Let's talk`}</span>
        </h4>

        <div className=" space-y-10">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="w-4 h-4 lg:w-7 lg:h-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-lg lg:text-2xl ">+221762714888</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="w-4 h-4 lg:w-7 lg:h-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-lg lg:text-2xl ">ryhow99@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="w-4 h-4 lg:w-7 lg:h-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-lg lg:text-2xl ">Dakar, Senegal</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
