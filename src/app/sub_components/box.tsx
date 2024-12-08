import Image from "next/image";

const bag = "./images/material_icons/bag.svg";
const ball = "./images/material_icons/ball.svg";
const box = "./images/material_icons/box.svg";
const lab = "./images/material_icons/lab.svg";
const leaf = "./images/material_icons/leaf.svg";
const recycle = "./images/material_icons/recycle.svg";


const Box = () => {
  return (
    <div>
      <div className="bg-[#17414F] absolute left-[50px] bottom-[-80px] w-[320px] h-[130px] rounded-3xl">
        <div className="absolute top-[-16px] left-[12px]">
        <div className="flex flex-col gap-1">
          <div className="flex justify-center gap-1">
            <div className="flex flex-col justify-center gap-1 items-center">
              <div className="bg-white w-7 h-7 rounded-full flex justify-center items-center">
                <Image src={lab} width={10} height={0} alt="lab" />
              </div>
                <a className="text-white font-medium text-[8px] text-center">
                    Clinically Studied
                </a>
                <p className="w-[90px] h-[20px] text-center text-wrap font-thin text-[5px] text-[#D9D9D9]">
                    All products that we offer have undergone lab and safety tests
                </p>
            </div>
            <div className="flex flex-col justify-center gap-1 items-center">
              <div className="bg-white w-7 h-7 rounded-full flex justify-center items-center">
                <Image src={leaf} width={10} height={0} alt="lab" />
              </div>
                <a className="text-white font-medium text-[8px] text-center">
                    Vegetarian Friendly
                </a>
                <p className="w-[100px] h-[20px] text-center text-wrap font-thin text-[5px] text-[#D9D9D9]">
                    We have a wide selection of vegetarian products to meet your needs
                </p>
            </div>
            <div className="flex flex-col justify-center gap-1 items-center">
              <div className="bg-white w-7 h-7 rounded-full flex justify-center items-center">
                <Image src={ball} width={10} height={0} alt="lab" />
              </div>
                <a className="text-white font-medium text-[8px] text-center">
                    Made in India
                </a>
                <p className="w-[100px] h-[20px] text-center text-wrap font-thin text-[5px] text-[#D9D9D9]">
                    Shop local and explore health products made right here in India
                </p>
            </div>
          </div>
          <div className="flex justify-center gap-3">
            <div className="flex flex-col justify-center gap-1 items-center">
              <div className="bg-white w-7 h-7 rounded-full flex justify-center items-center">
                <Image src={bag} width={10} height={0} alt="lab" />
              </div>
                <a className="text-white font-medium text-[8px] text-center">
                    Free shipping
                </a>
                <p className="w-[90px] h-[20px] text-center text-wrap font-thin text-[5px] text-[#D9D9D9]">
                    We deliver to your door with no shipping costs on your orderss
                </p>
            </div>
            <div className="flex flex-col justify-center gap-1 items-center">
              <div className="bg-white w-7 h-7 rounded-full flex justify-center items-center">
                <Image src={box} width={10} height={0} alt="lab" />
              </div>
                <a className="text-white font-medium text-[8px] text-center">
                No Risk
                </a>
                <p className="w-[85px] h-[20px] text-center text-wrap font-thin text-[5px] text-[#D9D9D9]">
                We ensure that all products are safe and within their use-by date
                </p>
            </div>
            <div className="flex flex-col justify-center gap-1 items-center">
              <div className="bg-white w-7 h-7 rounded-full flex justify-center items-center">
                <Image src={recycle} width={10} height={0} alt="lab" />
              </div>
                <a className="text-white font-medium text-[8px] text-center">
                GMO free
                </a>
                <p className="w-[100px] h-[20px] text-center text-wrap font-thin text-[5px] text-[#D9D9D9]">
                Natural, no modified products and derivatives for those who need it
                </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
