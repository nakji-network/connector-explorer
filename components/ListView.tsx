import Data from "../contents/content.json";
import Link from "next/link";
("use client");

function ListView({ data = Data["connectors"] }) {
  return (
    <div>
      <ul role="list" className="py-4">
        {data.map(
          (connector: any) => (
            <Link href={`/connector/${connector.name}`} className="">
              <li
                key={connector.name}
                className=" rounded-3xl bg-white text-center mb-8 shadow-lg"
              >
                <div className="px-4 py-4">
                  {/* Title Section */}
                  <div className=" relative mx-auto p-3">
                    {/* Top */}
                    <div className="flex flex-shrink-0">
                      {/* Icon */}
                      <div className="rounded-xl mr-4 flex-shrink-0">
                        <img
                          className="bg-gray-800 p-3 mx-auto h-32 w-32 md:h-40 md:w-40 flex-shrink-0 rounded-xl"
                          src={connector.icon}
                          alt={connector.name}
                        />

                        {/* Tags */}
                        <div>
                          <dl className="flex">
                            <dt className="sr-only">Tags</dt>
                            <dd className="mt-2">
                              {connector.tags.map((tag: string) => (
                                <span
                                  key={tag}
                                  className="rounded-full bg-orange-primary px-2 mx-0.5 py-1 text-[10px] sm:text-xs font-medium text-white"
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
                        <div className="flex">
                          <h2 className="text-left text-3xl sm:text-4xl text-gray-900 font-bold truncate">
                            {connector.title}
                          </h2>
                          {/* Check Mark Icon */}
                          {/* commented out since all the connectors are currently built by Nakji team and there's no permissionless 3rd party connectors yet
                            <span className="ml-2 pt-2">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 12C0 5.39062 5.34375 0 12 0C18.6094 0 24 5.39062 24 12C24 18.6562 18.6094 24 12 24C5.34375 24 0 18.6562 0 12ZM17.3906 9.9375C17.9062 9.42188 17.9062 8.625 17.3906 8.10938C16.875 7.59375 16.0781 7.59375 15.5625 8.10938L10.5 13.1719L8.39062 11.1094C7.875 10.5938 7.07812 10.5938 6.5625 11.1094C6.04688 11.625 6.04688 12.4219 6.5625 12.9375L9.5625 15.9375C10.0781 16.4531 10.875 16.4531 11.3906 15.9375L17.3906 9.9375Z"
                                  fill="#FFB245"
                                />
                              </svg>
                            </span>
                          */}
                        </div>
                        <h3 className="text-left pt-0.25 sm:pt-0.5 text-xl sm:text-2xl text-orange-primary font-semibold">
                          {connector.author}
                        </h3>

                        <p className="text-left leading-4 sm:leading-4 md:leading-5 lg:leading-6 pt-2 sm:pt-3 text-base sm:text-lg overflow-ellipsis">
                          {connector.description}
                        </p>
                        <p className="absolute bottom-2 right-2 text-right object-right-bottom pt-2 sm:pt-3 text-md sm:text-lg font-bold">
                          nakji.{connector.name}.*
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
