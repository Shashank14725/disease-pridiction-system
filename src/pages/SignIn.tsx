
import React from "react";
import Navbar from "@/components/Navbar";
import SignInForm from "@/components/auth/SignInForm";
import Footer from "@/components/Footer";

const SignIn: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-health-lightGray">
        <div className="container px-4">
          <SignInForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
