
import Hero from "./components/Hero/hero"; 
import Translation from "./components/Translation/translation"



export default function Home() {
  return (
    <main className="flex flex-col gap-2 bg-gradient-to-brp-2">
    <div className=" md:h-screen">
        <Hero />
        <Translation/>
      </div>
    </main>
  );
}
