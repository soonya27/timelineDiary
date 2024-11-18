import React from "react";
import { useAuthContext } from "../context/AuthContext";
import ListContainer from "../components/ListContainer";
import usePosts from "../components/hooks/usePosts";

export default function Bookmark() {
  const { user } = useAuthContext();

  // const { data } = useQuery({
  //   queryKey: ["diaryListsBookmarks", user?.uid || ""],
  //   queryFn: async () => getPostsByBookmark(user?.uid),
  //   enabled: !!user,
  //   staleTime: 5000,
  // });
  const {
    postBookmarkQuery: { data },
  } = usePosts(user);

  if (!user) {
    return <div>기본 sample...</div>; // uid가 준비되지 않았을 때의 처리
  }
  return (
    <section className="p-3 pt-0">
      {/* <Button text='login' onClick={() => login()} /> */}
      <ListContainer data={data} />
    </section>
  );
}
