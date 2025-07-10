"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import animationData from "@/constant/confetti.json"
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
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import MagicButton from "@/components/ui/MagicButton";

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

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "ateredamilola4d@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
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
        <div className="flex flex-col w-full justify-center px-4 lg:px-0">
          {/* form */}
          <div className=" w-full flex justify-center items-center">
            <form
              className="flex flex-col gap-6 md:p-10 bg-[#27272c] rounded-xl py-8 px-5 md:items-center "
              onSubmit={onSubmit}
              action="https://formsubmit.co/dc7abb080f58ee94328c6262046c8e1a"
              method="POST"
              target="_blank"
            >
              <h3 className="text-4xl text-accent-DEFAULT text-center">
                Let's work together!!
              </h3>
              <p className="text-white/60 text-center">
                I am available for freelance or full-time positions.
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
              <Button size="md" className="max-w-40 " type="submit">
                Send
              </Button>

               {/* info */}
          
            </form>

           
          </div>
          
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
