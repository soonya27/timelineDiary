import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";
import { getPostsByBookmark } from "../api/sanity";
import ListItem from "../components/ListItem";

export default function Bookmark() {
  const { user } = useAuthContext();

  const { data } = useQuery({
    queryKey: ["diaryListsBookmarks", user?.uid || ""],
    queryFn: async () => getPostsByBookmark(user?.uid),
    enabled: !!user,
    staleTime: 5000,
  });

  if (!user) {
    return <div>기본 sample...</div>; // uid가 준비되지 않았을 때의 처리
  }
  return (
    <section className="p-3 pt-0">
      {/* <Button text='login' onClick={() => login()} /> */}
      {data && (
        <ul>
          {data.map((list, index) => (
            <ListItem list={list} key={index} />
          ))}
        </ul>
      )}
    </section>
  );
}
