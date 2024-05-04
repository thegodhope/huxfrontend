import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Container from "./reusable-components/container";

export default function Home() {
  return (
    <main>
      <Container>
        <Navbar />
        <HeroSection />
      </Container>
    </main>
  );
}
