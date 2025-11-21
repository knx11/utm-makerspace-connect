import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { toast } from "sonner";
const Workshops = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const workshops = [
    {
      title: "3D Printing Basics",
      schedule: "Tuesdays 3 PM",
      description: "Learn the fundamentals of 3D printing, from design to finished product. No experience needed!"
    },
    {
      title: "Build With Others",
      schedule: "Thursdays 1 PM",
      description: "Open collaboration session where students work on projects together and share ideas."
    },
    {
      title: "Laser Cutting Workshop",
      schedule: "Wednesdays 2 PM",
      description: "Master the laser cutter and create intricate designs on various materials."
    }
  ];

  const filteredWorkshops = workshops.filter((workshop) =>
    workshop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    workshop.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleJoinGroup = (title: string) => {
    toast.success(`You've joined ${title}!`);
  };

  const handleReserveNow = (title: string) => {
    toast.success(`Spot reserved for ${title}!`);
  };

  const handleSuggestWorkshop = () => {
    toast.success("Workshop suggestion submitted!");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto space-y-12 fade-in">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Join a Workshop – Learn & Build Together
            </h1>
            <p className="text-lg text-muted-foreground">
              Find your community and create together.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="Search workshops (e.g. 3D printing, laser cutting)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="py-6 text-base rounded-3xl bg-card/80 border-none shadow-sm"
            />
          </div>

          <div className="space-y-6">
            {filteredWorkshops.map((workshop) => (
              <div
                key={workshop.title}
                className="bg-card rounded-3xl p-8 shadow-md"
              >
                <h3 className="text-2xl font-bold mb-1">{workshop.title}</h3>
                <p className="text-base font-semibold text-foreground mb-4">
                  {workshop.schedule}
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {workshop.description}
                </p>
                <div className="flex gap-3">
                  <Button
                    onClick={() => handleJoinGroup(workshop.title)}
                    variant="outline"
                    className="flex-1 rounded-full border-2 border-foreground bg-card hover:bg-foreground/5 font-semibold"
                  >
                    Join Group
                  </Button>
                  <Button
                    onClick={() => handleReserveNow(workshop.title)}
                    className="flex-1 rounded-full border-2 border-primary bg-card hover:bg-primary/5 text-foreground font-semibold"
                    variant="outline"
                  >
                    Reserve Now
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Button
              onClick={handleSuggestWorkshop}
              variant="outline"
              className="rounded-full border-2 border-foreground bg-card hover:bg-foreground/5 font-semibold px-8 py-6 text-base"
            >
              <Plus className="w-5 h-5 mr-2" />
              Suggest a Workshop
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Workshops;