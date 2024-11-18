import React from "react";
import { parseDate } from "../utils";
import BookmarkFillIcon from "./ui/icons/BookmarkFillIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import KebabMenuIcon from "./ui/icons/KebabMenuIcon";
import usePosts from "./hooks/usePosts";
import { useAuthContext } from "../context/AuthContext";

export default function ListItem({ list: { id, contents, bookmark, photo, createdAt, userImage, username } }) {
  const { user } = useAuthContext();
  const { addBookmark } = usePosts(user);
  const handleClick = () => {
    addBookmark.mutate({
      bookmark,
      id,
    });
  };
  return (
    <li className="flex bg-white p-4 rounded-xl mb-3">
      {/* <div className="basis-9 shrink-0 w-9 h-9 rounded-full overflow-hidden mr-3">
        <img src={userImage} alt={username} />
      </div> */}
      <div className="shrink grow">
        <div className="flex justify-end mb-2">
          {/* <p className="font-bold">{username}</p> */}
          <span className="text-xs text-zinc-500 mr-3">{parseDate(createdAt)}</span>
          <button title="menu">
            <KebabMenuIcon />
          </button>
        </div>
        {photo}
        <p>{contents}</p>
        <div className="flex justify-end">
          <p onClick={handleClick}>{bookmark ? <BookmarkFillIcon /> : <BookmarkIcon />}</p>
        </div>
      </div>
    </li>
  );
}
