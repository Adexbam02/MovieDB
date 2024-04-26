import Image from "next/image";
import Link from "next/link";
// import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  return (
    <div className="group drop-shadow-md relative bg-red-400 w-[15rem] h-[18rem] rounded-md">
      <Link href={`/movie/${result.id}`}>
        <div className="">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              result.backdrop_path || result.poster_path
            }`}
            // width={500}
            // height={500}
            // layout="fill"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover", // cover, contain, none
            }}
            className=" object-fit:cover group-hover:opacity-75 rounded-t-md transition-opacity duration-300"
          ></Image>
        </div>

        <div className="absolute rounded-b-md inset-x-0 bottom-0 bg-white p-2 flex items-center justify-center flex-col">
          <span className="flex gap-4">
            <p className="font-bold">
              {result.title?.slice(0, 15) || result.name?.slice(0, 15)}
            </p>
            <p className="bg-blue-300 text-white py-[0.1px] px-[3px] rounded-[2px] font-semibold">
              {result.vote_average?.toFixed(1)}
            </p>
          </span>
          <p className="text-blue-300 font-semibold">
            {result.media_type?.toUpperCase()}
          </p>
        </div>
      </Link>
    </div>
  );
}
