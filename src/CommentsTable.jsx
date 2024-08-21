import React from "react";

function CommentsTable({ data }) {
  return (
    <table className="table-container">
      <thead>
        <tr>
          <th>S#</th>
          <th>Post Id</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Body</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="id">{item.id}</td>
            <td className="id">{item.postId}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CommentsTable;
