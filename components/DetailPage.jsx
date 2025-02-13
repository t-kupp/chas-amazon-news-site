export default function DetailPage({ media, type }) {
  return (
    <div>
      <h2>{type === 'movie' ? media.title : media.name}</h2>
      <p>Overview: {media.overview}</p>
    </div>
  );
}
