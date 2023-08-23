import React from "react";
import { useFormik } from "formik";
import { contactSchema } from "schemas";
import { object } from "yup";

const initialValues = {
  name: "",
  // phone: "",
  email: "",
  message: "",
};

const Contact = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: contactSchema,
    onSubmit: async (values, action) => {
      const body = new FormData();
      Object.entries(values).forEach(([key, val]) => {
        body.append(key, val);
      });

      const res = await fetch(
        "https://getform.io/f/966e435f-4c9d-4967-9ea1-fc57cf17dcfd",
        {
          method: "POST",
          headers: {
            accept: "application/json",
          },
          body,
        }
      );

      if (!res.ok) {
        console.error(res.status, await res.text());
      } else {
        console.log(await res.json());
      }
      action.resetForm();
    },
  });

  return (
    <div className="py-24 sm:py-4 md:pt-4" id="contact">
      <div name="experience" className="w-[1024px] max-w-full mx-auto ">
        <div className="mx-auto p-4 flex flex-col justify-center">
          <div>
            <p className="text-4xl text-green font-bold border-b-4 border-gray-500 p-2 inline sm:text-3xl">
              Contact
            </p>
            <p className="py-6 sm:pb-5">
              Submit the form below to get in touch with me.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-1/2 md:w-full sm:w-full"
            >
              <div className="flex flex-col p-4">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                />
                {errors.name && touched.name ? (
                  <p className="text-red">{errors.name}</p>
                ) : null}
              </div>
              {/* <div className="flex flex-col p-4">
                <label htmlFor="number">Phone Number</label>
                <input
                  type="number"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Your Phone Number"
                  className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                />
                {errors.phone && touched.phone ? (
                  <p className="text-red">{errors.phone}</p>
                ) : null}
              </div> */}
              <div className="flex flex-col p-4">
                <label htmlFor="email">Email ID</label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Your Mail ID"
                  className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                />
                {errors.email && touched.email ? (
                  <p className="text-red">{errors.email}</p>
                ) : null}
              </div>

              <div className="flex flex-col p-4">
                <label htmlFor="message">Message</label>
                <textarea
                  type="text"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Your Message"
                  rows="8"
                  className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                />
                {errors.message && touched.message ? (
                  <p className="text-red">{errors.message}</p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={!isValid}
                className={`bg-${
                  isValid ? "teal" : "teal"
                } text-white font-semibold border border-${
                  isValid ? "teal" : "teal"
                } border-gray px-6 py-3 my-8 mx-auto flex items-center rounded-md duration-300 ${
                  isValid ? "cursor-pointer" : "cursor-not-allowed"
                }`}
              >
                Let&apos;s talk!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
