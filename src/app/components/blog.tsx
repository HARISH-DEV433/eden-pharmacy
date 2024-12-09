import Gallery from "../sub_components/gallery";

const Blog = () => {
    return(
        <div className="absolute w-[350px] bottom-[400px] left-[50px]">
            <div className="flex justify-center">
                <div className="flex justify-center flex-col items-center">
                    <a className="text-[7px] text-[#003569] font-bold">OUR BLOG</a>
                    <a className="text-[12px] text-[#17414F] font-bold">Latest News</a>
                </div>
            </div>
            <div className="absolute -left-8">
                <Gallery />
            </div>
        </div>
    )
}

export default Blog;    