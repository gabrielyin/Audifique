import Hero from "./components/hero";
import NavBar from "./components/nav-bar";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <NavBar />

      <section className="max-w-[800px] mx-auto">
        <Hero />
      </section>
    </main>
  );
}
