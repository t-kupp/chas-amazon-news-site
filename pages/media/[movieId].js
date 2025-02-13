export async function getStaticPaths() {
  const url = `https://api.themoviedb.org/3/movie/popular?language=en-US`;
  const APIKey = process.env.NEXT_PUBLIC_API_KEY;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${APIKey}`,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();

  if (!data.results) {
    console.error('No results found in API response:', data);
    return { paths: [], fallback: false };
  }

  const paths = data.results.map((movie) => ({
    params: { movieId: movie.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const url = `https://api.themoviedb.org/3/movie/${params.movieId}?language=en-US}`;
  const APIKey = process.env.NEXT_PUBLIC_API_KEY;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${APIKey}`,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();

  return {
    props: { data },
    revalidate: 60,
  };
}

export default function Media({ data }) {
  console.log('data:', data); // Log data in the component

  return (
    <div>
      {data ? (
        <>
          <h2>{data.title}</h2>
          <p>Overview: {data.overview}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
