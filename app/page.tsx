import FeaturedScreen from "./components/FeaturedScreen/FeaturedScreen";
import Header from "./components/Header/Header";
import NewRelease from "./components/NewRelease/NewRelease";
import { NewReleaseDetails } from "../public/NewReleases";
import { KidsMovies } from "../public/Kids";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <FeaturedScreen />
      <NewRelease
        NewReleaseDetails={NewReleaseDetails}
        heading="New Releases"
      />
      <NewRelease NewReleaseDetails={KidsMovies} heading="Kids Releases" />
    </main>
  );
}
