import Data from "../contents/content.json";
import Link from "next/link";

function GridView({ data = Data["connectors"] }) {
  return (
    <div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-8  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
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
                className="col-span-1 flex flex-col rounded-3xl bg-white text-center shadow-lg"
              >
                <div className="flex flex-1 flex-col p-8">
                  {/* Icon */}

                  <div className="flex place-content-center	">
                    
                    <div className=" flex bg-gray-800 h-36 w-36 rounded-lg ">
                      {/* <svg className="absolute h-36 w-36" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 800" opacity="0.84" width="800" height="800"><g strokeWidth="0.5" stroke="hsla(37, 100%, 100%, 1)" fill="none"><rect width="100" height="100" x="0" y="0"></rect><rect width="100" height="100" x="100" y="0"></rect><rect width="100" height="100" x="200" y="0"></rect><rect width="100" height="100" x="300" y="0"></rect><rect width="100" height="100" x="400" y="0"></rect><rect width="100" height="100" x="500" y="0"></rect><rect width="100" height="100" x="600" y="0"></rect><rect width="100" height="100" x="700" y="0"></rect><rect width="100" height="100" x="800" y="0"></rect><rect width="100" height="100" x="0" y="100"></rect><rect width="100" height="100" x="100" y="100"></rect><rect width="100" height="100" x="200" y="100"></rect><rect width="100" height="100" x="300" y="100"></rect><rect width="100" height="100" x="400" y="100"></rect><rect width="100" height="100" x="500" y="100"></rect><rect width="100" height="100" x="600" y="100"></rect><rect width="100" height="100" x="700" y="100"></rect><rect width="100" height="100" x="800" y="100"></rect><rect width="100" height="100" x="0" y="200"></rect><rect width="100" height="100" x="100" y="200"></rect><rect width="100" height="100" x="200" y="200"></rect><rect width="100" height="100" x="300" y="200"></rect><rect width="100" height="100" x="400" y="200"></rect><rect width="100" height="100" x="500" y="200"></rect><rect width="100" height="100" x="600" y="200"></rect><rect width="100" height="100" x="700" y="200"></rect><rect width="100" height="100" x="800" y="200"></rect><rect width="100" height="100" x="0" y="300"></rect><rect width="100" height="100" x="100" y="300"></rect><rect width="100" height="100" x="200" y="300"></rect><rect width="100" height="100" x="300" y="300"></rect><rect width="100" height="100" x="400" y="300"></rect><rect width="100" height="100" x="500" y="300"></rect><rect width="100" height="100" x="600" y="300"></rect><rect width="100" height="100" x="700" y="300"></rect><rect width="100" height="100" x="800" y="300"></rect><rect width="100" height="100" x="0" y="400"></rect><rect width="100" height="100" x="100" y="400"></rect><rect width="100" height="100" x="200" y="400"></rect><rect width="100" height="100" x="300" y="400"></rect><rect width="100" height="100" x="400" y="400"></rect><rect width="100" height="100" x="500" y="400"></rect><rect width="100" height="100" x="600" y="400"></rect><rect width="100" height="100" x="700" y="400"></rect><rect width="100" height="100" x="800" y="400"></rect><rect width="100" height="100" x="0" y="500"></rect><rect width="100" height="100" x="100" y="500"></rect><rect width="100" height="100" x="200" y="500"></rect><rect width="100" height="100" x="300" y="500"></rect><rect width="100" height="100" x="400" y="500"></rect><rect width="100" height="100" x="500" y="500"></rect><rect width="100" height="100" x="600" y="500"></rect><rect width="100" height="100" x="700" y="500"></rect><rect width="100" height="100" x="800" y="500"></rect><rect width="100" height="100" x="0" y="600"></rect><rect width="100" height="100" x="100" y="600"></rect><rect width="100" height="100" x="200" y="600"></rect><rect width="100" height="100" x="300" y="600"></rect><rect width="100" height="100" x="400" y="600"></rect><rect width="100" height="100" x="500" y="600"></rect><rect width="100" height="100" x="600" y="600"></rect><rect width="100" height="100" x="700" y="600"></rect><rect width="100" height="100" x="800" y="600"></rect><rect width="100" height="100" x="0" y="700"></rect><rect width="100" height="100" x="100" y="700"></rect><rect width="100" height="100" x="200" y="700"></rect><rect width="100" height="100" x="300" y="700"></rect><rect width="100" height="100" x="400" y="700"></rect><rect width="100" height="100" x="500" y="700"></rect><rect width="100" height="100" x="600" y="700"></rect><rect width="100" height="100" x="700" y="700"></rect><rect width="100" height="100" x="800" y="700"></rect><rect width="100" height="100" x="0" y="800"></rect><rect width="100" height="100" x="100" y="800"></rect><rect width="100" height="100" x="200" y="800"></rect><rect width="100" height="100" x="300" y="800"></rect><rect width="100" height="100" x="400" y="800"></rect><rect width="100" height="100" x="500" y="800"></rect><rect width="100" height="100" x="600" y="800"></rect><rect width="100" height="100" x="700" y="800"></rect><rect width="100" height="100" x="800" y="800"></rect></g></svg> */}
                      <img
                        className="p-3 mx-auto h-36 w-36 "
                        src={connector.icon}
                        alt={connector.name}
                      />
                    </div>
                  </div>

                  {/* Title Box */}
                  <div className="flex items-center justify-center">
                    {/* Title */}
                    <h3 className="mt-6 text-3xl font-bold text-gray-900 ">
                      {connector.title}
                    </h3>
                    {/* Check Mark Icon */}
                    <span className="ml-2 mt-6">
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
                  </div>
                  <dl className="mt-1 flex flex-grow flex-col justify-between">
                    {/* Subtitling */}
                    <dt className="sr-only">Subtitle</dt>
                    <dd className="text-m text-gray-800">
                      {connector.subtitle}
                    </dd>

                    {/* Tags */}
                    <dt className="sr-only">Tags</dt>
                    <dd className="mt-3">
                      {connector.tags.map((tag: string) => (
                        <span key={tag} className="rounded-full inline-block bg-orange-primary px-2 mx-1 py-1 text-xs font-medium text-white">
                          {tag}
                        </span>
                      ))}
                    </dd>
                  </dl>
                </div>
              </li>
            </Link>
          )
        )}
      </ul>
    </div>
  );
}

export default GridView;
