import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";
import { getPosts } from "../api/sanity";
import ListItem from "../components/ListItem";

export default function Home() {
  const { user } = useAuthContext();

  const { data } = useQuery({
    queryKey: ["diaryLists", user?.uid || ""],
    queryFn: async () => getPosts(user?.uid),
    enabled: !!user,
    staleTime: 5000,
  });

  if (!user) {
    return <div>기본 sample...</div>; // uid가 준비되지 않았을 때의 처리
  }
  console.log(data);
  return (
    <section className="">
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
