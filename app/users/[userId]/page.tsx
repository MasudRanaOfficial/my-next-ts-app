import { User } from "@/app/types/userdata";
import React from "react";

interface PageProps {
  params: Promise<{ userId: string }>;
}

const UserDetailPage = async ({ params }: PageProps) => {
  const { userId } = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );

  const user: User = await res.json();
  return (
    <div>
      <h2>User Details: {user.id}</h2>

      <h3>{user.name}</h3>
      <p>{user.phone}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default UserDetailPage;
