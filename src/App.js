import Loglib from "@loglib/tracker/react";
import AboutSection from "./components/aboutSection";
import Footer from "./components/footer";
import Header from "./components/header";
import Navigation from "./components/navigation";
import ContactUs from "./components/contactUs";
import ThankYou from "./components/thankYou";
import Donations from "./components/donations";

function App() {
  return (
    <div className="bg-[#151515] w-screen h-fit text-white">
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
