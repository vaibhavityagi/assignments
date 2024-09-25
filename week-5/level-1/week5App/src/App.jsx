import { Card } from "./components/Card";

function App() {
  return (
    <>
      <Card
        name={"Vaibhavi Tyagi"}
        description={"Btech Cse batch of 2026"}
        socials={["twitter", "instagram", "linkedIn"]}
        interests={"Geopolitics, film-making, music"}
      />
    </>
  );
}

export default App;
