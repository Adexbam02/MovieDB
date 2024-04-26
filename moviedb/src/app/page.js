import Results from '@/components/Results';

require('dotenv').config();
const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';
  const response = await fetch(
    `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`
  );

  const data = await response.json();
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const results = data.results; // Assuming data structure with results in 'results' property
//  console.log(results)
  // Integrate `results` into your UI here (using JSX)
  return (
    <div className="flex items-center justify-center max-w-[80%]">
      {/* Display movie data from `results` here */}
      <Results results={results} />
    </div>
  );
}
