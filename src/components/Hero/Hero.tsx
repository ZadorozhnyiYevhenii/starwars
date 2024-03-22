import { IHero } from "@/types/IHero";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export const Hero = ({ hero }: { hero: IHero }) => {
  const heroId = hero.url.split('/').filter(id => +id);

  return (
    <Card align="center" boxShadow="md" borderRadius="md" p={4}>
      <CardHeader>
        <Heading size="md">{hero.name}</Heading>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <Text fontSize="lg">
              <strong className="text-blue-500">Height:</strong> {hero.height}
            </Text>
            <Text fontSize="lg">
              <strong className="text-blue-500">Mass:</strong> {hero.mass}
            </Text>
            <Text fontSize="lg">
              <strong className="text-blue-500">Gender:</strong> {hero.gender}
            </Text>
          </div>
          <div>
            <Text fontSize="lg">
              <strong className="text-blue-500">Hair color:</strong>{" "}
              {hero.hair_color}
            </Text>
            <Text fontSize="lg">
              <strong className="text-blue-500">Eye color:</strong>{" "}
              {hero.eye_color}
            </Text>
            <Text fontSize="lg">
              <strong className="text-blue-500">Skin color:</strong>{" "}
              {hero.skin_color}
            </Text>
          </div>
        </div>
      </CardBody>
      <CardFooter>
        <Button colorScheme="blue" size="sm">
          <Link href={`/${heroId}`}>View More Info</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
