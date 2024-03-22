import { HerosList } from "@/components/HerosList/HerosList";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center mt-14">All Heros</h1>

      <HerosList />
    </main>
  );
}
