import React from "react";

export const metadata = {
  title: "Users",
  description: "...",
};

import type { User } from "../types/userdata";
import Link from "next/link";

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return (
    <div>
      <h2>Our Users: {users.length}</h2>

      <div className="grid grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="card card-border bg-base-100">
            <div className="card-body">
              <h2 className="card-title">{user.name}</h2>
              <p>
                {user.address.street}, {user.address.suite}, {user.address.city}
                , {user.address.zipcode}
              </p>
              <div className="card-actions justify-end">
                <Link href={`/users/${user.id}`}>
                  <button className="btn btn-primary">Know More</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
