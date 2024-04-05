"use client";
import React from "react";
import {
  Aperture,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Menu,
  MoveRight,
  Star,
  X,
} from "lucide-react";
import Link from "next/link";

const serviceData = [
  {
    id: "2045",
    iconName: <Aperture size={40} />,
    title: "Secured Payments",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    bgColor: "bg-red-100",
  },
  {
    id: "2046",
    iconName: <Aperture size={40} />,
    title: "Secured Payments",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    bgColor: "bg-yellow-100",
  },
  {
    id: "2047",
    iconName: <Aperture size={40} />,
    title: "Secured Payments",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    bgColor: "bg-lime-100",
  },
  {
    id: "2048",
    iconName: <Aperture size={40} />,
    title: "Secured Payments",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    bgColor: "bg-purple-100",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-bl bg-white/35  from-white/20 to-white/90"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-3xl ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-6xl font-extrabold sm:text-6xl">
              Get full access to Platform
              <span className="block font-extrabold text-rose-700">Anya. </span>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8">
              <button
                type="button"
                className="inline-flex bg-white mx-2 py-2  px-5  text-black font-semibold rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
              >
                Get started Today
              </button>
              <a
                className="inline-flex bg-rose-700 mx-2 py-2  px-5  text-white font-semibold rounded-full shadow-md hover:bg-rose-500 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
                href="/selectquiz"
              >
                Quiz Started
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <div className="mx-auto my-32 max-w-7xl px-2 lg:px-8">
        <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {serviceData.map((item) => (
            <div
              className={`p-6 shadow-md rounded-lg hover:-translate-y-3 transition-all duration-1000 ${item.bgColor}`}
            >
              <div className="text-left">
                <h1 className="text-lg font-semibold text-black">
                  {item.title}
                </h1>
                <p className="mt-2 text-sm text-gray-900">{item.description}</p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-gray-900">
                  View Profile &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
