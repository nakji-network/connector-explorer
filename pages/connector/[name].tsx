import { useRouter } from "next/router";
import Header from "../../components/Header";
import { Tab } from "@headlessui/react";
import Data from "../../contents/content.json";
import { useState, useEffect } from "react";

// TODO: Add states hooks and logic for selecting datastream items (preferabbly vertical tabs)
// TODO: Add metadata checking against datastreams available
// TODO: Add Default Routing for not found connectors

function ConnectorTabList({ tabName }: { tabName: string }) {
  return (
    <Tab className="w-full border-2	border-gray-400 border-b-white rounded-t-xl text-md sm:text-lg font-bold text-white  ui-selected:bg-orange-primary ui-selected:border-orange-primary ui-selected:border-b-orange-primary ui-not-selected:text-black-100 ui-not-selected:hover:bg-orange-primary/[0.12] ui-not-selected:hover:text-black-100">
      {tabName}
    </Tab>
  );
}

// function ConnectorTabPanel(children: any) {
//   return <div>{children}</div>;
// }

function AboutPanel({
  description,
  datastreams,
}: {
  description: string;
  datastreams: any;
}) {
  return (
    <div>
      <div>
        <h1 className="text-2xl sm:text-2xl md:text-3xl text-black-100">
          Description
        </h1>
        <p className="leading-5 sm:leading-5 md:leading-5 lg:leading-6 pt-2 sm:pt-2 text-base sm:text-lg text-black-100">
          {description}
        </p>
      </div>
      <div className="pt-3">
        <h1 className="text-2xl sm:text-2xl md:text-3xl text-black-100">
          Datastreams
        </h1>
        <ul role="list" className="">
          {datastreams.map((datastream: any) => (
            <li
              key={datastream.name}
              className="list-disc list-inside leading-4 sm:leading-4 md:leading-4 lg:leading-5 pt-2 sm:pt-2 text-base sm:text-lg text-black-100"
            >
              {datastream.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// TODO: Add states hooks for selecting items
function PlaygroundPanel({ datastreams }: { datastreams: any }) {
  return (
    <div>
      <ul
        role="list"
        className="grid gap-4 grid-cols-2 pt-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5"
      >
        <li className="h-52 min-h-0 hover:min-h-full px-3 py-2 col-span-1 flex flex-col rounded-lg bg-white text-center shadow-md">
          <h3 className="text-left text-gray-600 text-lg font-bold">
            Datastreams
          </h3>
          <div></div>
        </li>
        <li className="h-52 min-h-0 hover:min-h-full px-3 py-2 col-span-2 flex flex-col divide-y divide-gray-500 rounded-xl bg-white text-center shadow-lg">
          <h3 className="text-left text-gray-600 text-lg font-bold">
            Response Schema
          </h3>
        </li>
        <li className="h-52 min-h-0 hover:min-h-full px-3 py-2 col-span-2 flex flex-col divide-y divide-gray-500 rounded-xl bg-white text-center shadow-lg">
          <h3 className="text-left text-gray-600 text-lg font-bold">
            Example Response
          </h3>
        </li>
      </ul>
    </div>
  );
}

function VersionsPanel({ versions }: { versions: any }) {
  return (
    <div>
      <ul role="list" className="">
        {versions.map((version: any) => (
          <li key={version.number} className="py-2 divide-y-2">
            <h3 className="text-2xl sm:text-3xl">{version.number}</h3>
            <p className="pt-1 text-base sm:text-lg">{version.changelog}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const emptyData = [
  {
    name: "",
    title: "",
    subtitle: "",
    author: "",
    verified: true,
    enabled: false,
    description: "",
    website: "",
    icon: "",
    version: "",
    tags: [""],
    datastreams: [
      {
        name: "",
        schema: "",
        example_response: "",
      },
    ],
    versions: [
      {
        number: "",
        changelog: "",
      },
    ],
  },
];

const Connector = () => {
  const [filteredData, setFilteredData] = useState(emptyData);
  const router = useRouter();
  // var filteredData = Data.connectors;
  useEffect(() => {
    if (router.isReady) {
      // Code using query
      console.log(router.query);
      // this will set the state before component is mounted
      // setFilteredData(
      //   Data.connectors.filter((connector : any) =>
      //     connector.name.includes(router.query.name as string)
      //   )
      // );
      //  Temp bandaid for deployment (REMOVE AFTER)
      setFilteredData(Data.connectors as any);

      {
        /* TODO: Add metadata endpoint checks here */
      }
      console.log(filteredData[0]);
    }
  }, [router.isReady]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      <Header></Header>

      <div className="bg-white px-4 pt-4 pb-20 sm:px-6 sm:pt-6">
        {/* Title Setion */}
        <div className="relative mx-auto">
          {/* Top */}
          <div className="flex">
            {/* Icon */}
            <div className=" rounded-xl mr-4 flex-shrink-0">
              <img
                className="bg-gray-800 p-6 mx-auto h-40 w-40 sm:h-48 sm:w-48 md:h-50 md:w-50 lg:h-52 lg:w-52 flex-shrink-0 rounded-xl"
                src={filteredData[0].icon}
                alt={filteredData[0].name}
              />

              {/* Tags */}
              <div>
                <dl className="flex flex-grow flex-col justify-between">
                  <dt className="sr-only">Tags</dt>
                  <dd className="mt-2">
                    {filteredData[0].tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="rounded-full bg-orange-primary px-2 mx-0.5 py-1 text-xs font-medium text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </dd>
                </dl>
              </div>
            </div>

            {/* Text */}
            <div>
              <h2 className="text-4xl sm:text-5xl text-gray-900 font-bold">
                {filteredData[0].title}
              </h2>
              <h3 className="pt-0.25 sm:pt-0.5 text-2xl sm:text-3xl text-orange-primary font-semibold">
                {filteredData[0].author}
              </h3>
              <h4 className="pt-0.25 sm:pt-0.5 text-sm sm:text-lg text-gray-500">
                Published{" "}
                <strong className="text-gray-800">
                  {filteredData[0].version}
                </strong>{" "}
                on
                <strong className="text-gray-800"> August 11, 2022 </strong>
              </h4>
              <p className="leading-4 sm:leading-4 md:leading-5 lg:leading-6 pt-2 sm:pt-3 text-base sm:text-lg">
                {filteredData[0].description}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white pt-6 pb-20 lg:pt-7 lg:pb-28">
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            {/* Tabs Labelings */}
            <Tab.List className="flex space-x-1 sm:space-x-1.5 bg-white ">
              <ConnectorTabList tabName="About" />
              <ConnectorTabList tabName="Playground" />
              <ConnectorTabList tabName="Version" />
            </Tab.List>
            {/* This is the line under the tabs */}
            <div className="flex-grow border-t-4 border-orange-primary"> </div>
            {/* Tab Panels */}
            <Tab.Panels className="mt-2">
              <Tab.Panel>
                <AboutPanel
                  description={filteredData[0].description}
                  datastreams={filteredData[0].datastreams}
                ></AboutPanel>
              </Tab.Panel>
              <Tab.Panel>
                <PlaygroundPanel
                  datastreams={filteredData[0].datastreams}
                ></PlaygroundPanel>
              </Tab.Panel>
              <Tab.Panel>
                <VersionsPanel
                  versions={filteredData[0].versions}
                ></VersionsPanel>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};
// border-b-4 sm:border-b-4 border-orange-primary
export default Connector;
