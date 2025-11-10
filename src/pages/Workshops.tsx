import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import makerspaceRoom from "@/assets/makerspace-room.png";
import { toast } from "sonner";

const Workshops = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const workshops = [
    {
      title: "SESSION 1: 3D PRINTING BASICS",
      schedule: "TUESDAYS 3 PM",
      description: "Learn the fundamentals of 3D printing and create your first print",
    },
    {
      title: "SESSION 2: BUILD WITH OTHERS",
      schedule: "THURSDAYS 1 PM",
      description: "Collaborative building sessions with fellow makers",
    },
  ];

  const handleJoinGroup = () => {
    toast.success("You've joined the workshop group!");
  };

  const handleReserveNow = () => {
    toast.success("Workshop spot reserved!");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-6xl mx-auto space-y-12 fade-in">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              JOIN WORKSHOP
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold">
              WELCOME TO UTM<br />MAKERSPACE
            </h2>
          </div>

          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search workshops (e.g. 3D printing, laser cutting)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-lg rounded-full shadow-lg"
            />
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {workshops.map((workshop) => (
              <div key={workshop.title} className="btn-makerspace text-center py-6">
                <h3 className="font-bold text-xl mb-2">{workshop.title}</h3>
                <p className="text-lg">{workshop.schedule}</p>
              </div>
            ))}

            <div className="btn-makerspace text-center py-6 flex items-center justify-center gap-3">
              <span className="text-xl font-bold">JOIN GROUP</span>
              <Wrench className="w-6 h-6 text-primary" />
            </div>
          </div>

          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold">RESERVE NOW</h3>
            <div className="max-w-4xl mx-auto">
              <img
                src={makerspaceRoom}
                alt="Makerspace Room"
                className="w-full rounded-[60px] shadow-2xl"
              />
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <button onClick={handleJoinGroup} className="btn-makerspace px-12">
                Join Group
              </button>
              <button onClick={handleReserveNow} className="btn-makerspace px-12">
                Reserve Now
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Import Wrench icon
import { Wrench } from "lucide-react";

export default Workshops;
