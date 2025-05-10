"use client";
import React, { useState } from "react";

const GetInTouchForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on typing
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!form.company.trim()) newErrors.company = "Company is required";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // handle actual form submission here
    console.log("Form submitted successfully", form);

    // Reset form
    setForm({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <div className="w-full">
      <h2 className="font-bold text-[66px] grey_gradient ff_inter leading-[120%] pb-8">
        Get in touch
      </h2>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row justify-between gap-5 ff_dm">
          <div className="w-full">
            <label className="text-lg font-bold uppercase" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={onChange}
              className="bg-dark2 border border-dark sm:py-5 py-3 sm:px-6 px-4 text-lg font-normal placeholder:text-white rounded-[11px] w-full mt-3"
              type="text"
              placeholder="Full Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-2">{errors.name}</p>
            )}
          </div>
          <div className="w-full">
            <label className="text-lg font-bold uppercase" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={onChange}
              className="bg-dark2 border border-dark sm:py-5 py-3 sm:px-6 px-4 text-lg font-normal placeholder:text-white rounded-[11px] w-full mt-3"
              type="email"
              placeholder="email@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row justify-between gap-5 ff_dm xl:mt-7 mt-5">
          <div className="w-full">
            <label className="text-lg font-bold uppercase" htmlFor="company">
              Company
            </label>
            <input
              id="company"
              name="company"
              value={form.company}
              onChange={onChange}
              className="bg-dark2 border border-dark sm:py-5 py-3 sm:px-6 px-4 text-lg font-normal placeholder:text-white rounded-[11px] w-full mt-3"
              type="text"
              placeholder="Company Name"
            />
            {errors.company && (
              <p className="text-red-500 text-sm mt-2">{errors.company}</p>
            )}
          </div>
          <div className="w-full">
            <label className="text-lg font-bold uppercase" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              value={form.subject}
              onChange={onChange}
              className="bg-dark2 border border-dark sm:py-5 py-3 sm:px-6 px-4 text-lg font-normal placeholder:text-white rounded-[11px] w-full mt-3"
              type="text"
              placeholder="How can we help?"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-2">{errors.subject}</p>
            )}
          </div>
        </div>

        <div className="w-full xl:mt-7 mt-5">
          <label className="text-lg font-bold uppercase" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={onChange}
            className="bg-dark2 border border-dark sm:py-5 py-3 sm:px-6 px-4 text-lg font-normal placeholder:text-white rounded-[11px] w-full mt-3"
            placeholder="Your Message"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-2">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="text-base font-bold sm:py-4 py-3 sm:px-7 px-5 floating_gradient uppercase rounded-[12px] mt-7 hover:opacity-90 duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default GetInTouchForm;
