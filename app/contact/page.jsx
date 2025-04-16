"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { useForm } from "react-hook-form";

import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  // {
  //   icon: <FaPhoneAlt />,
  //   title: "Phone",
  //   description: "(+234) 813 859 0395",
  // },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ateredamilola7d@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Abuja, Nigeria.",
  },
];

import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
    if (isValid) {
      router.push('/contact/success')
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-0">
          {/* form */}
          <div className="lg:w-[53%] order-2 lg:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={onSubmit}
              action="https://formsubmit.co/dc7abb080f58ee94328c6262046c8e1a"
              method="POST"
              target="_blank"
            >
              <h3 className="text-4xl text-accent-DEFAULT">
                Let's work together
              </h3>
              <p className="text-white/60">
                I am available for freelance or full-time positions. Contact me
                and let's talk..
              </p>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Name"
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                  })}
                />
                {errors.name && (
                  <p className="mt-1 text-primary-500">
                    {errors.name.type === "required" &&
                      "This field is required"}
                    {errors.name.type === "maxLength" &&
                      "Max length is 100 char."}
                  </p>
                )}

                <Input
                  type="text"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-primary-500">
                    {errors.email.type === "required" &&
                      "This field is required"}
                    {errors.email.type === "pattern" && "Wrong Email Address"}
                  </p>
                )}
                <Input
                  type="hidden"
                  name="_autoresponse"
                  value="Thank you reaching out, I'd get back to you soon!"
                />
                <Input type="hidden" name="_template" value="table" />
              </div>
              {/* Select */}
              {/* <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                name="message"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required"}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}
              {/* btn */}
              <Button size="md" className="max-w-40" type="submit">
                Send
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6 ">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent-DEFAULT rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
