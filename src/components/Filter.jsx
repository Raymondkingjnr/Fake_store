import React from "react";
import FormInput from "./FormInput";
import { Form, useLoaderData } from "react-router-dom";

const Filter = () => {
  const { params, categories } = useLoaderData();
  const { sort } = params;
  return (
    <section>
      <div className="grid items-center border-b border-base-300 lg:grid-cols-2">
        <Form className="mt-1 w-80">
          <FormInput
            type="sort"
            label="search product"
            name="sort"
            size="input-sm"
            defaultValue={sort}
          />
          <button type="submit" className="btn btn-accent btn-sm mt-5">
            search
          </button>
        </Form>
        <div className="flex flex-wrap gap-4 justify-center align-middle">
          {categories.map((category, index) => {
            return (
              <button className="btn btn-accent capitalize btn-sm" key={index}>
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Filter;
