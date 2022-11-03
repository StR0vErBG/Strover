import Head from "next/head";
import Image from "next/image";
import HeroSection from "../components/indexPage/HeroSection";
import Navigation from "../components/indexPage/Navigation";

export default function Home() {
  return (
    <div className="mb-auto ">
      <Head>
        <title>Strover</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="mt-5">
        <HeroSection />
        <section className="container text-center">
          <div>
            <h5 className="text-primaryBlue-450">КОИ СМЕ НИЕ?</h5>
            <p className="text-white">
              Ние сме Strover, млади, амбициозни и креативни интернет паяци,
              които са готови да се учат от всичко и всички. Плетем мрежата си
              около онлайн търговията, уеб дизайна, онлайн маркетинга и SEO
              оптимизацията, насочени към съществуващи и нови бизнеси.
            </p>
          </div>
          <div>
            <h5 className="text-primaryBlue-450">КАКВО ЩЕ ПОЛУЧИТЕ?</h5>
            <p className="text-white">
              Комплексна услуга от хора, които са специалисти в съответните
              сфери: дигиталния маркетинг, компютърните науки и онлайн
              продажбите. Ние ще Ви предоставим цялостни дигитални решения за
              развитието на бранда Ви и достигането му до ИДЕАЛНИТЕ КЛИЕНТИ.
            </p>
          </div>
          <div>
            <h5 className="text-primaryBlue-450">ЗАЩО СМЕ РАЗЛИЧНИ?</h5>
            <p className="text-white">
              Защото държим на индивидуалния подход към клиента, както и на
              добрата комуникация по всеки един проект. Когато за него няма
              нужда от сложни технически термини - просто не ги използваме. За
              нас визията в интернет пространството е изключително важна.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
