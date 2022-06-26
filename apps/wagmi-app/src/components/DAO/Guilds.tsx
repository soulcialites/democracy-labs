// @ts-nocheck
import CitizenV1 from "@democracy-labs/governance-sol/deployments/rinkeby/CitizenV1.json";
import { useCitizenV1ContractWrite } from "@democracy-labs/governor-alpha-wagmi";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

type AddGuildInputs = {
  name: string;
  symbol: string;
  description: string;
};

const Guilds = ({ guilds }: any) => {
  const [open, setOpen] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AddGuildInputs>({
    defaultValues: {
      name: "",
      symbol: "",
      description: "",
    },
  });

  const watchAllFields = watch();
  const { write } = useCitizenV1ContractWrite(
    CitizenV1.address,
    "createGuild",
    [watchAllFields.name, watchAllFields.symbol, watchAllFields.description]
  );
  const onSubmit = (_data: any) => {
    write();
    setOpen(false);
  };

  useCitizenV1ContractWrite(CitizenV1.address, "createGuild", [
    watchAllFields.name,
    watchAllFields.symbol,
    watchAllFields.description,
  ]);

  return (
    <div className="mx-10 space-y-3 rounded bg-white p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold text-black">Guilds</h1>
        <div
          className="cursor-pointer rounded-full border bg-gray-200 px-3 py-1 hover:bg-purple-200"
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
                  <Dialog.Panel className="w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-medium leading-6 text-gray-900"
                    >
                      Add New Guild
                    </Dialog.Title>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="my-2 w-full space-y-3 text-sm"
                    >
                      <div className="space-y-2">
                        <label className="font-medium">Name</label>
                        <div className="focus-within:text-district-green relative flex items-center text-sm text-gray-500">
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
                        <div className="focus-within:text-district-green relative flex items-center text-sm text-gray-500">
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
                        <div className="focus-within:text-district-green relative flex items-center text-sm text-gray-500">
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
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
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
            {guilds?.map((guild) => (
              <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  {guild.name}
                </th>
                <td className="px-6 py-4 ">12</td>
                <td className="px-6 py-4">65%</td>
                <td className="px-6 py-4">1</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Guilds;
