import { useFetch } from "@/hooks/useFetch";
import { act, renderHook, waitFor } from "@testing-library/react";

describe('useFetch hook', () => {
  it('fetches data successfully', async () => {
    const mockData = { example: 'data' };
    const apiCall = jest.fn().mockResolvedValue(mockData);

    const { result } = renderHook(() =>
      useFetch(apiCall, 'Error message')
    );

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBe('');

    await act(async () => {
      await waitFor(() => !result.current.isLoading);
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBe('');
  });

  it('handles errors correctly', async () => {
    const errorMessage = 'Failed to fetch data';
    const apiCall = jest.fn().mockRejectedValue(new Error(errorMessage));

    const { result } = renderHook(() =>
      useFetch(apiCall, errorMessage)
    );

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBe('');

    await act(async () => {
      await waitFor(() => !result.current.isLoading);
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBe(errorMessage);
  });
});
