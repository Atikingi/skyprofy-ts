import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store/store';

export const musicApi = createApi({
  reducerPath: 'musicApi',
  tagTypes: ['Tracks'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://51.250.95.23:8000',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: (page: string) => ({
        url: `/catalog/track/all/?page=${page}`
      })
      // providesTags: ['Tracks']
    }),
    getTrackById: builder.query({
      query: (id: number) => ({
        url: `/catalog/track/${id}`
      })
    }),
    getPlaylists: builder.query({
      query: () => '/catalog/selection/'
    }),
    getPlaylistById: builder.query({
      query: (id: number) => `/catalog/selection/${id}`
    }),
    userSignup: builder.mutation({
      query: ({ ...payload }) => ({
        url: '/user/signup/',
        method: 'POST',
        body: payload
      })
    }),
    userLogin: builder.mutation({
      query: ({ ...payload }) => ({
        url: '/user/login/',
        method: 'POST',
        body: payload
      })
    }),
    getToken: builder.mutation({
      query: ({ ...payload }) => ({
        url: '/user/token/',
        method: 'POST',
        body: payload
      })
    }),
    refreshToken: builder.mutation({
      query: ({ ...payload }) => ({
        url: '/user/token/refresh/',
        method: 'POST',
        body: payload
      })
    }),
    addFavoriteTrack: builder.mutation({
      query: (payload) => ({
        url: `/catalog/track/${payload}/favorite/`,
        method: 'POST'
      })
      // invalidatesTags: ['Tracks']
    }),
    deleteFavoriteTrack: builder.mutation({
      query: (payload) => ({
        url: `/catalog/track/${payload}/favorite/`,
        method: 'DELETE'
      })
    })
  })
});

export const {
  useGetAllTracksQuery,
  useGetTrackByIdQuery,
  useGetPlaylistByIdQuery,
  useGetPlaylistsQuery,
  useUserSignupMutation,
  useUserLoginMutation,
  useGetTokenMutation,
  useRefreshTokenMutation,
  useAddFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation
}: any = musicApi;
