import React from "react";
import Image from "next/image";
import user from "../../../public/user_pic.png";

export default function Header() {
  return (
    <div className="w-full bg-black p-3 rounded flex justify-around items-center">
      <p className="text-white text-2xl font-bold uppercase hover:text-red-700">
        films
      </p>

      <form className="hidden sm:block">
        <input
          type="text"
          placeholder="Search Movies..."
          className="p-1 rounded-lg focus:outline-none focus:border-rose-500 border-2 border-transparent"
        ></input>
        <button className="text-white uppercase bg-red-700 ml-2 p-1 rounded-lg">
          Search
        </button>
      </form>

      <ul className="text-gray-400 flex gap-6">
        <li>Home</li>
        <li>Movies</li>
        <li>Series</li>
      </ul>
      <Image
        src={user}
        width={100}
        height={100}
        className="rounded-3xl w-9 h-9 hover:opacity-50"
        placeholder="blur"
        alt="profile_pic"
      />
    </div>
  );
}
