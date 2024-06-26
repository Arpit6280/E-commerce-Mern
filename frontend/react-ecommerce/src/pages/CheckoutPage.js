import React from "react";
import Cart from "../features/cart/Cart";

function CheckoutPage() {
  const address = [
    {
      name: "Arpit",
      street: "Crpf school",
      state: "Delhi",
      pincode: "10078",
      phone: "6251487854",
    },
    {
      name: "Shaurya",
      street: "Ashoka school",
      state: "Varanasi",
      pincode: "10078",
      phone: "5411454785",
    },
  ];
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <form action="" className="bg-white px-5 my-12">
            <div class="border-b border-gray-900/10 pb-12">
              <h2 class="text-base font-semibold leading-7 text-gray-900">
                Personal Information
              </h2>
              <p class="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>

              <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <label
                    for="first-name"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="sm:col-span-3">
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
                </div>

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
                      name="email"
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
                      name="country"
                      autocomplete="country-name"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>

                <div class="col-span-full">
                  <label
                    for="street-address"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Street address
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autocomplete="street-address"
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
                      name="city"
                      id="city"
                      autocomplete="address-level2"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label
                    for="region"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    State / Province
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      autocomplete="address-level1"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label
                    for="postal-code"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ZIP / Postal code
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autocomplete="postal-code"
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
                {address.map((address) => (
                  <li class="flex justify-between gap-x-6 py-5 border-gray-200 border-2 p-2 my-2">
                    <div class="flex min-w-0 gap-x-4">
                      <input type="radio" name="address" />
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
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
