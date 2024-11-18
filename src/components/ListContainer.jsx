import React from "react";
import ListItem from "./ListItem";
import { formatDate } from "../utils";

export default function ListContainer({ data }) {
  const filterdData = data.reduce((result, item) => {
    const date = formatDate(item.createdAt);

    if (!result[date]) {
      result[date] = [];
    }
    result[date].push(item);
    return result;
  }, {});
  return (
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
  );
}
