import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useCRUDStory = () => {
  const queryClient = useQueryClient();


  const { data = [], isLoading, error } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });


  const addMutation = useMutation({
    mutationFn: async (newStory: any) => {
      const res = await axios.post(
        "http://localhost:3000/stories",
        newStory
      );
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });


  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`http://localhost:3000/stories/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (story: any) => {
      const res = await axios.put(
        `http://localhost:3000/stories/${story.id}`,
        story
      );
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });

  return {
    list: data,
    isLoading,
    error,

    add: addMutation.mutate,
    remove: deleteMutation.mutate,
    update: updateMutation.mutate,
  };
};