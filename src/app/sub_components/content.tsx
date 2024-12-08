import Image from "next/image";

const medi_1 = "./images/assets/medico_1.svg";
const medi_2 = "./images/assets/medico_2.svg";
const medi_3 = "./images/assets/medico_3.svg";

const Content = () => {
    return(
        <div>
            <div className="flex flex-col gap-2 top-[10px] left-[15px] relative">
          <div className="flex gap-2 top-[10px] relative">
            <div className="flex">
              <Image src={medi_1} width={20} height={20} alt="medico_1" />
            </div>
            <div>
              <div className="flex flex-col text-left">
                <a className="font-bold text-[#17414F] text-[6px]">Vitamins</a>
                <a className="font-thin text-[#727272] text-[5px] text-wrap w-[80px]">
                  Increased Vitamins and minerals in your diet
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-2 top-[10px] relative">
            <div className="flex">
              <Image src={medi_2} width={20} height={20} alt="medico_1" />
            </div>
            <div>
              <div className="flex flex-col text-left">
                <a className="font-bold text-[#17414F] text-[6px]">
                  Weight Loss
                </a>
                <a className="font-thin text-[#727272] text-[5px] text-wrap w-[120px]">
                  Weight Loss <br></br>Find scientifically proven solutions
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-2 top-[10px] relative">
            <div className="flex">
              <Image src={medi_3} width={20} height={20} alt="medico_1" />
            </div>
            <div>
              <div className="flex flex-col text-left">
                <a className="font-bold text-[#17414F] text-[6px]">
                  Functional Foods
                </a>
                <a className="font-thin text-[#727272] text-[5px] text-wrap w-[120px]">
                  Functional Foods <br></br>From protein powers to baby formula
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Content;