import Image from 'next/image';

const bannerImages = [
  { src: './images/banners/banner_1.svg', alt: 'ban1' },
  { src: './images/banners/banner_2.svg', alt: 'ban2' },
  { src: './images/banners/banner_3.svg', alt: 'ban3' },
  { src: './images/banners/banner_4.svg', alt: 'ban4' },
  { src: './images/banners/banner_5.svg', alt: 'ban5' },
  { src: './images/banners/banner_6.svg', alt: 'ban6' },
];

const BannerItem = ({ src, alt, title, description }: any) => {
  return (
    <div className="relative">
      <Image src={src} width={200} height={200} alt={alt} />
      <div className="absolute top-2 left-[7px]">
        <div className="flex flex-col gap-1 justify-center">
          <a className="text-[#2D3F59] font-bold text-[6px]">{title}</a>
          <a className="text-[#727272] text-[5px] font-light">{description}</a>
        </div>
        <div className="absolute">
          <a className="underline font-bold text-[5px] text-[#003569]">SEE MORE</a>
        </div>
      </div>
    </div>
  );
};

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
          {bannerImages.slice(0, 2).map((banner, index) => (
            <BannerItem
              key={index}
              src={banner.src}
              alt={banner.alt}
              title={
                index === 0 ? 'Vitamin C' : index === 1 ? 'Vitamin B3' : ''
              }
              description={
                index === 0
                  ? 'Vitamin C as ascorbic acid'
                  : index === 1
                  ? 'Niacin for healthy gut and skin'
                  : ''
              }
            />
          ))}
        </div>
        <div className="flex justify-center gap-1">
          {bannerImages.slice(2, 5).map((banner, index) => (
            <BannerItem
              key={index}
              src={banner.src}
              alt={banner.alt}
              title={
                index === 0
                  ? 'Magnesium'
                  : index === 1
                  ? 'Hyaluronic Acid'
                  : index === 2
                  ? 'Lactobacillus'
                  : ''
              }
              description={
                index === 0
                  ? 'Boost energy and support muscle function'
                  : index === 1
                  ? 'For smooth, supple and soft skin!'
                  : index === 2
                  ? 'Invigorate your gut microbiome'
                  : ''
              }
            />
          ))}
          <div className="">
            <Image src={bannerImages[5].src} width={60} height={60} alt={bannerImages[5].alt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;