import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="bg-slate-800 w-screen h-screen">
        <h1>Quiz App</h1>
        <Link href="/quiz">
          <button>Start Quiz</button>
        </Link>
      </div>
    </main>
  );
}
