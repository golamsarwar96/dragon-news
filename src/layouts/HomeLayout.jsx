import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav>
        <section className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </section>
      </nav>
      <main className="w-11/12 mx-auto mt-10 grid md:grid-cols-12 gap-3">
        <aside className="col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6">Main content</section>
        <aside className="col-span-3">Right Navbar</aside>
      </main>
    </div>
  );
};

export default HomeLayout;
