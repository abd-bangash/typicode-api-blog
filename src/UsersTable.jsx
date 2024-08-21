import React from "react";

function UsersTable({ data }) {
  return (
    <table className="table-container">
      <thead>
        <tr>
          <th>S#</th>
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Company</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="id">{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{JSON.stringify(item.address)}</td>
            <td>{item.phone}</td>
            <td>{item.website}</td>
            <td>{JSON.stringify(item.company)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UsersTable;
