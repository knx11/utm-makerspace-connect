import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Calendar, FileImage, UserCheck } from "lucide-react";
import makerspaceLogo from "@/assets/makerspace-room.png";
const HowItWorks = () => {
  return <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-12 fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              HOW IT WORKS
            </h1>
            <p className="text-2xl md:text-3xl font-semibold">TUTORIAL PAGE</p>
          </div>

          <div className="h-px bg-foreground/20 max-w-md mx-auto" />

          <div className="space-y-6 max-w-2xl mx-auto">
            <Link to="/booking" className="block">
              <button className="btn-makerspace w-full flex items-center justify-center gap-3 text-lg">
                <Calendar className="w-6 h-6 text-primary" />
                BOOK YOUR TIME
              </button>
            </Link>

            <button className="btn-makerspace w-full flex items-center justify-center gap-3 text-lg group">
              <FileImage className="w-6 h-6 text-primary" />
              <span>PREPARE YOUR FILE (IMAGES, DESIGNS)</span>
            </button>

            <button className="btn-makerspace w-full flex flex-col items-center justify-center gap-2 text-lg py-6">
              <div className="flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-primary" />
                <span>CHECK IN WITH STAFF</span>
              </div>
              <span className="text-sm text-muted-foreground">(ADD ICONS OR SIMPLE ARROWS)</span>
            </button>
          </div>

          <div className="h-px bg-foreground/20 max-w-md mx-auto" />

          <div className="pt-8">
            
          </div>

          <div className="bg-card rounded-3xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4 text-left">
              <div>
                <h4 className="font-semibold text-lg">Do I need experience?</h4>
                <p className="text-muted-foreground">
                  Not at all! We provide tutorials and staff support for all skill levels.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Can I bring my own materials?</h4>
                <p className="text-muted-foreground">
                  Yes! You can bring your own materials or purchase them from us.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">What file types do you accept?</h4>
                <p className="text-muted-foreground">
                  We accept .stl, .svg, .png, and other common design file formats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>;
};
export default HowItWorks;