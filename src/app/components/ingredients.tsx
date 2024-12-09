import Image from "next/image";

const banner_1 = "./images/banners/banner_1.svg";
const banner_2 = "./images/banners/banner_2.svg";
const banner_3 = "./images/banners/banner_3.svg";
const banner_4 = "./images/banners/banner_4.svg";
const banner_5 = "./images/banners/banner_5.svg";
const banner_6 = "./images/banners/banner_6.svg";

const Ingredients = () => {
  return (
    <div className="w-[350px] absolute top-[350px] left-[40px]">
      <div className="flex flex-col gap-2">
        <div className="flex justify-center gap-1">
          <div className="flex flex-col justify-center">
            <a className="text-[#003569] font-medium text-[7px]">INGREDIENTS</a>
            <a className="text-[#003569] font-bold text-[8px]">
              Better Ingredients
            </a>
            <p className="text-wrap text-[#727272] text-[4px] w-[150px]">
              Only the best when you choose products offered on our platform -
              high-quality ingredients for high quality products!
            </p>
          </div>
          <div className="relative">
            <Image src={banner_1} width={200} height={200} alt="ban1" />
            <div className="absolute top-2 left-[7px]">
              <div className="flex flex-col gap-1 justify-center">
                <a className="text=[#2D3F59] font-bold text-[6px]">Vitamin C</a>
                <a className="tex-[#727272] text-[5px] font-light">
                  Vitamin C as ascorbic acid
                </a>
              </div>
              <div className="absolute">
                <a className="underline font-bold text-[5px] text-[#003569]">
                  SEE MORE
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image src={banner_2} width={200} height={200} alt="ban2" />
            <div className="absolute top-2 left-[7px]">
              <div className="flex flex-col gap-1 justify-center">
                <a className="text=[#2D3F59] font-bold text-[6px]">
                  Vitamin B3
                </a>
                <a className="tex-[#727272] text-[5px] font-light">
                  Niacin for healthy gut and skin
                </a>
              </div>
              <div className="absolute">
                <a className="underline font-bold text-[5px] text-[#003569]">
                  SEE MORE
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-1">
          <div className="relative">
            <Image src={banner_3} width={200} height={200} alt="ban1" />
            <div className="absolute top-2 left-[7px]">
              <div className="flex flex-col gap-1 justify-center">
                <a className="text=[#2D3F59] font-bold text-[6px]">Magnesium</a>
                <a className="tex-[#727272] text-[5px] font-light">
                  Boost energy and support muscle function
                </a>
              </div>
              <div className="absolute">
                <a className="underline font-bold text-[5px] text-[#003569]">
                  SEE MORE
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image src={banner_4} width={200} height={200} alt="ban2" />
            <div className="absolute top-2 left-[7px]">
              <div className="flex flex-col gap-1 justify-center">
                <a className="text=[#2D3F59] font-bold text-[6px]">
                  Hyaluronic Acid
                </a>
                <a className="tex-[#727272] text-[5px] font-light">
                  For smooth, supple and soft skin!
                </a>
              </div>
              <div className="absolute">
                <a className="underline font-bold text-[5px] text-[#003569]">
                  SEE MORE
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image src={banner_5} width={200} height={200} alt="ban2" />
            <div className="absolute top-2 left-[7px]">
              <div className="flex flex-col gap-1 justify-center">
                <a className="text=[#2D3F59] font-bold text-[6px]">
                  Lactobacillus
                </a>
                <a className="tex-[#727272] text-[5px] font-light">
                  Invigorate your gut microbiome
                </a>
              </div>
              <div className="absolute">
                <a className="underline font-bold text-[5px] text-[#003569]">
                  SEE MORE
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <Image src={banner_6} width={60} height={60} alt="ban2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
