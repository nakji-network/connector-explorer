import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Data from "../contents/content.json";
import Header from "../components/Header";
import GridView from "../components/GridView";
import ListView from "../components/ListView";
import Search from "../components/Search";
import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { Switch } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from 'next/router'

// Roadmap: 
// TODO: Add a filter bar (next release) 
// https://stackoverflow.com/questions/59144468/how-to-filter-arrays-in-a-json-by-multiple-tags
// TODO: Add dynamic data (statuses, traffic, etc) (next release)
// TODO: Refactor code into their own components

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Home: NextPage = () => {
  
  var connectorsData = Data.connectors;
  
  const router = useRouter()
  const [gridView, setGridView] = useState(true);
  const [selected, setSelected] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPeople =
    searchQuery === "" || searchQuery === null
      ? []
      : connectorsData.filter(
          (connector: any) => connector.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

  return (
    <div className="min-h-full overflow-x-hidden	 ">
      <Header/>
      <main className="mx-auto w-11/12 sm:w-5/6 md:7/10 max-w-8xl ">
        <div className="flex  items-center justify-between  py-6 focus:outline-none">
          {/* Search Box */}
          <div className="flex items-center max-w-8xl sm:w-3/4 md:w-3/5 lg:w-1/2 border-transparent focus:border-transparent focus:outline-none z-10">
            <Combobox value={selected} onChange={setSelected} nullable>
              <div className="relative w-full mt-1">
                <div className="relative h-11 w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none ">
                  <Combobox.Input
                    className="w-full h-11 border-none py-2 pl-3 pr-10 text-lg leading-5 text-gray-700 font-bold focus:outline-none placeholder:text-gray-500"
                    displayValue={(connector: { name: string }) =>
                      connector === null ? "" : connector.name
                    }
                    onChange={(event) => setSearchQuery(event.target.value as string)}
                    onKeyUp={(e: { key: string; }) => e.key === "Enter" && selected != null && router.push(`/connector/${selected["name"]}`)}
                    placeholder="Search for a connector"
                  />
                </div>
                <Transition
                  // as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  afterLeave={() => setSearchQuery("")}
                  
                >
                  <Combobox.Options className="absolute mt-2 max-h-72 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg focus:outline-none sm:text-sm">
                    {filteredPeople.length === 0 ? (
                      <div className="relative cursor-default select-none py-2 px-4 focus:outline-none text-gray-500">
                        No Connectors Found
                      </div>
                    ) : (
                      filteredPeople.map((connector) => (
                        <Combobox.Option
                          as="div"
                          key={connector.name}
                          className={({ active }) =>
                            `relative cursor-default select-none py-3 px-4 focus:outline-none ${
                              active
                                ? "bg-orange-primary text-white rounded-md"
                                : "text-gray-700"
                            }`
                          }
                          value={connector}
                          
                        >
                          {({ active, selected }) => (
                            <Link href={`/connector/${connector.name}`}>
                              <div className="flex items-center">
                                <img
                                  src={connector.icon}
                                  alt=""
                                  className="h-8 w-8  flex-shrink-0 rounded-full"
                                />

                                <span className=" ml-3 block truncate text-base font-bold">
                                  {connector.title}
                                </span>
                                <span className="ml-3 block italic truncate">
                                  {connector.name}
                                </span>
                              </div>
                            </Link>
                          )}
                        </Combobox.Option>
                      ))
                    )}
                  </Combobox.Options>
                </Transition>
              </div>
            </Combobox>
          </div>
          {/* View Toggle: List <=> Grid */}
          <div className="ml-10">
            <Switch
              checked={gridView}
              onChange={setGridView}
              className="bg-gray-200 flex h-8 w-28 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none ring-2 ring-gray-300 focus:ring-1 focus:ring-orange-primary"
            >
              {/* Icons Layer */}
              <div className="absolute grid grid-cols-2 h-8 w-28 z-10 content-center">
                {/* List Icon */}
                <svg
                  className={classNames(
                    gridView ? "fill-gray-600" : "fill-white",
                    "mx-auto h-auto "
                  )}
                  width="20"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.25 0.25C0.984375 0.25 0 1.28125 0 2.5C0 3.76562 0.984375 4.75 2.25 4.75C3.46875 4.75 4.5 3.76562 4.5 2.5C4.5 1.28125 3.46875 0.25 2.25 0.25ZM2.25 7.75C0.984375 7.75 0 8.78125 0 10C0 11.2656 0.984375 12.25 2.25 12.25C3.46875 12.25 4.5 11.2656 4.5 10C4.5 8.78125 3.46875 7.75 2.25 7.75ZM2.25 15.25C0.984375 15.25 0 16.2812 0 17.5C0 18.7656 0.984375 19.75 2.25 19.75C3.46875 19.75 4.5 18.7656 4.5 17.5C4.5 16.2812 3.46875 15.25 2.25 15.25ZM23.25 16H8.25C7.82812 16 7.5 16.375 7.5 16.75V18.25C7.5 18.6719 7.82812 19 8.25 19H23.25C23.625 19 24 18.6719 24 18.25V16.75C24 16.375 23.625 16 23.25 16ZM23.25 1H8.25C7.82812 1 7.5 1.375 7.5 1.75V3.25C7.5 3.67188 7.82812 4 8.25 4H23.25C23.625 4 24 3.67188 24 3.25V1.75C24 1.375 23.625 1 23.25 1ZM23.25 8.5H8.25C7.82812 8.5 7.5 8.875 7.5 9.25V10.75C7.5 11.1719 7.82812 11.5 8.25 11.5H23.25C23.625 11.5 24 11.1719 24 10.75V9.25C24 8.875 23.625 8.5 23.25 8.5Z" />
                </svg>
                {/* Grid Icon */}
                <svg
                  className={classNames(
                    !gridView ? "fill-gray-600" : "fill-white",
                    "mx-auto h-auto"
                  )}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.2857 0H1.71429C0.75 0 0 0.803571 0 1.71429V22.2857C0 23.25 0.75 24 1.71429 24H22.2857C23.1964 24 24 23.25 24 22.2857V1.71429C24 0.803571 23.1964 0 22.2857 0ZM20.5714 3.42857V10.2857H13.7143V3.42857H20.5714ZM10.2857 3.42857V10.2857H3.42857V3.42857H10.2857ZM3.42857 20.5714V13.7143H10.2857V20.5714H3.42857ZM13.7143 20.5714V13.7143H20.5714V20.5714H13.7143Z" />
                </svg>
              </div>
              {/* Orange Moving Toggle */}
              <span
                className={classNames(
                  gridView ? "translate-x-full" : "translate-x-0",
                  "relative pointer-events-none h-full w-1/2 transform rounded-full bg-orange-primary shadow ring-0 transition duration-200 ease-in-out"
                )}
              >
                <span
                  className={classNames(
                    gridView
                      ? "opacity-0 ease-out duration-100"
                      : "opacity-100 ease-in duration-200",
                    "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                  )}
                  aria-hidden="true"
                ></span>
                <span
                  className={classNames(
                    gridView
                      ? "opacity-100 ease-in duration-200"
                      : "opacity-0 ease-out duration-100",
                    "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                  )}
                  aria-hidden="true"
                ></span>
              </span>
            </Switch>
          </div>
        </div>
        <div className="mx-auto z-0">
          {gridView ? (
            <GridView data={Data.connectors} />
          ) : (
            <ListView data={Data.connectors} />
          )}
          {/* /End replace */}
        </div>
      </main>
    </div>
  );
};

export default Home;
