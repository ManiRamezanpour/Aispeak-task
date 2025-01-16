import { User } from "@/contexts/AuthContext";

const users: User[] = [
  {
    id: 1,
    username: "Alice Johnson",
    email: "alice@example.com",
    password: "admin",
  },
  {
    id: 2,
    username: "Bob Smith",
    email: "bob@example.com",
    password: "user",
  },
  {
    id: 3,
    username: "Charlie Brown",
    email: "charlie@example.com",
    password: "user",
  },
  {
    id: 4,
    username: "Diana Prince",
    email: "diana@example.com",
    password: "moderator",
  },
  {
    id: 5,
    username: "admin",
    email: "admin@gmail.com",
    password: "admin123",
  },
];

export default users;
