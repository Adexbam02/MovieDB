"use client";

import Image from "next/image";
import Search from "../../public/magnifier.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);

    setTimeout(() => {
      setSearch(""); // Clear search value
    }, 5000); // 5 seconds
  };
  return (
    <form className="relative bg-red-500 p-00" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        className="py-1 px-2 flx-1 rounded-sm outline-none  placeholder:grayscale"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="disabled:text-gray-400 bg-transparent"
        disabled={search === ""}
      >
        {/* <Image
          src={Search}
          width={15}
          height={15}
          className="absolute top-[50%] right-[10%] cursor-pointer text-red-400"
        ></Image> */}
      </button>
    </form>
  );
}
