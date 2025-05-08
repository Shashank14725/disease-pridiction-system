
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-white to-health-lightGray">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tighter">
              Your Health Data <span className="gradient-text">Visualized</span> with Clarity
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Track, analyze, and understand your health metrics with intuitive visualizations and personalized insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link to="/signup">
                <Button size="lg" className="bg-health-blue hover:bg-health-blue/90">
                  Get Started
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="border-health-blue text-health-blue hover:bg-health-blue/10">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative lg:block">
            <div className="relative mx-auto aspect-video overflow-hidden rounded-xl border bg-background shadow-lg md:w-full lg:max-w-none">
              <div className="bg-gradient-to-br from-health-blue/20 to-health-green/20 p-8 h-full flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full h-full max-h-[300px]">
                  <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col animate-pulse-slow">
                    <div className="h-4 bg-health-blue/20 rounded w-1/2 mb-2"></div>
                    <div className="flex-1 bg-health-green/10 rounded-md"></div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col animate-pulse-slow" style={{ animationDelay: "0.5s" }}>
                    <div className="h-4 bg-health-blue/20 rounded w-2/3 mb-2"></div>
                    <div className="flex-1 bg-health-coral/10 rounded-md"></div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col animate-pulse-slow" style={{ animationDelay: "1s" }}>
                    <div className="h-4 bg-health-blue/20 rounded w-1/3 mb-2"></div>
                    <div className="flex-1 bg-health-blue/10 rounded-md"></div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col animate-pulse-slow" style={{ animationDelay: "1.5s" }}>
                    <div className="h-4 bg-health-blue/20 rounded w-3/5 mb-2"></div>
                    <div className="flex-1 bg-health-green/10 rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
