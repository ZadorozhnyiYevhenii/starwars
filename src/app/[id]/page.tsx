import { HeroConnections } from "@/components/HeroConnections/HeroConnections";

interface HeroParams {
  params: {
    id: string;
  };
}

export default function HeroDetails({ params }: HeroParams) {
  return <HeroConnections id={params.id} />;
}
