import { instance } from "@/api/core";
import { getHeros } from "@/api/getRequests/getHeros";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(instance);

const mockResponse =  [
    { name: 'Yoda' },
    { name: 'Pirat' }
  ];

mock.onGet('/people').reply(200, mockResponse);

describe('getHeros response', () => {
  it('getHeros returns heros', async () => {
    const heros = await getHeros();
    expect(heros).toEqual(mockResponse);
  });

  it('getHeros return error if something went wrong', async () => {
    try {
      await getHeros();
      fail();
    } catch (error) {
      expect(error).toBeDefined();
    }
  })
})