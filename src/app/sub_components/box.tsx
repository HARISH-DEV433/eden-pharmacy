import Image from 'next/image';

const materialIcons = {
  bag: './images/material_icons/bag.svg',
  ball: './images/material_icons/ball.svg',
  box: './images/material_icons/box.svg',
  lab: './images/material_icons/lab.svg',
  leaf: './images/material_icons/leaf.svg',
  recycle: './images/material_icons/recycle.svg',
};

const FeatureItem = ({ icon, title, description }: any) => {
  return (
    <div className="flex flex-col justify-center gap-1 items-center">
      <div className="bg-white w-7 h-7 rounded-full flex justify-center items-center">
        <Image src={icon} width={10} height={0} alt={title} />
      </div>
      <h3 className="text-white font-medium text-[8px] text-center">{title}</h3>
      <p className="w-[100px] h-[20px] text-center text-wrap font-thin text-[5px] text-[#D9D9D9]">
        {description}
      </p>
    </div>
  );
};

const Box = () => {
  return (
    <div>
      <div className="bg-[#17414F] absolute left-[50px] bottom-[-80px] w-[320px] h-[130px] rounded-3xl">
        <div className="absolute top-[-16px] left-[2px]">
          <div className="flex flex-col gap-1">
            <div className="flex justify-center gap-1">
              <FeatureItem
                icon={materialIcons.lab}
                title="Clinically Studied"
                description="All products that we offer have undergone lab and safety tests"
              />
              <FeatureItem
                icon={materialIcons.leaf}
                title="Vegetarian Friendly"
                description="We have a wide selection of vegetarian products to meet your needs"
              />
              <FeatureItem
                icon={materialIcons.ball}
                title="Made in India"
                description="Shop local and explore health products made right here in India"
              />
            </div>
            <div className="flex justify-center gap-3">
              <FeatureItem
                icon={materialIcons.bag}
                title="Free shipping"
                description="We deliver to your door with no shipping costs on your orders"
              />
              <FeatureItem
                icon={materialIcons.box}
                title="No Risk"
                description="We ensure that all products are safe and within their use-by date"
              />
              <FeatureItem
                icon={materialIcons.recycle}
                title="GMO free"
                description="Natural, no modified products and derivatives for those who need it"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;