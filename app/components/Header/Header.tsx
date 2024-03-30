import React from "react";
import Image from "next/image";
import user from "../../../public/user_pic.png";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <div className="w-full bg-black p-3 rounded flex justify-around items-center">
      <p className="text-white text-2xl font-bold uppercase">films</p>

      <ul className="text-gray-400 flex gap-6">
        <li>Home</li>
        <li>Movies</li>
        <li>Series</li>
      </ul>
      <Image
        src={user}
        width={100}
        height={100}
        className="rounded-3xl w-9 h-9 hover:border-white"
        placeholder="blur"
        alt="profile_pic"
      />
    </div>
  );
}
