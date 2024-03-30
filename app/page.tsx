import FeaturedScreen from "./components/FeaturedScreen/FeaturedScreen";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />

      <FeaturedScreen />
    </main>
  );
}
