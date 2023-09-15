import Loglib from "@loglib/tracker/react";
import Navigation from "./components/navigation";
import Header from "./components/header";
import AboutSection from "./components/aboutSection";
import Donations from "./components/donations";
import ContactUs from "./components/contactUs";
import ThankYou from "./components/thankYou";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-[#151515] h-fit text-white">
      <Loglib
        config={{
          id: "ruthfulhearts_vercel",
        }}
      />

      <Navigation />
      <Header />
      <AboutSection />
      <Donations />
      <ContactUs />
      <ThankYou />
      <Footer />
    </div>
  );
}

export default App;
