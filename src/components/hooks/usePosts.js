import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { addBookmarkByUser, getPosts, getPostsByBookmark, removeBookmarkByUser } from "../../api/sanity";

export default function usePosts(user) {
  const userId = user?.uid;
  const queryClient = useQueryClient();

  const postQuery = useQuery({
    queryKey: ["diaryLists", userId || ""],
    queryFn: async () => getPosts(userId),
    enabled: !!user,
  });
  const postBookmarkQuery = useQuery({
    queryKey: ["diaryListsBookmarks", userId || ""],
    queryFn: async () => getPostsByBookmark(userId),
    enabled: !!user,
  });

  // const addProduct = useMutation(
  //     {
  //         mutationFn: ({ form, url }) => addNewProduct(form, { defaultImageUrl: url.defaultImageUrl, hoverImageUrl: url.hoverImageUrl }),
  //         onSuccess: () => queryClient.invalidateQueries(['products', uid])
  //     }
  // );

  const addBookmark = useMutation({
    mutationFn: ({ isBookmark, id }) => {
      return isBookmark ? removeBookmarkByUser(userId, id) : addBookmarkByUser(userId, id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["diaryListsBookmarks", userId] });
      queryClient.invalidateQueries({ queryKey: ["diaryLists", userId] });
    },
  });

  return { postQuery, postBookmarkQuery, addBookmark };
}
