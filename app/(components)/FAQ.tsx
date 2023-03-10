"use client";
import { Disclosure } from "@headlessui/react";
import { BiChevronUp } from "react-icons/bi";

export default function FAQ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="w-full px-4">
      <div className="mx-auto w-full max-w-md rounded-2xl p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-green-100 px-4 py-6 text-left text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                <span className="capitalize">{question}</span>
                <BiChevronUp
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-green-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {answer}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
