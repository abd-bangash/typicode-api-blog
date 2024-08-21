import React from "react";
import PostsTable from "./PostsTable";
import UsersTable from "./UsersTable";
import CommentsTable from "./CommentsTable";

function ContentSection({ data, mode }) {
  return (
    <>
      <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
        {mode.toUpperCase()}
      </h1>
      {mode === "posts" && <PostsTable data={data} />}
      {mode === "users" && <UsersTable data={data} />}
      {mode === "comments" && <CommentsTable data={data} />}
      {/* <ul>
        {contentList.map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul> */}
    </>
  );
}

export default ContentSection;
