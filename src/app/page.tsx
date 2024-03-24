import { HerosList } from "@/components/HerosList/HerosList";
import { UIHeading } from "@/components/UI/UIHeading/UIHeading";

export default function Home() {
  return (
    <main>
      <UIHeading
        type="h1"
        size="lg"
        classname="text-center mt-10"
      >
        All Starwars Heros
      </UIHeading>

      <HerosList />
    </main>
  );
}
