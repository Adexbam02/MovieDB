import Image from "next/image";
import Link from "next/link";

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?&api_key=${process.env.API_KEY}`
  );
  const movieResponse = await res.json();

  // console.log(movieResponse);
  return (
    <div className="w-[78%] h-fit bg-gray-400/[.06]  drop-shadow-xl mt-4 p-5 rounded-xl flex items-cente justify-between gap-4">
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          movieResponse.backdrop_path || movieResponse.poster_path
        }`}
        width={400}
        height={400}
        className="rounded-sm"
        style={{ maxWidth: "100%", height: "100%" }}
      ></Image>

      <div className="p-2">
        <span className="flex flex-col mb-4">
          <Link
            href={movieResponse.homepage}
            target="_blank"
            className="text-[2.3rem] font-bold leading-10 hover:text-gray-700 transition"
          >
            {movieResponse.title || movieResponse.name}
          </Link>

          {movieResponse.genres.length >= 0 ? (
            <p className="font-medium text-[1.1rem] text-blue-400">
              {movieResponse.genres.map((genre) => genre.name).join(", ")}
            </p>
          ) : (
            <p>{movieResponse.title || movieResponse.name}</p>
          )}
        </span>

        <p className="text-white font-medium text-lg mb-3 bg-blue-300 rounded-md p-2">
          {movieResponse.overview}
        </p>

        <div className="info flex gap-2">
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movieResponse.release_date || movieResponse.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movieResponse.vote_count}
          </p>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
