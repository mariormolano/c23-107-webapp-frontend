import { ProfileData } from '../core/interface/userInterface';

interface FetchResult {
  data: ProfileData | null;
  loading: boolean;
  error: string | null;
}

export const fetchData = async (urlfetch: string): Promise<FetchResult> => {
  const result: FetchResult = { data: null, loading: true, error: null };

  try {
    const response = await fetch(urlfetch);

    if (!response.ok) throw new Error('Error al obtener los datos');

    const jsonData = await response.json();

    result.data = jsonData;
    result.loading = false;
  } catch (error: unknown) {
    if (error instanceof Error) {
      result.error = error.message;
    } else {
      result.error = 'Error desconocido';
    }
    result.loading = false;
  }

  return result;
};
