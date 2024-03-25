import { instance } from "@/api/core";
import { getSpaceshipByIds } from "@/api/getRequests/getSpaceshipById";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(instance);

const mockStarships = [
  { id: 20, name: 'Starship 1' },
  { id: 30, name: 'Starship 2' },
];

mockStarships.forEach(starship => {
  mock.onGet(`/starships/${starship.id}`).reply(200, starship);
});

describe('getStarshipById response', () => {
  it('getSpaceshipByIds returns empty array if no ids provided', async () => {
    const starships = await getSpaceshipByIds([]);
  
    expect(starships).toEqual([]);
  });
  
  it('getSpaceshipByIds throws error if something goes wrong', async () => {
    mock.onGet('/starships/1').reply(500);
  
    try {
      await getSpaceshipByIds([20, 30]);
      fail();
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
})