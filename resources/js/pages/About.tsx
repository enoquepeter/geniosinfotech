import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;