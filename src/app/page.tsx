import Navbar from "./components/navbar";
import Vita from "./components/vita";
import Ingredients from "./components/ingredients";
import Blog from "./components/blog";
import Footer from "./components/footer";

export default function Home() {
  return (
    /*------------Landing page---------------*/
    <div className="bg-white text-black">
      <Navbar />
      <Vita />
      <Ingredients />
      <Blog />
      <Footer />
    </div>
    /*------------Landing page---------------*/
  );
}
