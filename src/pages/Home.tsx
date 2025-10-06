// import Clients from "../components/clients";
import Hero from "../components/Hero";
import Network from "../components/Network";
import News from "../components/News";
import Services from "../components/Services";
import Team from "../components/Team";
// import News from "../components/News";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <Team />
        <Network />
        <Services />
        <News />
      </div>
    </>
  );
}
