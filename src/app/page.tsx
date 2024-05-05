import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";

export default async function Home() {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/api/auth/signin/");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-black/20">
      <div className="flex items-center justify-center rounded-lg border-2 border-black bg-white p-8">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          <span className="text-[hsl(270,100%,70%)]">Ticketing</span> System
        </h1>
      </div>
      <span className="whitespace-pre-wrap"></span>
      <Link
        href={"/api/auth/signout/auth0"}
        className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
      >
        Sign Out
      </Link>
    </main>
  );
}
