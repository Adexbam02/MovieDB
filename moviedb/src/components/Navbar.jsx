import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex items-center justify-center px-3 w-[80%]">
      <div className="flex item-centre gap-3   bg-blue-300 mt-10 p-3 w-full rounded-lg">
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopR" />
        <NavbarItem title="New Arrival" param="fetchNewA" />
      </div>
    </div>
  );
}
