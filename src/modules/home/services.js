import { useQuery } from "@tanstack/vue-query";
import axiosInstance from "../../axios";

const useMoviesQueries = ({ page, type }) => {
  return useQuery({
    queryKey: ["movies", page],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/discover/movie", {
        params: { page: page.value },
      });
      return data;
    },
  });
};

const useSearchMoviesQueries = ({query, type}) => {
  return useQuery({
    enabled: false,
    queryKey: ["searchMovie", query],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/search/movie", {
        params: { query: query.value },
      });
      return data;
    },
  });
};

const useMovieByIdQueries = ({ id }) => {
  return useQuery({
    enabled: false,
    queryKey: ["searchByIdMovie"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`movie/${id.value}`);
      return data;
    },
  });
};

const useMovieCreditsQueries = ({ id }) => {
  return useQuery({
    enabled: false,
    queryKey: ["searchCreditsMovie"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`movie/${id.value}/credits`);
      return data;
    },
  });
};

const useGetVideoMovieQueries = ({ id }) => {
  return useQuery({
    enabled: false,
    queryKey: ["searchVideoMovie"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`movie/${id.value}/videos`);
      return data;
    },
  });
};

export {
  useMoviesQueries,
  useSearchMoviesQueries,
  useMovieByIdQueries,
  useMovieCreditsQueries,
  useGetVideoMovieQueries,
};
