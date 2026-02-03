import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[600px] flex items-center bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Education is create better{" "}
              <span className="text-primary">future</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              We're on a journey to shape the future of management and to accelerate the transformation of society. Learn with the guidance of our experienced mentors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/auth?tab=signup">
                <Button size="lg" className="bg-hero-gradient hover:opacity-90 transition-opacity group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/#about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-semibold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-semibold text-foreground">Join +500 Students</p>
                <p className="text-muted-foreground">Trusted by professionals</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src={heroImage}
                alt="Student learning"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-card border border-border hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">300+</p>
                  <p className="text-sm text-muted-foreground">Active Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};