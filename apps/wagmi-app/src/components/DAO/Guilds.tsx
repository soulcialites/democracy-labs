import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";

type AddGuildInputs = {
  name: string;
  symbol: string;
  description: string;
};

const Guilds = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddGuildInputs>({
    defaultValues: {
      name: "",
      symbol: "",
      description: "",
    },
  });

  return (
    <div className="bg-white p-4 space-y-3 -mt-24 mx-10 rounded">
      <div className="flex justify-between">
        <h1 className="text-2xl text-black font-semibold">Your Guilds</h1>
        <div
          className="px-3 py-1 border rounded-full bg-gray-200 hover:bg-purple-200 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          Add New Guild
        </div>
        <Transition appear show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-medium leading-6 text-gray-900"
                    >
                      Add New Guild
                    </Dialog.Title>
                    <form
                      onSubmit={handleSubmit(() => {})}
                      className="my-2 w-full space-y-3 text-sm"
                    >
                      <div className="space-y-2">
                        <label className="font-medium">Name</label>
                        <div className="relative flex items-center text-sm text-gray-500 focus-within:text-district-green">
                          <input
                            {...register("name", {
                              required: "Please provide a name for your Guild",
                              minLength: {
                                value: 3,
                                message:
                                  "Guild name must be between 3-25 characters.",
                              },
                              maxLength: {
                                value: 25,
                                message:
                                  "Guild name must be between 3-25 characters.",
                              },
                            })}
                            placeholder="Aviato"
                            className="w-full rounded-lg border-none bg-white py-2 px-3 text-black outline-none ring-1 ring-gray-300 placeholder:text-gray-500 focus:ring-1 focus:ring-purple-300"
                          />
                        </div>
                        <p className="text-xs text-red-500">
                          {errors.name?.message}
                        </p>
                        <label className="font-medium">Symbol</label>
                        <div className="relative flex items-center text-sm text-gray-500 focus-within:text-district-green">
                          <input
                            {...register("symbol", {
                              required:
                                "Please provide a symbol for your Guild",
                              minLength: {
                                value: 3,
                                message:
                                  "Guild symbol must be between 3-5 characters.",
                              },
                              maxLength: {
                                value: 5,
                                message:
                                  "Guild symbol must be between 3-5 characters.",
                              },
                            })}
                            placeholder="AVTO"
                            className="w-full rounded-lg border-none bg-white py-2 px-3 text-black outline-none ring-1 ring-gray-300 placeholder:text-gray-500 focus:ring-1 focus:ring-purple-300"
                          />
                        </div>
                        <p className="text-xs text-red-500">
                          {errors.symbol?.message}
                        </p>
                        <label className="font-medium">Description</label>
                        <div className="relative flex items-center text-sm text-gray-500 focus-within:text-district-green">
                          <input
                            {...register("description")}
                            placeholder="Erlich Bachman's Vacation Fund"
                            className="w-full rounded-lg border-none bg-white py-2 px-3 text-black outline-none ring-1 ring-gray-300 placeholder:text-gray-500 focus:ring-1 focus:ring-purple-300"
                          />
                        </div>
                        <p className="text-xs text-red-500">
                          {errors.description?.message}
                        </p>
                      </div>
                      <div className="flex justify-end gap-x-2.5 pt-6">
                        <button
                          type="button"
                          className="btn"
                          onClick={() => setOpen(false)}
                        >
                          Cancel
                        </button>
                        <button type="submit" className="btn btn-purple">
                          Create Guild
                        </button>
                      </div>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>

      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Active Proposals
              </th>
              <th scope="col" className="px-6 py-3">
                Progress
              </th>
              <th scope="col" className="px-6 py-3">
                Requests
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Marketing
              </th>
              <td className="px-6 py-4 ">12</td>
              <td className="px-6 py-4">65%</td>
              <td className="px-6 py-4">1</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Development
              </th>
              <td className="px-6 py-4">18</td>
              <td className="px-6 py-4">85%</td>
              <td className="px-6 py-4">3</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1 className="text-2xl text-black font-semibold">Other Guilds</h1>
      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Active Proposals
              </th>
              <th scope="col" className="px-6 py-3">
                Progress
              </th>
              <th scope="col" className="px-6 py-3">
                Requests
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Executive Team
              </th>
              <td className="px-6 py-4 ">12</td>
              <td className="px-6 py-4">65%</td>
              <td className="px-6 py-4">1</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Treasury
              </th>
              <td className="px-6 py-4">18</td>
              <td className="px-6 py-4">85%</td>
              <td className="px-6 py-4">3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Guilds;
