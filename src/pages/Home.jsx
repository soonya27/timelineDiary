import React from "react";
import { useAuthContext } from "../context/AuthContext";
import ListContainer from "../components/ListContainer";
import usePosts from "../components/hooks/usePosts";

export default function Home() {
  const { user } = useAuthContext();

  // const { data } = useQuery({
  //   queryKey: ["diaryLists", user?.uid || ""],
  //   queryFn: async () => getPosts(user?.uid),
  //   enabled: !!user,
  //   staleTime: 5000,
  // });
  const {
    postQuery: { isLoading, error, data },
  } = usePosts(user);

  console.log(data);
  if (!user) {
    return <div>기본 sample...</div>; // uid가 준비되지 않았을 때의 처리
  }
  return <section className="p-3 pt-0">{data && <ListContainer data={data} />}</section>;
}
