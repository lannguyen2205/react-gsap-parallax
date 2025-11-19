import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ParallaxEffect = () => {
  const parallaxRef = useRef(null);
  const mountain3 = useRef(null);
  const mountain2 = useRef(null);
  const mountain1 = useRef(null);
  const cloudsBottom = useRef(null);
  const cloudsLeft = useRef(null);
  const cloudsRight = useRef(null);
  const stars = useRef(null);
  const sun = useRef(null);
  const copy = useRef(null);
  const btn = useRef(null);

  const [background, setBackground] = useState(20);

  useGSAP(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      var tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "2500 bottom",
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            setBackground(Math.ceil(self.progress * 100 + 20));
          },
        },
      });
      tl.to(
        mountain3.current,
        {
          y: "-=100",
        },
        0
      );
      tl.to(
        mountain2.current,
        {
          y: "-=50",
        },
        0
      );
      tl.to(
        mountain1.current,
        {
          y: "+=50",
        },
        0
      );
      tl.to(
        cloudsBottom.current,
        {
          opacity: 0,
          duration: 0.5,
        },
        0
      );
      tl.to(
        cloudsLeft.current,
        {
          x: "-20%",
          opacity: 0,
        },
        0
      );
      tl.to(
        cloudsRight.current,
        {
          x: "20%",
          opacity: 0,
        },
        0
      );
      tl.to(
        sun.current,
        {
          y: "+600px",
        },
        0
      );
      tl.to(
        copy.current,
        {
          y: "-150%",
          opacity: 1,
          scale: 1.2,
        },
        0
      );
      tl.to(
        btn.current,
        {
          opacity: 1,
        },
        1.5
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        ref={parallaxRef}
        style={{
          background: `linear-gradient(#0F2B9C, #673D7D ${background}%, #A74A67, #EDFC54 )`,
        }}
        className="h-[110vh] w-full relative &>img:absolute"
      >
        <img
          ref={sun}
          className="absolute top-1/3 left-1/2 w-2/5 -translate-x-1/2 -translate-y-1/2"
          src="/assets/sun.svg"
        />
        <img
          ref={cloudsBottom}
          className="absolute bottom-0 w-full"
          src="/assets/cloud-bottom.svg"
        />
        <div
          ref={copy}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 text-white flex flex-col items-center justify-center opacity-0"
        >
          <h1 className="text-[10rem] font-extrabold">Journey</h1>
          <span
            ref={btn}
            className="bg-white text-blue-950 p-4 font-extrabold rounded-lg opacity-0"
          >
            Discover more
          </span>
        </div>
        <img
          ref={mountain1}
          className="absolute w-full bottom-10 z-1"
          src="/assets/mountain-1.svg"
        />
        <img
          ref={mountain2}
          className="absolute w-full bottom-5 z-2"
          src="/assets/mountain-2.svg"
        />
        <img
          ref={mountain3}
          className="absolute w-full bottom-0 z-3"
          src="/assets/mountain-3.svg"
        />
        <img
          ref={cloudsLeft}
          className="absolute left-0 w-1/5"
          src="/assets/clouds-left.svg"
        />
        <img
          ref={cloudsRight}
          className="absolute right-0 w-1/5"
          src="/assets/clouds-right.svg"
        />
      </div>
    </div>
  );
};

export default ParallaxEffect;
