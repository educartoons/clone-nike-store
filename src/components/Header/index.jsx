import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
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
                width="100px"
                height="100px"
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
            <nav className="mt-9">
              <ul className="flex gap-4">
                <li>
                  <Link to="/products">New & Featured</Link>
                </li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Accesories</li>
                <li>Sale</li>
              </ul>
            </nav>
          </div>
          <div className="pt-8">
            <input
              className="bg-gray-100 w-52 block px-4 py-2 rounded-3xl"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
