import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="py-24">
        <div className="text-center">
          <h3 className=" text-[10rem] font-semibold text-black">404</h3>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
            Oops! Page can’t be found.
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-600">
            We are really sorry but the page you requested is missing Or back to
            Go to homepage
          </p>
          <div className="mt-4 flex items-center justify-center gap-x-3">
            <Link
              href="/"
              className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <ArrowLeft size={16} className="mr-2" />
              Go back
            </Link>
            <Link
              href="/contact-us"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
