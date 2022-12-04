import ApiService from './api.service';
import type {
  SearchFromItunesPayload, SearchFromItunesResponse
} from '../types/itunes.types';

export const searchFromItunes = async (payload: SearchFromItunesPayload): Promise<SearchFromItunesResponse> => {
  const api: ApiService = new ApiService();
  const { data } = await api.get('search', payload);
  return data;
}
