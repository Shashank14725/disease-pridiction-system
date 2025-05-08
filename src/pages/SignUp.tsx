
import React from "react";
import Navbar from "@/components/Navbar";
import SignUpForm from "@/components/auth/SignUpForm";
import Footer from "@/components/Footer";

const SignUp: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-health-lightGray">
        <div className="container px-4">
          <SignUpForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
