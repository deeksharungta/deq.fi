import Image from "next/image";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export default function Features() {
  return (
    <div className="flex gap-4 flex-col w-screen lg:w-full sm:px-10 px-4 mt-10">
      <div className="flex md:flex-row flex-col gap-4">
        <div className="relative bg-dark-gray p-6 rounded-2xl lg:w-2/3 w-full flex lg:flex-row flex-col md:justify-between items-center justify-center">
          <Image
            src="Secure_Safebox_Digital.svg"
            width={219}
            height={166}
            alt="Secure Safebox"
            className="block lg:hidden"
          />
          <div className="lg:self-end mt-10">
            <p className="text-2xl font-bold text-center lg:text-left">
              <span className="text-light-blue">Stake Avail</span> on Ethereum
            </p>
            <p
              className={`${manrope.className} text-sm font-medium text-white/50 mt-1`}
            >
              Stake your AVAIL with us to earn rewards and points
            </p>
          </div>
          <Image
            src="Secure_Safebox_Digital.svg"
            width={327}
            height={245}
            alt="Secure Safebox"
            className="self-start hidden lg:block absolute right-8 -top-10"
          />
        </div>
        <div className="bg-dark-gray p-6 rounded-2xl lg:w-1/3 w-full flex flex-col items-center justify-center lg:block">
          <Image src="Sound_SFX.svg" width={201} height={169} alt="Sound SFX" />
          <p className="text-2xl font-bold mt-10">
            Stake with any <span className="text-light-blue">token</span>
          </p>
          <p
            className={`${manrope.className} text-sm font-medium text-white/50 mt-1`}
          >
            Stake your AVAIL with us to earn rewards and points
          </p>
        </div>
      </div>
      <div className="flex gap-4 md:flex-row flex-col ">
        <div className="bg-dark-gray p-6 rounded-2xl lg:w-1/3 w-full flex flex-col items-center justify-center lg:block">
          <Image
            src="Image_Uploading.svg"
            width={223}
            height={173}
            alt="Image Uploading"
          />
          <p className="text-2xl font-bold mt-10">
            Track <span className="text-light-blue">Portfolio</span>
          </p>
          <p
            className={`${manrope.className} text-sm font-medium text-white/50 mt-1`}
          >
            Stake your AVAIL with us to earn rewards and points
          </p>
        </div>
        <div className="bg-dark-gray p-6 rounded-2xl lg:w-2/3 w-full flex lg:flex-row flex-col md:justify-between items-center justify-center">
          <Image
            src="Alerts_Circle.svg"
            width={180}
            height={160}
            alt="DEQ points"
            className="lg:hidden"
          />
          <div className="lg:self-end mt-10">
            <p className="text-2xl font-bold text-center lg:text-left">
              Earn DEQ <span className="text-light-blue">points</span>
            </p>
            <p
              className={`${manrope.className} text-sm font-medium text-white/50 mt-1`}
            >
              Stake your AVAIL with us to earn rewards and points
            </p>
          </div>
          <Image
            src="Alerts_Circle.svg"
            width={250}
            height={239}
            alt="DEQ points"
            className="self-start hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
}
