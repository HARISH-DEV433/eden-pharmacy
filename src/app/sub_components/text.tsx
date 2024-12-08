const Text = () => {
  return (
    <div>
      <div className="flex flex-col gap-1 relative top-[45px] left-[20px]">
        <div>
          <p className="text-[#727272] text-[8px] font-thin">
            Online Medical Supplies
          </p>
        </div>
        <div>
          <p className="w-[90px] text-[10px] font-medium text-[#17414F]">
            Get Your Vitamins & Minerals
          </p>
        </div>
        <div>
          <button className="px-4 py-1 text-[8px] text-white bg-[#17414F] rounded-xl">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Text;
