import { groupHerosWithStarship } from "@/helpers/groupHerosWithStarship";
import { IHero } from "@/types/IHero";

const films = [
  { title: 'Film 1', characters: [1, 2], starships: [1, 2] },
  { title: 'Film 2', characters: [1, 3], starships: [3, 4] },
  { title: 'Film 3', characters: [2, 3], starships: [1, 4] },
];

const hero = { starships: [1, 2] };

describe('groupHerosWithStarship', () => {
  it('correctly groups hero with starships by film', () => {
    const result = groupHerosWithStarship(films, hero as IHero, '1');

    expect(result.heroWithStarship).toHaveLength(1);
    expect(result.heroWithStarship).toContainEqual({ title: 'Film 1', starships: [1, 2] });
  });

  it('returns empty array if no matching starships found', () => {
    const result = groupHerosWithStarship(films, hero as IHero, '10');

    expect(result.heroWithStarship).toEqual([]);
  });
});
