import { FacilitiesList } from "../components/FacilitiesList";

// ホームページ
export default function Home() {
  return (
    <div className="bg-white text-black p-4">
      <main className="md:mx-60 my-12">
        <FacilitiesList />
      </main>
    </div>
  );
}
