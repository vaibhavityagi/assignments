export function Card({ name, description, socials, interests }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <ul>
        {socials.map((social, idx) => {
          return <li key={idx}>{social}</li>;
        })}
      </ul>
      <p>{interests}</p>
    </div>
  );
}
