import { FacilitiesList } from "../components/FacilitiesList";
import Header from "../components/Header";
import HeroArea from "../components/organisms/HeroArea";
import MapArea from "../components/organisms/MapArea";

export default function Home() {
  return (
    <div className="h-full min-h-screen">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-12 sm:p-10 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start px-6 py-10 sm:px-12 sm:py-16">
          <Header />
          <div className="space-y-10 sm:space-y-16 px-4 sm:px-8 w-full max-w-5xl">
            <HeroArea />
            <MapArea />
            <FacilitiesList />
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
      </div>
    </div>
  );
}
