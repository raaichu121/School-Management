import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    "State-of-the-art infrastructure and facilities",
    "Experienced and qualified teaching staff",
    "Holistic development through academics and activities",
    "Strong parent-teacher collaboration",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-hero-gradient text-white border-0">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg opacity-90">
                  To provide quality education that empowers students to become responsible global citizens,
                  equipped with knowledge, skills, and values to excel in their chosen paths.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">About Our School</h2>
            <p className="text-lg text-muted-foreground">
              With decades of excellence in education, we are committed to nurturing young minds
              and preparing them for a successful future.
            </p>
            
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};