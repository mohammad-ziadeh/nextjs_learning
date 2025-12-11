import Link from "next/link";
import type { User } from "@/app/lib/definitions";


async function getUsers(): Promise<User[]> {
  const response = await fetch("http://192.168.1.113:3000/api/users");
  if (!response.ok) throw new Error("failed to fetch data");


  return response.json();
}


export default async function User() {
  const users = await getUsers();
  return (
    <div className="grid min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Hello this is users page</h1>
      <ul>
        {/* <li>
          <Link href="/dashboard/users/1">User 1</Link>
        </li>
        <li>
          <Link href="/dashboard/users/2">User 2</Link>
        </li>
        <li>
          <Link href="/dashboard/users/3">User 3</Link>
        </li> */}
        {users.map(({ id, name }) => (
          <li key={id}>
            <Link
              href={`/dashboard/users/${id}`}
              className="text-blue-500 hover:underline"
            >
              {name}
            </Link>
          </li>

        ))}
      </ul>
    </div>
  );
}
