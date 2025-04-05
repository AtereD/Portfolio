"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect } from "react";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+234) 813 859 0395",
  },
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

import { useForm, ValidationError } from "@formspree/react";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  const [state, handleSubmit] = useForm("mldjpyon");

  useEffect(() => {
    if (state.succeeded) {
      router.push("/contact/success");
    }
  }, [state.succeeded, router]);

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
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
              action="https://formspree.io/f/mldjpyon"
              method="POST"
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
                  type="firstname"
                  placeholder="Firstname"
                  name="firstname"
                />
                <Input type="lastname" placeholder="Lastname" name="lastname" />
                <Input type="email" placeholder="Email" name="email" />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <Input type="phone" placeholder="Phone number" name="phone" />
                <ValidationError
                  prefix="phone"
                  field="phone"
                  errors={state.errors}
                />
              </div>
              {/* Select */}
              <Select name="service">
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
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                name="message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              {/* btn */}
              <Button
                size="md"
                className="max-w-40"
                type="submit"
                disabled={state.submitting}
              >
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
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
