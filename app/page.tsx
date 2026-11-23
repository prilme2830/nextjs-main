import Link from "next/link";
export default function Home(){
  return (
    <main className ="p-8">
      <h1 className="text-3xl font-bold">
        Hi, Im April Mae Ayta. Im from centro Tubigon, Bohol. Im 23 years old
      </h1>
      <Link href="/projects" className="mt-4 inline-block underline">
        See my projects
      </Link>
    </main>
  );
}

