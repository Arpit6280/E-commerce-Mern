import React, { useState } from "react";
import Cart from "../features/cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteItemFromCartAsync,
  increment,
  incrementAsync,
  selectItems,
  updateItemAsync,
} from "../features/cart/cartSlice.js";
import { Navigate, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  checkUserAsync,
  selectLoggedInUser,
  updateUserAsync,
} from "../features/auth/authSlice.js";
import { createOrderAsync } from "../features/order/orderSlice.js";

function CheckoutPage() {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const user = useSelector(selectLoggedInUser);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const totalAmount = items.reduce(
    (amount, item) => item.price * item.quantity + amount,
    0
  );
  const totalItems = items.reduce((total, item) => item.quantity + total, 0);

  const handleQuantity = (e, item) => {
    // const update
    console.log("hi");
    dispatch(updateItemAsync({ ...item, quantity: +e.target.value }));
  };

  const handleRemove = (e, item) => {
    dispatch(deleteItemFromCartAsync(item.id));
  };
  const handleAddress = (e) => {
    setSelectedAddress(user.addresses[e.target.value]);
  };

  const handlePayment = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleOrder = (e) => {
    setPaymentMethod(e.target.value);
    const order = {
      items,
      totalAmount,
      totalItems,
      user,
      paymentMethod,
      selectedAddress,
    };
    dispatch(createOrderAsync(order));
    //TODO: redirect to order-success page
    //TODO: clear cart after order
    //TODO: on server chnage the stock number of items reduced
  };
  return (
    <>
      {!items.length && <Navigate to="/" replace={true} />}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit((data) => {
                console.log(data);
                dispatch(
                  updateUserAsync({
                    ...user,
                    addresses: [...user.addresses, data],
                  })
                );
                reset();
              })}
              noValidate
              className="bg-white px-5 my-12"
            >
              <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base font-semibold leading-7 text-gray-900">
                  Personal Information
                </h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div class="sm:col-span-4">
                    <label
                      for="name"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Full Name
                    </label>
                    <div class="mt-2">
                      <input
                        type="text"
                        {...register("name", { required: "name is required" })}
                        id="name"
                        autocomplete="name"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  {/* <div class="sm:col-span-3">
                    <label
                      for="last-name"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div class="mt-2">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autocomplete="family-name"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div> */}

                  <div class="sm:col-span-4">
                    <label
                      for="email"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div class="mt-2">
                      <input
                        id="email"
                        {...register("email", {
                          required: "email is required",
                        })}
                        type="email"
                        autocomplete="email"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label
                      for="country"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Country
                    </label>
                    <div class="mt-2">
                      <select
                        id="country"
                        {...register("country", {
                          required: "country is required",
                        })}
                        autocomplete="country"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option>India</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label
                      for="number"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone Number
                    </label>
                    <div class="mt-2">
                      <input
                        id="number"
                        type="tel"
                        {...register("number", {
                          required: "number is required",
                        })}
                        autocomplete="number"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div class="col-span-full">
                    <label
                      for="street"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Street address
                    </label>
                    <div class="mt-2">
                      <input
                        type="text"
                        id="street"
                        {...register("street", {
                          required: "street is required",
                        })}
                        autocomplete="street"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-2 sm:col-start-1">
                    <label
                      for="city"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      City
                    </label>
                    <div class="mt-2">
                      <input
                        type="text"
                        {...register("city", {
                          required: "city is required",
                        })}
                        id="city"
                        autocomplete="city"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <label
                      for="state"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      State / Province
                    </label>
                    <div class="mt-2">
                      <input
                        type="text"
                        {...register("state", {
                          required: "state is required",
                        })}
                        id="state"
                        autocomplete="state"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <label
                      for="pincode"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      ZIP / Postal code
                    </label>
                    <div class="mt-2">
                      <input
                        type="text"
                        {...register("pincode", {
                          required: "pincode is required",
                        })}
                        id="pincode"
                        autocomplete="pincode"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div class="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    type="button"
                    class="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Add Address
                  </button>
                </div>
              </div>

              <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base font-semibold leading-7 text-gray-900">
                  Address
                </h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">
                  Choose from existing address
                </p>
                <ul role="list">
                  {user.addresses.map((address, index) => (
                    <li
                      key={index}
                      class="flex justify-between gap-x-6 py-5 border-gray-200 border-2 p-2 my-2"
                    >
                      <div class="flex items-center min-w-0 gap-x-4">
                        <input
                          type="radio"
                          name="address"
                          onChange={handleAddress}
                          value={index}
                        />
                        <img
                          class="h-12 w-12 flex-none rounded-full bg-gray-50"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <div class="min-w-0 flex-auto">
                          <p class="text-sm font-semibold leading-6 text-gray-900">
                            {address.name}
                          </p>
                          <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                            {address.phone}
                          </p>
                        </div>
                      </div>
                      <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p class="text-sm leading-6 text-gray-900">
                          {address.state}
                        </p>
                        <p class="mt-1 text-xs leading-5 text-gray-500">
                          {address.street}
                        </p>
                        <p class="mt-1 text-xs leading-5 text-gray-500">
                          {address.pincode}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div class="mt-10 space-y-10">
                  <fieldset>
                    <legend class="text-sm font-semibold leading-6 text-gray-900">
                      Payment Methods
                    </legend>
                    <p class="mt-1 text-sm leading-6 text-gray-600">
                      These are delivered via SMS to your mobile phone.
                    </p>
                    <div class="mt-6 space-y-6">
                      <div class="flex items-center gap-x-3">
                        <input
                          id="cash"
                          name="payments"
                          onChange={handlePayment}
                          value="cash"
                          checked={paymentMethod === "cash"}
                          type="radio"
                          class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          for="cash"
                          class="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Cash
                        </label>
                      </div>
                      <div class="flex items-center gap-x-3">
                        <input
                          id="card"
                          name="payments"
                          onChange={handlePayment}
                          value="card"
                          checked={paymentMethod === "card"}
                          type="radio"
                          class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          for="card"
                          class="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Card
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
          <div className="lg:col-span-2">
            <div className="mx-auto mt-12 bg-white max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-7xl">
                <h2 className="text-4xl my-5 font-bold">Cart</h2>
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {items.map((item) => (
                      <li key={item.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href={item.href}>{item.name}</a>
                              </h3>
                              <p className="ml-4">{item.price}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.brand}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="text-gray-500">
                              <label
                                htmlFor=""
                                className=" inline-block mr-5 text-sm font-medium leading-6 text-gray-900"
                              >
                                Qty
                              </label>
                              <select
                                name=""
                                id=""
                                value={item.quantity}
                                onChange={(e) => handleQuantity(e, item)}
                              >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                              </select>
                            </div>

                            <div className="flex">
                              <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                onClick={(e) => handleRemove(e, item)}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>${totalAmount}</p>
                </div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Total Items in Cart</p>
                  <p>{totalItems}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6">
                  <div
                    className="flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    onClick={handleOrder}
                  >
                    Order Now
                  </div>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or{" "}
                    <NavLink to="/">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                        onClick={() => setOpen(false)}
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
