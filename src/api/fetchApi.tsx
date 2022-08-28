import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/dist/query/react";
import { IContact } from "./fetchDataTypes";

export interface IBuildQueryArg<T> {
  query?: string;
  body?: T;
  params?: Object;
}

export interface IFetchErrData {
  status: string;
  error: string;
}

export interface IFetchResult<T> {
  data: T;
  currentData: T; // Последний возвращенный результат для текущего аргумента ловушки, если он присутствует.
  isError: boolean;
  error: FetchBaseQueryError;
  isSuccess: boolean;
  isFetching: boolean; // Значение true указывает, что запрос в настоящее время извлекается, но может содержать данные из более раннего запроса. Это будет как trueдля первого запроса, так и для последующих запросов.
  isLoading: boolean; // Значение true указывает, что запрос в данный момент загружается в первый раз и еще не имеет данных. Это будет trueдля первого запроса, но не для последующих запросов.
  refetch: () => void;
}

export const fetchAPI = createApi({
  reducerPath: "fetchAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["contacts"],
  endpoints: (build) => ({
    getContacts: build.query<IContact[], IBuildQueryArg<void>>({
      query: (params) => {
        return {
          url: "/users",
          method: "GET",
          params: params.params,
        };
      },
    }),

    addContact: build.mutation<IContact[], IBuildQueryArg<IContact>>({
      query: (params) => {
        return {
          url: "/users",
          method: "POST",
          body: params.body,
        };
      },
      invalidatesTags: ["contacts"],
    }),
  }),
});
