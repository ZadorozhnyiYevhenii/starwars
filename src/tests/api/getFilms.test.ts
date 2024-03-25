import { instance } from '@/api/core';
import { getFilms } from '@/api/getRequests/getFilms';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(instance);

const mockResponse = {
  results: [
    { title: 'Film 1' },
    { title: 'Film 2' },
  ]
};

mock.onGet('/films').reply(200, mockResponse);

describe('getFilms response', () => {
  it('getFilms returns films', async () => {
    const films = await getFilms();
    expect(films).toEqual(mockResponse.results);
  });

  it('getFilms returns error if something went wrong', async () => {
    try {
      await getFilms();
      fail();
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
})
