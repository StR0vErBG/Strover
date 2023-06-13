
import "../styles/globals.css";

// Pages
import HeroSection from "../components/pages/Home/HeroSection"
import SwiperInfo from "../components/pages/Home/SwiperInfo"
import Plans from "../components/pages/Home/Plans"
import NeedsOfWebsite from "../components/pages/Home/NeedsOfWebsite"
import AllFunctions from "../components/pages/Home/AllFunctions"
import Questions from "../components/pages/Home/Questions"
import Banner from "../components/Animated/Banner"




export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default async function Home() {

  return (
    <main className="relative w-screen h-screen">
      
      <HeroSection/>
      <SwiperInfo/>
       <Plans/>
       <NeedsOfWebsite/>
      <Banner title="Продавай повече онлайн!" btnText="Започни сега" bigImg="ecommerce.png" bigImgClassName="w-80 h-80" bigImgPos="bottom-0 right-10"/>
      <AllFunctions/> 
      <Banner title="Превърнете идеите си в сайт!" btnText="ИЗБЕРИ ПЛАН" bigImg="ideaSticker.png" bigImgClassName="w-96 h-96" bigImgPos="-bottom-5 right-10"/>

      <Questions/>


      {/* bg-[#375694] */}

        {/* Q&A */}
    
        {/* REVIEWS */}
        {/* <section className="relative z-10 min-h-screen px-48 ml-24 break-words min-w-screen ">
        <div className="py-10 text-center">
            <h2 className="text-3xl font-medium">Ревюта от клиенти</h2>
            <p className="mt-2 text-blue">
             <Link href="https://g.page/r/CbxkIKpAnUE0EBM">Виж всички</Link>
            </p>
          </div>
          <Reviews />
        </section> */}
     
    </main>
  );
}
