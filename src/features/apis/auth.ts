import baseApi from '.';

interface CheckSuperadmin {
  superadminExists: boolean;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    checkSuperadminExists: build.query<CheckSuperadmin, void>({
      query: () => '/superadmin/exists',
    }),
  }),
});

export const { useCheckSuperadminExistsQuery } = authApi;
