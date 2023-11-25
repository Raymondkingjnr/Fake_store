import React from "react";
import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

const SignIn = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="w-96 card border bg-base-200 p-4 shadow-lg flex flex-col gap-y-4"
      >
        <h2 className="font-semibold lg:text-xl sm:text-sm  text-center ">
          Login
        </h2>
        <FormInput
          type="email"
          label="Email"
          name="identifier"
          defaultValue="test@text.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="Login" />
        </div>
        <p className="text-center mt-5">
          Not a member yet?
          <Link
            to={"/register"}
            className="link link-hover link-accent capitalize"
          >
            {" "}
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default SignIn;
