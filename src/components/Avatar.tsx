import { dataAvatar } from "@/data/avatar";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function Avatar() {
  const [select, setSelect] = useState(dataAvatar[0]);

  // Animation variants cho text content - fix kiểu dữ liệu
  const textVariants = {
    initial: {
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      filter: "blur(10px)",
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const imageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="container grid grid-cols-2 gap-2 text-white pt-5 md:pt-40">
      <div className="md:col-span-1 col-span-2">
        <div className="">
          <ul
            className="list-disc pl-5 pb-5 text-[#FFFFFFCC]"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <li className="text-[14px] md:text-[20px]">HỢP TÁC BỀN VỮNG</li>
          </ul>
          <div
            className=""
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-delay="300"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={select.id}
                variants={textVariants as any}
                initial="initial"
                animate="animate"
                exit="exit"
                className="font-quicksand-bold"
              >
                <p className="font-quicksand-bold min-h-[250px]">
                  {select.content}
                </p>

                <h1 className="lg:text-[22px] text-[16px]">{select.name}</h1>
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            className="flex md:flex-row flex-col justify-start items-start md:items-center gap-3 mt-2"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-delay="400"
          >
            <div className=" gap-2 items-center md:flex hidden">
              <span className="w-1 h-1 bg-[#8DC63F] rounded-full" />
              <span className="w-2 h-2 bg-[#35AA94] rounded-full" />
              <span className="w-3 h-3 bg-[#0088CB] rounded-full" />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={select.id}
                variants={textVariants as any}
                initial="initial"
                animate="animate"
                exit="exit"
                className="font-quicksand-bold"
              >
                <h1 className="text-[10px] md:text-[16px]">{select.sub}</h1>
              </motion.div>
            </AnimatePresence>
            <div className="flex gap-2 items-center justify-start">
              <span className="w-3 h-3 bg-[#996598] rounded-full" />
              <span className="w-2 h-2 bg-[#D24D70] rounded-full" />
              <span className="w-1 h-1 bg-[#ED1B2F] rounded-full" />
            </div>
          </div>
        </div>
        {/* Nội dung text với animation */}

        {/* Danh sách avatar nhỏ - fix lỗi variants */}
        <div className="flex justify-start items-center gap-2 mt-10">
          {dataAvatar.map((i, idx) => (
            <motion.div
              className={`${select.id === i.id ? "scale-100 border border-white rounded-full border-2" : "scale-80"} cursor-pointer`}
              key={idx}
              onClick={() => setSelect(i)}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: {
                  delay: idx * 0.05,
                  duration: 0.3,
                  type: "spring",
                  stiffness: 200,
                },
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={i.image} alt="" className="w-20 h-20 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hình ảnh lớn bên phải */}
      <div className="md:flex justify-end items-center absolute bottom-30 xl:bottom-39 xl:right-0 -right-20 hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={select.id}
            src={select.imgSub}
            alt=""
            variants={imageVariants as any}
            initial="initial"
            animate="animate"
            exit="exit"
            className="xl:w-[90%] w-[70%]"
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Avatar;
