import React from "react";
import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form method="post" className="card w-96 p-4 bg-base-200">
        <h2 className="text-center lg:text-xl sm:text-sm font-semibold capitalize mb-3">
          Register
        </h2>
        <FormInput type="text" label="username" name="username" />
        <FormInput type="email" label="Email" name="email" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4 text-center">
          <SubmitBtn text="register" />
        </div>
        <p className="mt-4 text-left">
          Already a Member?{" "}
          <Link to={"/login"} className="link link-hover link-accent">
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
