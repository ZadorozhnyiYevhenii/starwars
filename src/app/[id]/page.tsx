import { NodeVizualize } from "@/components/NodeVizualize/NodeVizualize";

interface HeroParams {
  params: {
    id: string;
  };
}

export default function HeroDetails({ params }: HeroParams) {
  
  return (
    <NodeVizualize id={params.id} />
  );
}
