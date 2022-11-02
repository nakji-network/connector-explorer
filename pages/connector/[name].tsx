import { useRouter } from "next/router";
import Header from "../../components/Header";
import { Tab } from "@headlessui/react";
import Data from "../../contents/content.json";
import { useState, useEffect } from "react";

// TODO: Add states hooks and logic for selecting datastream items (preferabbly vertical tabs)
// TODO: Add Default Routing for not found connectors

const emptyData = [
  {
    name: "",
    title: "",
    subtitle: "",
    author: "",
    verified: false,
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

const emptyVal = [{ name: "", persistedValue: false }];

function ConnectorTabList({ tabName }: { tabName: string }) {
  return (
    <Tab className="w-full border-2	border-gray-400 border-b-white rounded-t-xl text-md sm:text-lg font-bold text-white  ui-selected:bg-orange-primary ui-selected:border-orange-primary ui-selected:border-b-orange-primary ui-not-selected:text-black-100 ui-not-selected:hover:bg-orange-primary/[0.12] ui-not-selected:hover:text-black-100">
      {tabName}
    </Tab>
  );
}

function AboutPanel({
  description,
  datastreams,
  availableDatastreams,
}: {
  description: string;
  datastreams: any;
  availableDatastreams: any;
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
          {datastreams.map(
            (datastream: any) =>
              availableDatastreams.includes(datastream.name) && (
                <li
                  key={datastream.name}
                  className="list-disc list-inside leading-4 sm:leading-4 md:leading-4 lg:leading-5 pt-2 sm:pt-2 text-base sm:text-lg text-black-100"
                >
                  {datastream.name}
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
}

// TODO: Add states hooks for selecting items
function PlaygroundPanel({
  datastreams,
  availableDatastreams,
}: {
  datastreams: any;
  availableDatastreams: any;
}) {
  return (
    <div>
      <ul
        role="list"
        className="grid gap-4 grid-cols-3 pt-1 sm:grid-cols-7 md:grid-cols-7 lg:grid-cols-11"
      >
        <li className="min-h-52 min-h-0 hover:min-h-full px-3 py-2 col-span-3 flex flex-col rounded-lg bg-white text-center shadow-md">
          <h3 className="text-left  text-gray-600 text-lg font-bold">
            Datastreams
          </h3>
          {/* Lists */}
          <div className="text-left overflow-x-auto	overflow-y-clip	">
            {datastreams.map(
              (datastream: any) =>
                availableDatastreams.includes(datastream.name) && (
                  <li className=" list-disc list-inside text-left overflow-x-auto	overflow-y-clip	py-0.5 font-mono text-sm">
                    {datastream.name}
                  </li>
                )
            )}
          </div>
        </li>
        <li className="mih-52 min-h-0 hover:min-h-full px-3 py-2 col-span-4 flex flex-col rounded-lg bg-white text-center shadow-lg">
          <h3 className="text-left text-gray-600 text-lg font-bold">
            Response Schema
          </h3>
          <div>
            <pre className="text-left text-black-100 text-xs sm:text-sm overflow-x-auto	overflow-y-clip px-3 py-2">
              {datastreams.map(
                (datastream: any) =>
                  datastream.name +
                  ":\n" +
                  JSON.stringify(datastream.schema, null, 2) +
                  "\n\n"
              )}
            </pre>
          </div>
        </li>
        <li className="min-h-52 min-h-0 hover:min-h-full px-3 py-2 col-span-4 flex flex-col rounded-lg bg-white text-center shadow-lg overflow-x-auto	overflow-y-clip">
          <h3 className="text-left text-gray-600 text-lg font-bold">
            Example Response
          </h3>
          <pre className="text-left text-black-100 text-xs sm:text-sm overflow-x-auto	overflow-y px-3 py-2">
            {datastreams.map(
              (datastream: any) =>
                datastream.name +
                ":\n" +
                JSON.stringify(datastream.example_response, null, 2) +
                "\n\n"
            )}
          </pre>
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

export async function getStaticPaths() {
  return {
    paths: [
      { params: { name: "makerdao" } },
      { params: { name: "bybit" } },
      { params: { name: "traderjoe" } },
      { params: { name: "axie" } },
      { params: { name: "pancakeswapv2" } },
      { params: { name: "aave" } },
      { params: { name: "mdex" } },
      { params: { name: "quickswap" } },
      { params: { name: "ethnft" } },
      { params: { name: "compound" } },
      { params: { name: "eth2staking" } },
      { params: { name: "candymachine" } },
      { params: { name: "woofi" } },
      { params: { name: "opensea" } },
      { params: { name: "evm" } },
      { params: { name: "flow" } },
      { params: { name: "uniswapv3" } },
      { params: { name: "sushiswap" } },
      { params: { name: "pancakeswapv1" } },
      { params: { name: "uniswapv2" } },
      { params: { name: "bitcoin" } },
      { params: { name: "huobi" } },
      { params: { name: "honeyswap" } },
      { params: { name: "bitmex" } },
      { params: { name: "ftx" } },
      { params: { name: "bitfinex" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}
export async function getStaticProps(context: any) {
  return {
    // Passed to the page component as props
    props: { name: {} },
  };
}

const Connector = ({ name }: { name: string }) => {
  const [filteredData, setFilteredData] = useState(emptyData);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [data, setData] = useState(emptyVal);
  const [datastreams, setDatastreams] = useState([] as string[]);
  const router = useRouter();

  const [isLoading, setLoading] = useState(false);

  // var filteredData = Data.connectors;
  useEffect(() => {
    if (router.isReady) {
      // Code using query
      // this will set the state before component is mounted
      setFilteredData(
        (Data.connectors as any).filter((connector: any) =>
          connector.name.includes(router.query.name as string)
        )
      );
      setLoading(true);
      fetch("https://api.nakji.network/v1/metadata/streams")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        
        });
      var datastreamsAvailable = [] as string[];
      data.map((item: { name: string; persistedValue: boolean }) => {
        datastreamsAvailable.push(item.name);
      });
      // console.log(datastreamsAvailable);
      setDatastreams(datastreamsAvailable);

      // console.log(filteredData[0]);
    }
  }, [router.isReady]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

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
                  availableDatastreams={datastreams}
                ></AboutPanel>
              </Tab.Panel>
              <Tab.Panel>
                <PlaygroundPanel
                  datastreams={filteredData[0].datastreams}
                  availableDatastreams={datastreams}
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

export default Connector;
