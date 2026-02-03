import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award, Clock } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "Access to a wide range of subjects and courses designed for holistic development",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn from experienced teachers dedicated to student success and growth",
  },
  {
    icon: Award,
    title: "Academic Excellence",
    description: "Proven track record of outstanding results and student achievements",
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Modern approach to education with both traditional and digital resources",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose Our School?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide a nurturing environment where students can excel academically and personally
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-border hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};