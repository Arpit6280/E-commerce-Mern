import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { Link, Navigate } from "react-router-dom";
import { selectLoggedInUser, createUserAsync } from "./authSlice";

function Signup() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const user = useSelector(selectLoggedInUser);

  console.log(errors);

  return (
    <>
      {user && <Navigate to="/" replace={true} />}
      <div class="flex  h-screen  flex-col justify-center content-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          {user?.email}
          <img
            class="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create a new account
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            noValidate
            class="space-y-6"
            onSubmit={handleSubmit((data) => {
              dispatch(
                createUserAsync({
                  email: data.email,
                  name: data.email,
                  password: data.password,
                })
              );
              console.log(data);
            })}
          >
            <div>
              <div class="flex items-center justify-between">
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
              </div>
              <div class="mt-2">
                <input
                  id="email"
                  {...register("email", {
                    required: "email is required",
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                      message: "email not valid",
                    },
                  })}
                  type="email"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="name"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
              </div>
              <div class="mt-2">
                <input
                  id="name"
                  {...register("name", { required: "name is required" })}
                  type="text"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div class="mt-2">
                <input
                  id="password"
                  {...register("password", {
                    required: "password is required",
                  })}
                  type="password"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="confirm-password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div class="mt-2">
                <input
                  id="confirmPassword"
                  {...register("confirmPassword", {
                    required: "confirm password is required",
                    validate: (value, formValues) =>
                      value === formValues.password || "password not matching",
                  })}
                  type="password"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p class="mt-10 text-center text-sm text-gray-500">
            already a member?
            <Link
              to="/login"
              class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
