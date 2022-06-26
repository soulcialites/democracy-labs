// @ts-nocheck
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

type Props = {
  open: any;
  setOpen: any;
};

const ProposalDetail = ({ open, setOpen }: Props) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
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
              <Dialog.Panel className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-3xl font-medium text-gray-900"
                >
                  Split payment smart contracts to pay contributor
                </Dialog.Title>
                <div className="mt-3 space-y-3 border-b pb-3 text-sm text-gray-600">
                  <div className="flex">
                    <p className="w-36">Guild</p>
                    <p>Dev</p>
                  </div>
                  <div className="flex">
                    <p className="w-36">Contributors</p>
                    <p>Kames, Dino, Annette, George, Justin</p>
                  </div>
                  <div className="flex">
                    <p className="w-36">Funds Requested</p>
                    <p>$4,000</p>
                  </div>
                </div>

                <div className="border-b py-3">
                  <h1 className="font-semibold">Proposal Rationale</h1>
                  <p>
                    Setting up funds to pay Development Guild contributors. The
                    socialites has attracted lots of inbound given how awesome
                    the product is, and the strength of the public goods. After
                    presenting at ETH NYC, the team plans on adding additional
                    developers to accelerate product releases.
                  </p>
                  <h3 className="my-2 font-semibold">Product Architecture</h3>
                  <img
                    src={"/assets/images/Architecture.png"}
                    className="h-60 object-contain"
                  />
                </div>
                <div className="mt-2">
                  <h1 className="text-2xl font-semibold">Timeline</h1>
                  <div className="ml-2">
                    <ol className="relative border-l border-gray-700">
                      <li className="mb-10 ml-4">
                        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-700">
                          February 2022
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Kickoff Workshop
                        </h3>
                        <p className="mb-4 text-base font-normal text-gray-700">
                          Contributors: George, JBass, Kames, Dino, Annette
                        </p>
                      </li>
                      <li className="mb-10 ml-4">
                        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-700 ">
                          March 2022
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Design Review
                        </h3>
                        <p className="text-base font-normal text-gray-700">
                          Contributors: Annette, Dino
                        </p>
                      </li>
                      <li className="ml-4">
                        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-700 "></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-700 ">
                          April 2022
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Dev Review
                        </h3>
                        <p className="text-base font-normal text-gray-700">
                          Contributors: Kames, George, Justin
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProposalDetail;
