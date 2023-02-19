import baseApi from '.';

interface CheckSuperadmin {
  superadminExists: boolean;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    checkSuperadminExists: build.query<CheckSuperadmin, void>({
      query: () => '/superadmin/exists',
    }),
    registerSuperadmin: build.mutation({
      query: (body) => ({
        url: '/superadmin/register',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useCheckSuperadminExistsQuery, useRegisterSuperadminMutation } =
  authApi;
