import Image from "next/image";
import Text from "../sub_components/text";
import Box from "../sub_components/box";
import Content from "../sub_components/content";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const medicine = "./images/assets/medicine.svg";


const Vita = () => {
  return (
    <div className="bg-[#E2F5FB] w-[423px] w-[388px] absolute left-1 right-2 h-[230px]">
      <div className="text-[#003569] flex justify-center items-center py-1 font-bold text-2xl">
        Essential Vitamins
      </div>
      <div className="flex justify-center gap-6">
        <Text />
        <div className="bg-[#FFE9B5] w-[80px] h-[80px] rounded-tl-3xl rounded-br-3xl relative left-[20px]">
          <div className="absolute top-[-20px]">
            <Image src={medicine} alt="medicine" width={100} height={100} />
          </div>
        </div>
        <Content />
      </div>
      <div className="absolute left-[20px] bottom-10">
        <div className="flex gap-1">
          <div className="w-4 h-4 bg-[#727272] rounded-full flex items-center justify-center">
            <GoArrowLeft fill="#727272" />
          </div>
          <div className="w-4 h-4 bg-[#727272] rounded-full flex items-center justify-center">
            <GoArrowRight fill="#727272" />
          </div>
        </div>
      </div>
      <Box />
    </div>
  );
};

export default Vita;
