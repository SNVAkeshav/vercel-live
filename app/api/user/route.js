// app/api/users/route.js
import { NextResponse } from "next/server";

export async function GET() {
  // Example: Static users data (replace with DB fetch)
  const users = [
    { id: 1, name: "Keshav", desc: "Java Developer", email: "keshav@example.com" },
    { id: 2, name: "Riya", desc: "Frontend Engineer", email: "riya@example.com" },
    { id: 3, name: "Amit", desc: "Fullstack Dev", email: "amit@example.com" }
  ];

  // Only return id, name, desc
  const filteredUsers = users.map(({ id, name, desc }) => ({ id, name, desc }));

  return NextResponse.json(filteredUsers);
}
