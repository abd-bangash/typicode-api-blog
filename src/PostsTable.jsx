import React from "react";

function PostsTable({ data }) {
  return (
    <table className="table-container">
      <thead>
        <tr>
          <th>S#</th>
          <th>User Id</th>
          <th>Titlle</th>
          <th>Body</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="id">{item.id}</td>
            <td className="id">{item.userId}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PostsTable;
