import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.webp";
import image2 from "@/assets/image2.webp";
import image3 from "@/assets/image3.webp";
import image4 from "@/assets/image4.webp";
import image5 from "@/assets/image5.webp";
import image6 from "@/assets/image6.webp";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "@/scenes/ourClasses/Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training classes",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Laudantium repellendus quod dolorem ex impedit! Earum, excepturi
    laudantium at iure facere hic, dolore accusamus blanditiis iste
    eius est sit sed eaque.`,
    image: image1,
  },
  {
    name: "Fitness Training classes",

    image: image2,
  },
  {
    name: "Adventure Training classes",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Laudantium repellendus quod dolorem ex impedit! Earum, excepturi
    laudantium at iure facere hic, dolore accusamus blanditiis iste
    eius est sit sed eaque.`,
    image: image3,
  },
  {
    name: "Ab Core Training classes",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Laudantium repellendus quod dolorem ex impedit! Earum, excepturi
    laudantium at iure facere hic, dolore accusamus blanditiis iste
    eius est sit sed eaque.`,
    image: image4,
  },
  {
    name: "Yuga Training classes",

    image: image5,
  },
  {
    name: "Weight Training classes",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Laudantium repellendus quod dolorem ex impedit! Earum, excepturi
    laudantium at iure facere hic, dolore accusamus blanditiis iste
    eius est sit sed eaque.`,
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="bg-parimary-100 w-full py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mx-auto w-5/6"
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium repellendus quod dolorem ex impedit! Earum, excepturi
              laudantium at iure facere hic, dolore accusamus blanditiis iste
              eius est sit sed eaque.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
