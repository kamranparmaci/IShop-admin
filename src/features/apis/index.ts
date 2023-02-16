import { RootState } from './../store';
import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_SOME_KEY,
  prepareHeaders(headers, { getState }) {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('Authentication', `Bearer ${token}`);
    }
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 });

const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['auth'],
  endpoints: () => ({}),
});

export default baseApi;
