import { getHeroByName } from "@/api/getRequests/getHeroByName";

interface HeroParams {
  params: {
    id: string;
  };
}

export default async function HeroDetails({ params }: HeroParams) {
  const heroDetails = await getHeroByName(params.id);

  console.log(heroDetails)
  return <div>{heroDetails.name}</div>;
}
