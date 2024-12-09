import Image from "next/image";

const img1 = "./images/gallery/img1.svg";
const img2 = "./images/gallery/img2.svg";
const img3 = "./images/gallery/img3.svg";
const img4 = "./images/gallery/img4.svg";

const Gallery = () => {
    return(
        <div className="absolute w-[350px] h-[100px] left-0">
            <div className="flex flex-col">
            <div className="flex flex-col">
                <div className="absolute">
                    <Image src={img1} width={90} height={100} alt="img1" className="rounded-sm"/>
                </div>
                <a className="absolute top-2 w-8 h-3 bg-[#003569] text-[#FFFFFF] text-[5px] font-regular rounded-tr-full rounded-br-full text-center p-0.5">20 APR</a>
                <p className="absolute left-2 top-7 text-[#FFFFFF] text-[5px] font-regular">The Covid-19 Epidemic In 2022<br></br> Is Back</p>
            </div>
            <div className="flex flex-col">
                <div className="absolute left-[100px]">
                    <Image src={img2} width={90} height={100} alt="img1" className="rounded-sm"/>
                </div>
                <a className="absolute top-2 left-[100px] w-8 h-3 bg-[#003569] text-[#FFFFFF] text-[5px] font-regular rounded-tr-full rounded-br-full text-center p-0.5">20 APR</a>
                <p className="absolute left-[110px] top-7 text-[#FFFFFF] text-[5px] font-regular">The Covid-19 Epidemic In 2022<br></br> Is Back</p>
            </div>
            <div className="flex flex-col">
                <div className="absolute left-[200px]">
                    <Image src={img1} width={90} height={100} alt="img1" className="rounded-sm"/>
                </div>
                <a className="absolute top-2 left-[200px] w-8 h-3 bg-[#003569] text-[#FFFFFF] text-[5px] font-regular rounded-tr-full rounded-br-full text-center p-0.5">20 APR</a>
                <p className="absolute left-[210px] top-7 text-[#FFFFFF] text-[5px] font-regular">The Covid-19 Epidemic In 2022<br></br> Is Back</p>
            </div>
            <div className="flex flex-col">
                <div className="absolute -right-10">
                    <Image src={img2} width={90} height={100} alt="img1" className="rounded-sm"/>
                </div>
                <a className="absolute top-2 left-[300px] w-8 h-3 bg-[#003569] text-[#FFFFFF] text-[5px] font-regular rounded-tr-full rounded-br-full text-center p-0.5">20 APR</a>
                <p className="absolute left-[310px] top-7 text-[#FFFFFF] text-[5px] font-regular">The Covid-19 Epidemic In 2022<br></br> Is Back</p>
            </div>
            <div></div>
            <div className="flex flex-col">
                <div className="absolute top-[120px]">
                    <Image src={img3} width={90} height={100} alt="img1" className="rounded-sm"/>
                </div>
                <a className="absolute top-[125px] w-8 h-3 bg-[#003569] text-[#FFFFFF] text-[5px] font-regular rounded-tr-full rounded-br-full text-center p-0.5">20 APR</a>
                <p className="absolute left-2 top-[140px] text-[#FFFFFF] text-[5px] font-regular">The Covid-19 Epidemic In 2022<br></br> Is Back</p>
            </div>
            <div className="flex flex-col">
                <div className="absolute left-[100px] top-[60px]">
                    <Image src={img4} width={90} height={100} alt="img1" className="rounded-sm"/>
                </div>
                <a className="absolute top-[70px] left-[100px] w-8 h-3 bg-[#003569] text-[#FFFFFF] text-[5px] font-regular rounded-tr-full rounded-br-full text-center p-0.5">20 APR</a>
                <p className="absolute left-[110px] top-[85px] text-[#FFFFFF] text-[5px] font-regular">The Covid-19 Epidemic In 2022<br></br> Is Back</p>
            </div>
            <div className="flex flex-col">
                <div className="absolute left-[200px] top-[120px]">
                    <Image src={img3} width={90} height={100} alt="img1" className="rounded-sm"/>
                </div>
                <a className="absolute top-[125px] left-[200px] w-8 h-3 bg-[#003569] text-[#FFFFFF] text-[5px] font-regular rounded-tr-full rounded-br-full text-center p-0.5">20 APR</a>
                <p className="absolute left-[210px] top-[140px] text-[#FFFFFF] text-[5px] font-regular">The Covid-19 Epidemic In 2022<br></br> Is Back</p>
            </div>
            <div className="flex flex-col">
                <div className="absolute -right-10 top-[60px]">
                    <Image src={img4} width={90} height={100} alt="img1" className="rounded-sm"/>
                </div>
                <a className="absolute top-[70px] left-[300px] w-8 h-3 bg-[#003569] text-[#FFFFFF] text-[5px] font-regular rounded-tr-full rounded-br-full text-center p-0.5">20 APR</a>
                <p className="absolute left-[310px] top-[85px] text-[#FFFFFF] text-[5px] font-regular">The Covid-19 Epidemic In 2022<br></br> Is Back</p>
            </div>
            </div>
        </div>
    )
}

export default Gallery;