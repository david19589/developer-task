import clsx from "clsx";
import Image from "next/image";

export default function Slider() {
  return (
    <div className="w-full">
      <div className="mb-2.5">
        <div className="flex justify-center lg:gap-2.5 mb-1.25">
          <Image
            src="/imgs/image1.png"
            alt="image1"
            width={355}
            height={200}
            priority
            className="lg:hidden"
          />
          <div className="hidden lg:flex gap-2.5 w-full justify-center">
            <Image
              src="/imgs/image1.png"
              alt="image1_desktop"
              width={595}
              height={300}
              priority
            />
            <Image
              src="/imgs/image2.png"
              alt="image2"
              width={595}
              height={300}
              priority
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-1.25">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={clsx(
                "w-3.75 h-1.25 rounded-[0.3125rem] border border-[#0F70DC]",
                { "bg-[#0F70DC]": i === 2 }
              )}
            />
          ))}
        </div>
      </div>
      <div className="lg:flex-row lg:justify-center lg:gap-2.5 flex flex-col gap-1.25">
        <div className="lg:w-max flex gap-1.25 w-full justify-center">
          <Image
            src="/imgs/image3.png"
            alt="image3"
            width={148}
            height={100}
            priority
            className="sm:w-43.75 lg:w-100 lg:h-62.5"
          />
          <Image
            src="/imgs/image4.png"
            alt="image4"
            width={148}
            height={100}
            priority
            className="sm:w-43.75 lg:w-100 lg:h-62.5"
          />
        </div>
        <div className="lg:w-max lg:gap-2.5 flex gap-1.25 w-full justify-center">
          <div className="lg:flex-col lg:gap-2.5 flex gap-1.25">
            <Image
              src="/imgs/image5.png"
              alt="image5"
              width={71}
              height={71}
              priority
              className="lg:hidden sm:w-21.25 sm:h-21.25"
            />
            <Image
              src="/imgs/image9.png"
              alt="image9"
              width={185}
              height={120}
              priority
              className="hidden lg:block"
            />
            <Image
              src="/imgs/image6.png"
              alt="image6"
              width={71}
              height={71}
              priority
              className="lg:hidden sm:w-21.25 sm:h-21.25"
            />
            <Image
              src="/imgs/image10.png"
              alt="image10"
              width={185}
              height={120}
              priority
              className="hidden lg:block"
            />
          </div>
          <div className="lg:flex-col lg:gap-2.5 flex gap-1.25">
            <Image
              src="/imgs/image7.png"
              alt="image7"
              width={71}
              height={71}
              priority
              className="lg:hidden sm:w-21.25 sm:h-21.25"
            />
            <Image
              src="/imgs/image11.png"
              alt="image11"
              width={185}
              height={120}
              priority
              className="hidden lg:block"
            />
            <Image
              src="/imgs/image8.png"
              alt="image8"
              width={71}
              height={71}
              priority
              className="lg:hidden sm:w-21.25 sm:h-21.25"
            />
            <Image
              src="/imgs/image12.png"
              alt="image12"
              width={185}
              height={120}
              priority
              className="hidden lg:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
