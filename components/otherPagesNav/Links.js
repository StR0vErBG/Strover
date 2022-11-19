import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { HiX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

export default function Links({ data }) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const handleNav = (hash) => {
    setOpen(false);
    let timer;
    if (hash) {
      const item = document.querySelector(`#${hash}`);
      console.log(item);
      timer = setTimeout(() => {
        if (item) {
          const where = {
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          };
          item.scrollIntoView(where);
        }
      }, 500);
    }
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    const html = document.querySelector("html");

    if (open) {
      html.style.overflowY = "hidden";
    }
    if (!open) {
      html.style.overflowY = "auto";
    }
  }, [open]);

  useEffect(() => {
    setOpen(false);

    const html = document.querySelector("html");

    html.style.overflowY = "auto";
  }, [router.pathname]);

  return (
    <section>
      <nav className="cursor-pointer" onClick={() => setOpen(true)}>
        Съдържание
      </nav>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.75,
            }}
            variants={{
              initialState: {
                opacity: 0,
                clipPath: "polygon(0 0,100% 0,100% 100%, 0% 100%)",
              },
              animateState: {
                opacity: 1,

                clipPath: "polygon(0 0,100% 0,100% 100%, 0% 100%)",
              },
              exitState: {
                opacity: 0,
                clipPath: "polygon(50% 0,50% 0,50% 100%, 50% 100%)",
              },
            }}
            className="absolute top-0 left-0 z-50 w-screen h-screen bg-primaryBlue-200  overflow-auto"
          >
            <div className="lg:container max-lg:px-10 relative  lg:h-full">
              <div className="h-full flex-center ">
                <ul className="py-28 flex flex-col gap-y-4">
                  {data.map((data, index) => {
                    return (
                      <li key={data.key}>
                        <a onClick={() => handleNav(data.link)}>
                          {index + 1}. {data.text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}