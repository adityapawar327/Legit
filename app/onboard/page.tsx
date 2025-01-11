import Navbar from "@/components/navbar/navbar";
import ContactForm from "./contact-form";

const OnBoard = () => {
  return (
    <div className="bg-gradient-to-b from-purple-200 to-purple-200">
      <Navbar />
      <div >
        <ContactForm />
      </div>
    </div>
  );
};

export default OnBoard;