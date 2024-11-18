import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";
import { getPosts } from "../api/sanity";
import ListItem from "../components/ListItem";
import { formatDate } from "../utils";

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
  // console.log(data);
  const filterdData =
    data &&
    data.reduce((result, item) => {
      const date = formatDate(item.createdAt);

      if (!result[date]) {
        result[date] = [];
      }
      result[date].push(item);
      return result;
    }, {});

  console.log(filterdData);
  return (
    <section className="p-3 pt-0">
      {data && (
        // <ul>
        //   {data.map((list, index) => (
        //     <ListItem list={list} key={index} />
        //   ))}
        // </ul>
        <>
          {Object.entries(filterdData).map(([date, items]) => (
            <div key={date}>
              <h2 className="text-center mb-5 mt-5 font-semibold">{date}</h2>
              <ul>
                {items.map((list, index) => (
                  <ListItem list={list} key={index} />
                ))}
              </ul>
            </div>
          ))}
        </>
      )}
    </section>
  );
}
