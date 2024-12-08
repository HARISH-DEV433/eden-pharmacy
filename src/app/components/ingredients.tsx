import Image from "next/image";

const banner_1 = "./images/banners/banner_1.svg";
const banner_2 = "./images/banners/banner_2.svg";

const Ingredients = () => {
    return(
        <div className="w-[350px] absolute top-[350px] left-[40px]">
            <div className="flex justify-center gap-1">
            <div className="flex flex-col justify-center">
                <a className="text-[#003569] font-medium text-[6px]">INGREDIENTS</a>
                <a className="text-[#003569] font-bold text-[8px]">Better Ingredients</a>
                <p className="text-wrap text-[#727272] text-[4px] w-[150px]">Only the best when you choose products offered on our platform - high-quality ingredients for high quality products!</p>
            </div>
            <div className="relative">
                <Image src={banner_1} width={200} height={200} alt="ban1" />
                <div className="absolute top-2 left-[7px]">
                    <div className="flex flex-col gap-1 justify-center">
                        <a className="text=[#2D3F59] font-bold text-[6px]">Vitamin C</a>
                        <a className="tex-[#727272] text-[4px] font-light">Vitamin C as ascorbic acid</a>
                    </div>
                    <div className="absolute">
                        <a className="underline font-bold text-[5px] text-[#003569]">SEE MORE</a>
                    </div>
                </div>
            </div>
            <div className="relative">
                <Image src={banner_2} width={200} height={200} alt="ban2" />
            </div>
            </div>
        </div>
    )
}


export default Ingredients;