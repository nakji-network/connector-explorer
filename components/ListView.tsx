import Data from "../contents/content.json";
import Link from "next/link";

function ListView({ data = Data["connectors"] }) {
  return (
    <div>
      <ul
        role="list"
        className="space-y-10"
      >
        {data.map(
          (connector: {
            name: string;
            icon: string;
            title: string;
            subtitle: string;
            website: string;
            tags: string[];
          }) => (
            <Link href={`/connector/${connector.name}`}>
              <li
                key={connector.name}
                className=" rounded-3xl bg-white text-center shadow-lg"
              > 
                <div className="flex flex-1 flex-col p-8 px-6 py-4">
        {/* Title Setion */}
        <div className="relative mx-auto">
          {/* Top */}
          <div className="flex">
            {/* Icon */}
            <div className=" rounded-xl mr-4 flex-shrink-0">
              <img
                className="bg-gray-800 p-6 mx-auto h-40 w-40 sm:h-48 sm:w-48 md:h-50 md:w-50 lg:h-52 lg:w-52 flex-shrink-0 rounded-xl"
                src={connector.icon}
                alt={connector.name}
              />

              {/* Tags */}
              <div>
                <dl className="flex flex-grow flex-col justify-between">
                  <dt className="sr-only">Tags</dt>
                  <dd className="mt-2">
                    {connector.tags.map((tag: string) => (
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
                {connector.title}
              </h2>
              <h3 className="pt-0.25 sm:pt-0.5 text-2xl sm:text-3xl text-orange-primary font-semibold">
                {connector.author}
              </h3>
              <h4 className="pt-0.25 sm:pt-0.5 text-sm sm:text-lg text-gray-500">
                Published{" "}
                <strong className="text-gray-800">
                  {connector.version}
                </strong>{" "}
                on
                <strong className="text-gray-800"> August 11, 2022 </strong>
              </h4>
              <p className="leading-4 sm:leading-4 md:leading-5 lg:leading-6 pt-2 sm:pt-3 text-base sm:text-lg">
                {connector.description}
              </p>
            </div>
          </div>
        </div>

                </div>
              </li>
            </Link>
          )
        )}
      </ul>
    </div>
  );
}

export default ListView;
