import { getServerAuthSession } from "~/server/auth";
import UserItem from "./UserItem";
import Menu from "./Menu";

export default async function Sidebar() {
  const session = await getServerAuthSession();
  return (
    <div className="flex min-h-screen flex-col gap-4 bg-white p-2 shadow-lg">
      <UserItem session={session} />
      <Menu />
    </div>
  );
}
