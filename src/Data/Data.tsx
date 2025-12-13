import axios from "axios";
import { useQuery } from "@tanstack/react-query";

/* =========================
   Types
========================= */
export interface Comment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: {
    id: number;
    username: string;
    fullName: string;
  };
}


const api = axios.create({
  baseURL: "https://dummyjson.com",
});


const fetchComments = async (): Promise<Comment[]> => {
  const response = await api.get("/comments");
  return response.data.comments;
};


export const useCommentsData = () => {
  return useQuery({
    queryKey: ["comments"],
    queryFn: fetchComments,
    refetchInterval: 7000,
    retryDelay: 5000
  });
};
