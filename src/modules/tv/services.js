import { useQuery } from "@tanstack/vue-query";
import axiosInstance from "../../axios";

const useTvQueries = ({ params }) => {
  return useQuery({
    queryKey: ["tv"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/discover/tv");
      return data;
    },
  });
};

const useSearchTvQueries = (query) => {
  return useQuery({
    enabled: false,
    queryKey: ["searchTv", query],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/search/tv", {
        params: { query: query.value },
      });
      return data;
    },
  });
};

export { useTvQueries, useSearchTvQueries }