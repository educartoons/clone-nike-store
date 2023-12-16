import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="mb-4">
      <div className="bg-zinc-100">
        <div className="container mx-auto">
          <div className="flex py-2 justify-end">
            <ul className="">
              <li className="text-xs font-medium inline-block ml-3">
                Find Store <span className="ml-2">|</span>
              </li>
              <li className="text-xs font-medium inline-block ml-3">
                Help <span className="ml-2">|</span>
              </li>
              <li className="text-xs font-medium inline-block ml-3">
                Join Us <span className="ml-2">|</span>
              </li>
              <li className="text-xs font-medium inline-block ml-3">Sign In</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div>
            <Link to="/">
              <svg
                aria-hidden="true"
                className="pre-logo-svg"
                focusable="false"
                viewBox="0 0 24 24"
                role="img"
                width="80px"
                height="80px"
                fill="none"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <div>
            <nav className="mt-5">
              <ul className="flex gap-4">
                <li className="font-medium">
                  <Link to="/products">New & Featured</Link>
                </li>
                <li className="font-medium">Men</li>
                <li className="font-medium">Women</li>
                <li className="font-medium">Kids</li>
                <li className="font-medium">Accesories</li>
                <li className="font-medium">Sale</li>
              </ul>
            </nav>
          </div>
          <div className="pt-3">
            <div className="inline-block relative">
              <svg
                aria-hidden="true"
                className="absolute left-2 top-2"
                focusable="false"
                viewBox="0 0 24 24"
                role="img"
                width="24px"
                height="24px"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"
                ></path>
              </svg>
              <input
                className="bg-gray-100 w-52 block pl-10 pr-2 py-2 rounded-3xl"
                type="text"
                placeholder="Search"
              />
            </div>
            <ul className="inline-block ml-4 align-middle">
              <li className="inline-block ml-2">
                <svg
                  aria-hidden="true"
                  className="pre-nav-design-icon"
                  focusable="false"
                  viewBox="0 0 24 24"
                  role="img"
                  width="24px"
                  height="24px"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="1.5"
                    d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
                  ></path>
                </svg>
              </li>
              <li className="inline-block ml-4">
                <svg
                  aria-hidden="true"
                  className="pre-nav-design-icon"
                  focusable="false"
                  viewBox="0 0 24 24"
                  role="img"
                  width="24px"
                  height="24px"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="1.5"
                    d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"
                  ></path>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
