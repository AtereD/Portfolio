"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useForm } from "react-hook-form";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";

const info = [
  {
    icon: <FaPhoneAlt className="md:w-6 md:h-6" />,
    description: "(+234) 912-168-1463",
    link: "tel:+2349121681463",
    label: "Phone",
  },
  {
    icon: <FaEnvelope className="md:w-6 md:h-6" />,
    description: "ateredamilola4d@gmail.com",
    link: "mailto:ateredamilola4d@gmail.com",
    label: "Email",
  },
  {
    icon: <FaMapMarkerAlt className="md:w-6 md:h-6" />,
    description: "Abuja, Nigeria.",
  },
];

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
    } else {
      router.push("/contact/success");
    }
  };

  return (
    <motion.section
      id="contact"
      className=" w-full h-full mt-24 mb-12"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          
          {/* Contact Info */}
          <div className="lg:w-1/2 w-full flex flex-col gap-4">
            <h3 className="text-text font-semibold lg:text-4xl text-2xl mb-2">
              Get In Touch!
            </h3>
            {info.map((item, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="text-accent-DEFAULT">{item.icon}</div>
                {item.link ? (
                  <a
                    href={item.link}
                    aria-label={item.label}
                    className="md:text-lg hover:text-text/40"
                  >
                    {item.description}
                  </a>
                ) : (
                  <span className="md:text-lg">{item.description}</span>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={onSubmit}
            action="https://formsubmit.co/dc7abb080f58ee94328c6262046c8e1a"
            method="POST"
            target="_blank"
            className="flex flex-col gap-6 md:p-6 bg-text rounded-xl py-8 px-5 lg:w-1/2 w-full h-[450px] items-center"
          >
            <h3 className="text-primary text-center text-3xl md:text-4xl">
              Let&apos;s work together!!
            </h3>
            <p className="text-primary/90 text-center">
              I am available for freelance or full-time positions.
            </p>

            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="text"
                placeholder="Name"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters"}
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
                  {errors.email.type === "required" && "This field is required"}
                  {errors.email.type === "pattern" &&
                    "Please enter a valid email"}
                </p>
              )}

              {/* Hidden fields */}
              <Input
                type="hidden"
                name="_autoresponse"
                value="Thank you for reaching out, I'll get back to you soon!"
              />
              <Input type="hidden" name="_template" value="table" />
            </div>

            {/* Message */}
            <Textarea
              className="h-[200px] bg-primary/90 placeholder:text-text/50"
              placeholder="Type your message here."
              {...register("message", { required: true, maxLength: 2000 })}
            />
            {errors.message && (
              <p className="mt-1 text-primary-500">
                {errors.message.type === "required" &&
                  "This field is required"}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 characters"}
              </p>
            )}

            {/* Button */}
            <Button
              size="md"
              className="text-primary bg-purple-900 flex gap-2 hover:border group hover:border-text hover:bg-primary/80 hover:text-text p-2 w-[30%]"
              type="submit"
            >
              Send
              <FaArrowRight className="-rotate-45 group-hover:rotate-0"/>
            </Button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
