import Link from "next/link";
import NavbarItem from "./NavbarItem";
import SearchBox from "./SearchBox";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-3 w-[80%] h-fit mt-10 p-3 bg-blue-300 rounded-lg">
      <div className="flex item-centre gap-3 w-fit ">
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
      </div>
      <Link href={'/'} className="text-white font-bold text-[1.2rem]">MovieDB</Link>
      <SearchBox />
    </div>
  );
}
