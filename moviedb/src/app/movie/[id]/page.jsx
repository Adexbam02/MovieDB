"use client";
const imh = "/moviedb/public/next.svg";
import Image from "next/image";

export default async function MoviePage({ params }) {
  const movieId = params.id;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );

  const movieResponse = await response.json();

  // console.log(movieResponse);
  return (
    <div
      className="movie-page bg-gray-400/[.06]  drop-shadow-md mt-4 p-5 rounded-xl grid grid-cols-2 md:grid-cols-1 gap-4"
    //   style={{
    //     // use the src property of the image object
    //     backgroundImage: `url(${`https://image.tmdb.org/t/p/original/${
    //       movieResponse.backdrop_path || movieResponse.poster_path
    //     }`})`,
    //     // other styles
    //     backgroundPosition: "center",
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //     backgroundColor: "rgba(0, 0, 0, 0.3)",
    //   }}
    >
      <div className="h-[89%] w-[30%] bg-red-300">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movieResponse.backdrop_path || movieResponse.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%" }}
        ></Image>
      </div>
      <div>b</div>
    </div>
  );
}
