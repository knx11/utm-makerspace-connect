import Navigation from "@/components/Navigation";
import { Mail, Clock, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto space-y-12 fade-in">
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              ABOUT US
            </h1>
            <p className="text-2xl font-semibold">UTM MAKERSPACE</p>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">What is UTM Makerspace?</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                The UTM Makerspace is a collaborative workspace where students can bring their 
                ideas to life. Whether you're prototyping a product, creating art, or learning 
                new skills, our space provides the tools and community support you need.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We offer state-of-the-art equipment including 3D printers, laser cutters, 
                Cricut machines, and more. No experience necessary — our friendly staff and 
                workshops will help you get started.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t">
              <h2 className="text-3xl font-bold">Available Tools & Equipment</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-background/50 rounded-2xl p-6">
                  <h3 className="font-bold text-xl mb-2">3D Printers</h3>
                  <p className="text-muted-foreground">Create physical objects from digital designs</p>
                </div>
                <div className="bg-background/50 rounded-2xl p-6">
                  <h3 className="font-bold text-xl mb-2">Laser Cutters</h3>
                  <p className="text-muted-foreground">Precision cutting and engraving</p>
                </div>
                <div className="bg-background/50 rounded-2xl p-6">
                  <h3 className="font-bold text-xl mb-2">Cricut Machines</h3>
                  <p className="text-muted-foreground">Crafting and vinyl cutting</p>
                </div>
                <div className="bg-background/50 rounded-2xl p-6">
                  <h3 className="font-bold text-xl mb-2">Electronics Lab</h3>
                  <p className="text-muted-foreground">Soldering and circuit building</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t">
              <h2 className="text-3xl font-bold">Contact & Hours</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-primary" />
                  <a href="mailto:makerspace@utm.utoronto.ca" className="text-lg hover:underline">
                    makerspace@utm.utoronto.ca
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <span className="text-lg">Mon-Fri: 9 AM - 8 PM, Sat-Sun: 10 AM - 6 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span className="text-lg">Deerfield Hall, Room 2050</span>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 rounded-2xl p-8 mt-8">
              <blockquote className="text-center space-y-4">
                <p className="text-xl italic leading-relaxed">
                  "Before I joined the makerspace, I didn't know anyone. Now, I have a team 
                  and a project I'm proud of."
                </p>
                <footer className="font-semibold">— ICCIT Student</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
