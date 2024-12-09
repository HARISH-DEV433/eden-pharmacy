import Image from "next/image";

const logo = "./images/assets/logo.svg";
const icon_1 = "./images/assets/icon_1.svg";
const icon_2 = "./images/assets/icon_2.svg";
const icon_3 = "./images/assets/icon_3.svg";
const loco = "./images/assets/location.svg";

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-[430px]">
    <div className="bg-[#17414F] w-full h-[120px] flex flex-col gap-2">
      <div className="flex justify-center gap-2 py-2">
        <div className="flex justify-center">
          <div className="flex justify-center items-center gap-2 bg-[#215D72] w-[130px] h-8 rounded-md">
            <div>
              <Image src={icon_1} width={20} height={20} alt="icon1" />
            </div>
            <div className="flex flex-col text-left justify-center">
              <div className="text-white text-[8px] font-thin font-sans">
                <a>Phone Number</a>
              </div>
              <div className="text-white text-[8px] font-medium font-sans">
                <a>+974 3118 1843</a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center items-center gap-2 bg-[#215D72] w-[130px] h-8 rounded-md">
            <div>
              <Image src={icon_2} width={20} height={20} alt="icon2" />
            </div>
            <div className="flex flex-col text-left justify-center">
              <div className="text-white text-[8px] font-thin font-sans">
                <a>Email Address</a>
              </div>
              <div className="text-white text-[8px] font-thin font-sans">
                <a>Elbrithcqhr@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center items-center gap-2 bg-[#215D72] w-[130px] h-8 rounded-md">
            <div>
              <Image src={icon_3} width={20} height={20} alt="icon3" />
            </div>
            <div className="flex flex-col text-left justify-center">
              <div className="text-white text-[7px] font-thin font-sans">
                <a>Office Location</a>
              </div>
              <div className="text-white text-[7px] font-medium font-sans">
                <a>Ambassador Street, Zone 61,</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-6 px-4">
        <div>
            <Image src={logo} width={100} height={100} alt="logo"/>
        </div>
        <div>
            <p className="text-white text-[6px] font-thin text-left text-wrap w-[160px]">
            Your health, physical and emotional well-being is important 
            to us.We are always by your side and have made it even 
            easier for you to find the necessary vitamins.
            </p>
        </div>
      </div>
      <div className="flex items-center gap-1 px-4">
        <Image src={loco} width={10} height={50} alt="location"></Image>
        <p className="text-white text-[6px] font-light text-left text-wrap w-[200px]">
            Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
        </p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
