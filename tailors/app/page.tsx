import Image from "next/image";
import SlideShow from "./comps/home/slides";
import About from "./comps/home/about";

export default function Home() {
  return (
    <>
     <head>
        <title>Tailors Dream College</title>
      </head>
    <div className="flex justify-center items-center">
      <SlideShow />
    </div>
    <div className="py-5">
      <About />
    </div>
    </>
  );
}
