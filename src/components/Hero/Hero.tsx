import { IHero } from "@/types/IHero";

export const Hero = ({
  hero
}: {
  hero: IHero
}) => {
  return (
    <div>
      {hero.name}
    </div>
  );
};