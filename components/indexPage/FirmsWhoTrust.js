import React, { useEffect, useRef } from "react";

import Image from "next/legacy/image";
import { BsArrowRight } from "react-icons/bs";

import { motion, useAnimation, useInView } from "framer-motion";

import { useIsSmall } from "../../libs/FramerMediaQueryFn";
import TextAnimation from "../../libs/TextAnimation";
import FadeFromBottom from "../layouts/animations/onView/FadeFromBottom";
import HeaderSpider from "../HeaderSpider";

export default function FirmsWhoTrust() {
  const firstImage = useRef(null);
  const secondImage = useRef(null);

  const firstImageView = useInView(firstImage, { amount: 0.8 });
  const secondImageView = useInView(secondImage, { amount: 0.8 });

  const isSmall = useIsSmall();

  const firstImageAnim = useAnimation();
  const secondImgAnim = useAnimation();

  useEffect(() => {
    if (firstImageView) {
      isSmall &&
        firstImageAnim.start({
          rotate: 0,
        });
    }
    if (!firstImageView) {
      isSmall &&
        firstImageAnim.start({
          rotate: -20,
        });
    }
  }, [firstImageView]);
  useEffect(() => {
    if (secondImageView) {
      isSmall &&
        secondImgAnim.start({
          rotate: 0,
        });
    }
    if (!secondImageView) {
      isSmall &&
        secondImgAnim.start({
          rotate: 20,
        });
    }
  }, [secondImageView]);
  return (
    <section className="mt-32">
      <div className="font-semibold flex-center text-white md:text-4xl ">
        <HeaderSpider
          title="Част от проектите ни"
          size="text-2xl  md:text-4xl"
        />
      </div>
      <section className="mt-20 md:mt-32 xl:container">
        <section className="relative flex mt-10 zeroToXl:flex-col-reverse">
          <div className="relative w-full max-sm:-mt-32 h-96" ref={firstImage}>
            <Image
              src="/firms/softoffice.png"
              alt="Софт офис е компания, създадена през 2008,  занимаваща се със стоки и услуги,  и по-конкретно с материали и консумативи."
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="w-full rounded-[3rem] sm:rounded-[11rem] xl:-ml-96 -mt-8 bg-primaryBlue-650 h-[19rem] max-sm:pb-10 sm:h-[26rem]">
            <div className="xl:grid grid-cols-[40%60%] h-full flex-center">
              <div></div>
              <div className="flex flex-col justify-center zeroToXl:text-center zeroToXl:container">
                <div className="text-2xl font-bold text-primaryBlue-100">
                  <TextAnimation
                    placeholderText={[
                      {
                        type: "heading2",
                        text: "SoftOffice",
                      },
                    ]}
                  />
                </div>
                <FadeFromBottom duration={0.5}>
                  <p className="max-w-md mt-1 text-white max-md:text-justify hypens-auto max-md:container">
                    Софт офис е компания, създадена през 2008, занимаваща се със
                    стоки и услуги, и по-конкретно с материали и консумативи.
                  </p>
                </FadeFromBottom>
                <FadeFromBottom delay={0.1} duration={0.5}>
                  <div className="z-10 inline-flex mt-4 zeroToXl:justify-center xl:items-center text-primaryBlue-100 grow-0">
                    <div className="peer">
                      <button className="z-10 font-bold cursor-pointer">
                        <a
                          href="https://softoffice.bg"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Виж сайта
                        </a>
                      </button>
                    </div>
                    <div className="pl-1 my-auto transition-all opacity-0 peer-hover:opacity-100 peer-hover:translate-x-2 ">
                      <BsArrowRight />
                    </div>
                  </div>
                </FadeFromBottom>
              </div>
            </div>
          </div>
        </section>
        <section className="relative flex mx-auto zeroToXl:flex-col lg:mt-72 ">
          <div className="w-full rounded-[3rem] sm:rounded-[11rem] xl:ml-28 -mt-8 bg-primaryBlue-650 h-[19rem] max-sm:pb-10 sm:h-[26rem]">
            <div className="xl:grid grid-cols-[10%90%] h-full zeroToXl:flex-center zeroToXl:text-center">
              <div></div>
              <div className="flex flex-col justify-center">
                <div className="text-2xl font-bold text-primaryBlue-100">
                  <TextAnimation
                    placeholderText={[
                      {
                        type: "heading2",
                        text: "IvdaGeo",
                      },
                    ]}
                  />
                </div>
                <FadeFromBottom duration={0.5}>
                  <p className="max-w-sm mt-1 text-white max-md:text-justify hypens-auto max-md:container">
                    Строителен супермаркет Ивда Гео e фирма с дългогодишен опит
                    в сферата на търговията със строителни материали,
                    инструменти, крепежни елементи и други.
                  </p>
                </FadeFromBottom>
                <FadeFromBottom delay={0.1} duration={0.5}>
                  <div className="z-10 inline-flex items-center mt-4 zeroToXl:justify-center text-primaryBlue-100 grow-0">
                    <div className="peer">
                      <button className="z-10 font-bold cursor-pointer">
                        <a
                          href="https://ivdageopaint.bg"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Виж сайта
                        </a>
                      </button>
                    </div>
                    <div className="pl-1 my-auto transition-all opacity-0 peer-hover:opacity-100 peer-hover:translate-x-2 ">
                      <BsArrowRight />
                    </div>
                  </div>
                </FadeFromBottom>
              </div>
            </div>
          </div>
          <div className="relative w-full h-96 xl:-ml-44 max-sm:-mt-32">
            <Image
              src="/firms/ivdageo.png"
              alt="Софт офис е компания, създадена през 2008,  занимаваща се със стоки и услуги,  и по-конкретно с материали и консумативи."
              layout="fill"
              objectFit="contain"
            />
          </div>
        </section>
      </section>
    </section>
  );
}
